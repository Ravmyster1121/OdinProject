const leapYears = function (year) {
  const divisibleBy4 = year % 4 == 0 ? true : false;
  const isCentury = year % 100 == 0 ? true : false;
  const divisibleBy400 = year % 400 == 0 ? true : false;

  return divisibleBy4 && (!isCentury || divisibleBy400) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
