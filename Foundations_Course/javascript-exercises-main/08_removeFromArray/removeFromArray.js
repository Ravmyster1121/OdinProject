const removeFromArray = function (arr, ...nums) {
  let newArr = [];
  arr.forEach((el) => {
    if (!nums.includes(el)) {
      newArr.push(el);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
