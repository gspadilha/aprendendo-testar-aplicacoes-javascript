module.exports.queryString = obj =>
  Object.entries(obj)
    .map(([key, val]) => {
      const ehArray = Array.isArray(val);

      if (typeof val === 'object' && !ehArray) {
        throw new Error('Não pode ser enviado um objeto');
      }

      return `${key}=${ehArray ? val : val.replaceAll(' ', '%20')}`;
    })
    .join('&');
