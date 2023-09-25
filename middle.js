// FUNCTION IMPLEMENTATION
const middle = (ogArr) => {
  let middleArr = [];
  let startIndex;
  let stopIndex;

  if (ogArr.length > 2) {
    if (ogArr.length % 2 === 1) {
      startIndex = Math.floor(ogArr.length / 2);
      stopIndex = Math.floor(ogArr.length / 2) + 1;
    } else {
      startIndex = (ogArr.length / 2) - 1;
      stopIndex = (ogArr.length / 2) + 1;
    }

    middleArr = ogArr.slice(startIndex, stopIndex);
  }

  return middleArr;
};

module.exports = middle;