# Personal Portfolio Website

A modern portfolio website built with 11ty (Eleventy) static site generator, showcasing my journey and growth as a designer and developer. This website represents the evolution of my work, combining clean design principles with efficient development practices.

## Tech Stack

- **Static Site Generator**: 11ty (Eleventy)
- **Languages**: HTML, CSS, JavaScript
- **Templating**: Nunjucks
- **Hosting**: Hostinger
- **Domain**: www.dennisulijn.com
- **Deployment**: Direct GitHub integration
- **Version Control**: Git

## Project Structure

```
SSG-portfolio/
├── _site/             # Site files ready for production
├── src/
│   ├── _data/         # Site data files
│   ├── _includes/     # Template partials
│   ├── _layouts/      # Base templates
│   ├── blog/          # Blog posts and articles
│   ├── script/        # JavaScript files
│   └── styles/        # CSS files
├── public/            # Built site output
└── .eleventy.js      # 11ty configuration
```

## About Me

As a pragmatic, analytical designer and developer, I bring a unique perspective to creative challenges. My approach combines technical precision with creative innovation - breaking down complex problems into manageable pieces while maintaining a holistic view.

Key characteristics that define my work:
- Strategic thinking with attention to detail
- Balance between minimalism and personality
- Data-driven design decisions
- Focus on user-centered solutions
- Ability to bridge technical and creative domains

My portfolio reflects this mindset: clean, purposeful design meets systematic implementation. Each project demonstrates my growth from a technical background into a well-rounded creative professional who values both form and function.

## Project Evolution

This portfolio has grown alongside my professional journey:

- Started as a simple HTML/CSS website
- Evolved into a categorized collection of personal projects, case studies and articles
- Implemented a template-based system for consistent content management
- Added dynamic features while maintaining static site benefits
- Integrated modal image viewing and responsive design

## Content Organization

Articles are organized into categories:
- Featured articles
- Design Process
- Design disciplines
- Methods and techniques
- Reflections

Each article includes:
- Clear metadata (title, date, tags)
- Featured images
- Detailed case studies
- Process documentation

## Deployment

The site is automatically deployed through GitHub Actions:
1. Push changes to the `dev` branch.
2. GitHub Actions builds the site and pushes the built site to the `main` branch.
3. Hosting party is configured to deploy files in the `main` branch directly to public_html.
4. Live site updates within seconds.

## GitHub Setup

### Branches
- **dev**: Development branch where changes are initially pushed.
- **main**: Production branch where the built site is pushed by GitHub Actions.

### Workflow
1. **Code**: Make changes and commit to the `dev` branch.
2. **Push to Dev**: Push changes to the `dev` branch.
3. **Auto Workflow to Main**: GitHub Actions automatically builds the site and pushes the built site to the `main` branch.
4. **Deploy to Hosting**: Hosting party is configured to deploy files in the `main` branch directly to public_html.

### GitHub Actions Configuration
The GitHub Actions workflow is defined in `.github/workflows/deploy.yml`

## Todo List

### Technical
- [x] Add video player
- [x] Add iframe player
- [x] Create dev and main channel
- [x] Create workflow to push _site from dev to main
- [x] Configure hosting party to push main channel to public_html
- [x] Implement lazy loading
- [x] Add previous / next article below article

### Content
- [x] Check article pages for data and layout
- [ ] Check article pages for easier reading
- [x] Update project thumbnails
- [x] Write about current projects
- [ ] Add dark mode support


### Design
- [x] Refine responsive design
- [ ] Update typography system
- [ ] Add more interactive elements
- [ ] Publish 2025 design style

### Performance

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run start

# Build for production
npm run build
```

## License

I believe in open knowledge sharing and the power of collaborative growth. While all content on my portfolio represents my personal and professional journey, you're welcome to:
- Draw inspiration from my work
- Learn from my processes and methods
- Reference and attribute my content
- Adapt ideas for your own growth

If you'd like to discuss any aspect of my work or have questions, I'm always open to engaging conversations that challenge and inspire. Reach out through my contact details.

Note: **Commercial** use of my work requires explicit permission.
