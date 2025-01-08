const filters = require('./src/_11ty/filters.js');
const tagColors = require('./src/_data/tagColors.js');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const blockquotePlugin = require('./src/_11ty/plugins/blockquotePlugin.js');

module.exports = function(eleventyConfig) {
  // Create markdown-it instance
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  const md = markdownIt(mdOptions)
    .use(markdownItAttrs)
    .use(blockquotePlugin);

  // Extend markdown-it with site data
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true
  });

  eleventyConfig.on('beforeRender', function(data) {
    data.site = require('./src/_data/site.js');
  });

  // Add custom link renderer that checks against allowed domains
  md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
    const token = tokens[idx];
    const href = token.attrs[token.attrIndex('href')][1];
    
    try {
      const url = new URL(href);
      const siteData = require('./src/_data/site.js');
      const isInternalDomain = siteData.domains.some(domain => 
        url.hostname === domain || url.hostname.endsWith('.' + domain)
      );
      
      if (!isInternalDomain) {
        token.attrPush(['target', '_blank']);
        token.attrPush(['rel', 'noopener noreferrer']);
      }
    } catch (e) {
      // If URL parsing fails, it's likely a relative link - treat as internal
    }
    
    return self.renderToken(tokens, idx, options);
  };

  // Add custom image renderer
  md.renderer.rules.image = function(tokens, idx, options, env, slf) {
    const token = tokens[idx];
    const src = token.attrs[token.attrIndex('src')][1];
    const alt = token.content;
    
    return `<figure>
      <img src="${src}" alt="${alt}" loading="lazy">
      <figcaption>${alt}</figcaption>
    </figure>`;
  };

  // Configure Eleventy to use this markdown-it instance
  eleventyConfig.setLibrary("md", md);

  // Add filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Add limit filter
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // Add collections with exclude filter and auto-tag featured posts
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .filter(item => {
        const postDate = new Date(item.data.date); // Use front matter `date`
        const now = new Date(); // Current date
        return postDate <= now && !item.data.exclude; // Show only past or current posts
      })
      .map(item => {
        if (item.data.featured) {
          item.data.tags = item.data.tags || [];
          if (!item.data.tags.includes('Uitgelicht')) {
            item.data.tags.push('Uitgelicht');
          }
        }
        return item;
      });
  });
  
  // Update featured blog collection to use same tag logic
  eleventyConfig.addCollection("featuredBlog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .filter(item => {
        const postDate = new Date(item.data.date); // Use front matter `date`
        const now = new Date(); // Current date
        return postDate <= now && item.data.featured && !item.data.exclude; // Show only past or current posts
      })
      .map(item => {
        item.data.tags = item.data.tags || [];
        if (!item.data.tags.includes('Uitgelicht')) {
          item.data.tags.push('Uitgelicht');
        }
        return item;
      });
  });

  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  });  

  // Group posts by tag and exclude posts with exclude: true
  eleventyConfig.addCollection("postsByTag", function(collectionApi) {
    const tagMap = {};
    collectionApi.getAll().forEach(item => {
      if (item.data.tags && !item.data.exclude) {
        item.data.tags.forEach(tag => {
          if (!tagMap[tag]) {
            tagMap[tag] = [];
          }
          tagMap[tag].push(item);
        });
      }
    });
    return tagMap;
  });

  // Create ordered array of all colored tags
  const orderedTags = [
    ...tagColors.orange,
    ...tagColors.yellow,
    ...tagColors.red,
    ...tagColors.green
  ];

  // Add sort by tag order filter
  eleventyConfig.addFilter("sortByTagOrder", function(tags) {
    // Split tags into colored and uncolored
    const coloredTags = tags.filter(tag => orderedTags.includes(tag));
    const uncoloredTags = tags.filter(tag => !orderedTags.includes(tag));

    // Sort colored tags by predefined order
    const sortedColoredTags = coloredTags.sort((a, b) => 
      orderedTags.indexOf(a) - orderedTags.indexOf(b)
    );

    // Sort uncolored tags alphabetically
    const sortedUncoloredTags = uncoloredTags.sort((a, b) => 
      a.localeCompare(b)
    );

    // Combine arrays with uncolored tags at end
    return [...sortedColoredTags, ...sortedUncoloredTags];
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/script");
  eleventyConfig.addPassthroughCopy("src/project");
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("readme.md");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
