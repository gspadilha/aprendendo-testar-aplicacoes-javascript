const stringToQuery = ([key, val]) => {
  const ehArray = Array.isArray(val);

  if (typeof val === 'object' && !ehArray) {
    throw new Error('Não pode ser enviado um objeto');
  }

  return `${key}=${ehArray ? val : val.replaceAll(' ', '%20')}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(stringToQuery).join('&');

module.exports.parse = string => {
  const values = string.split('&');

  return Object.fromEntries(
    values.map(value => {
      let [key, val] = value.split('=');

      if (value.indexOf(',') > -1) {
        val = val.split(',');
      } else {
        val = val.replaceAll('%20', ' ');
      }

      return [key, val];
    }),
  );
};
