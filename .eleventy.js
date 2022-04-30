module.exports = (config) => {
  config.addPassthroughCopy('css');

  return {
    passthroughFileCopy: true,
    markdowndownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
