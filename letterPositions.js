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

const letterPositions = function(sentence) {
  const results = {};

  // logic to update results here
  const stringLowerCase = sentence.toLowerCase();

  for (let i = 0; i < stringLowerCase.length; i++) {
    if (results[stringLowerCase[i]]) {
      results[stringLowerCase[i]].push(i);
    } else {
      results[stringLowerCase[i]] = [i];
    }
  }

  return results;
};

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);  // => should PASS
assertArraysEqual(letterPositions("HELLO").l, [2, 3]);  // => should PASS
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);  // => should PASS