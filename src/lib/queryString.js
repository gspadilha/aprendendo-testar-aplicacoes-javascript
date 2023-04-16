module.exports.queryString = obj =>
  Object.entries(obj)
    .map(([key, val]) => `${key}=${val.replaceAll(' ', '%20')}`)
    .join('&');
