// FUNCTION IMPLEMENTATION
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};

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

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["Hello", "World"]), []);
assertArraysEqual(middle(["Good", "Morning", "World"]), ["Morning"]);
assertArraysEqual(middle(["Good", "Morning", "And", "Good", "Night", "All"]), ["And", "Good"]);