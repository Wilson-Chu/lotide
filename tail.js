// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }

  const tailArr = arr.slice(1);
  return tailArr;
};

module.exports = tail;