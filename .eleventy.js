module.exports = (config) => {
  return {
    markdowndownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
