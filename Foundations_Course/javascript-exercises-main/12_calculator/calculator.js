const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let result = 0;
  arr.forEach((num) => {
    result += num;
  });
  return result;
};

const multiply = function (arr) {
  let result = 1;
  arr.forEach((num) => {
    result *= num;
  });
  return result;
};

const power = function (num, power) {
  return Math.pow(num, power);
};

const factorial = function (num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
