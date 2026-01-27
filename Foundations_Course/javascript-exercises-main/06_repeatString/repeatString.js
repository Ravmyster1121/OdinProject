const repeatString = function (string, count) {
  let strResult = "";
  if (count < 0) return "ERROR";
  for (let i = 0; i < count; i++) {
    strResult = strResult + string;
  }
  return strResult;
};

// Do not edit below this line
module.exports = repeatString;
