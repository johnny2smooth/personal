const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = (config) => {
  config.addPassthroughCopy('css');
  config.addPassthroughCopy('./src/images/');

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
