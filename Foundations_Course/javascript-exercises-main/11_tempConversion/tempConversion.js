const convertToCelsius = function (f) {
  let result = Math.round((f - 32) * (5 / 9) * 10) / 10;
  console.info(result);
  return result;
};

const convertToFahrenheit = function (c) {
  let result = Math.round((c * (9 / 5) + 32) * 10) / 10;
  console.info(result);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
