const mapArrToStrings = (numericArr) => {
  return numericArr
    .filter((el) => typeof el === 'number')
    .map((el) => String(el));
};

module.exports = mapArrToStrings;
