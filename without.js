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

const without = (source, itemsToRemove) => {
  // Checks through source array for any itemsToRemove element, and does not include them in new array named filteredArr
  // .includes() parses through entire source array without caring about index order
  let filteredArr = source.filter(sourceItem => !itemsToRemove.includes(sourceItem));

  return filteredArr;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);  // => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);  // => should PASS
assertArraysEqual(without(["1", "2", "333"], [1, "2", "3"]), ["1", "333"]);  // => should PASS
assertArraysEqual(without([1, 2, "3", 3, "23", 1, 33, "33"], [1, "2", "3"]), [2, 3, "23", 33, "33"]);  // => should PASS

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);