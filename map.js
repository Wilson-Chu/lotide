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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const nums = [123, 456, 789, 12, 345];
const mixedStuff = ['1', 2, 'three', 4, '5', '6'];

const results1 = map(words, word => word[0]);
const results2 = map(nums, num => num - 100);
const results3 = map(mixedStuff, thing => thing + 1);

// TEST CODE
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [23, 356, 689, -88, 245]);
assertArraysEqual(results3, ['11', 3, 'three1', 5, '51', '61']);