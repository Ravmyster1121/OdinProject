const factorial = function (input) {
  if (!Number.isInteger(input)) return undefined;
  if (input < 0) return undefined;
  if (input === 0) return 1;
  return input * factorial(input - 1);
};

// Do not edit below this line
module.exports = factorial;
