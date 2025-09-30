module.exports = (md) => {
  // Replace the original blockquote rule
  md.block.ruler.at('blockquote', (state, startLine, endLine, silent) => {
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];

    // Check if it starts with '>'
    if (state.src.charCodeAt(pos) !== 0x3E) return false;
    pos++;

    // Skip spaces after '>'
    while (pos < max && state.src.charCodeAt(pos) === 0x20) pos++;

    // Get the content
    let content = state.src.slice(pos, max);
    
    if (silent) return true;

    // Check for attribute syntax
    const attributeMatch = content.match(/^\[(.+?)\]\s*(.+)$/);
    
    // Create opening token
    let token = state.push('blockquote_open', 'blockquote', 1);
    // Always add big-text attribute, with value from attributeMatch or &quot;
    token.attrs = [
      ['big-text', attributeMatch ? attributeMatch[1] : '&quot;']
    ];
    if (attributeMatch) {
      token.attrs.push(['class', 'small']);
      content = attributeMatch[2];
    }

    // Create paragraph token
    token = state.push('paragraph_open', 'p', 1);
    
    // Create text token with content
    token = state.push('text', '', 0);
    token.content = content.trim();

    // Close paragraph
    state.push('paragraph_close', 'p', -1);

    // Close blockquote
    state.push('blockquote_close', 'blockquote', -1);

    state.line = startLine + 1;
    return true;
  });

  // Add custom render rules
  md.renderer.rules.blockquote_open = (tokens, idx) => {
    const token = tokens[idx];
    const attrs = token.attrs
      .map(([name, val]) => `${name}="${val}"`)
      .join(' ');
    return `<blockquote ${attrs}>`;
  };
};
