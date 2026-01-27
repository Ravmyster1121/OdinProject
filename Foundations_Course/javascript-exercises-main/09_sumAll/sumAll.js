const sumAll = function (a, b) {
  // Input checking
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  let result = 0;

  let min = null;
  let max = null;

  // Logic Here
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  for (i = min; i <= max; i++) {
    result = result + i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
