const palindromes = function (rawStr) {
  let str = rawStr.toLowerCase().replace(/[^a-z0-9]/g, "");
  let revstr = [];
  for (let i = str.length; i > 0; i--) {
    revstr.push(str[i - 1]);
  }
  revstr = revstr.join("").toString();
  console.log(`revstr ${revstr} \nstr    ${str}`);
  return str == revstr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
