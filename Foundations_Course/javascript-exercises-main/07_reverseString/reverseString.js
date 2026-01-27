const reverseString = function (str) {
  let revStr = "";
  for (let i = str.length; i > 0; i--) {
    revStr = revStr + str[i - 1];
  }
  return revStr;
};

// Do not edit below this line
module.exports = reverseString;
