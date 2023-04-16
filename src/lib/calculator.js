module.exports.sum = (nun1, nun2) => {
  const s = parseInt(nun1, 10) + parseInt(nun2, 10);

  if (Number.isNaN(s)) {
    throw new Error("Não foi possível somar");
  }

  return s;
};
