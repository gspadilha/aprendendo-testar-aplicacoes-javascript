module.exports.queryString = obj => {
  return Object.entries(obj)
    .map(item => `${item[0]}=${item[1].replaceAll(' ', '%20')}`)
    .join('&');
};
