module.exports = {
  getLinkActiveState(itemURL, pageURL) {
    let response = '';
    if (itemURL === pageURL) {
      response = 'aria-current="page"';
    }
    if (itemURL.length > 1 && pageURL.indexOf(itemURL) === 0) {
      response += 'data-state="active"';
    }

    return response;
  },
};
