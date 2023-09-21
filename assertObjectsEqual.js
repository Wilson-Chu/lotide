const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1); // Array of keys
  let objKeys2 = Object.keys(object2);

  // Check for same number of keys
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (let objKey1 of objKeys1) {
    // Check for arrays at each key, and compare arrays if they exist
    if (Array.isArray(objKeys1[objKey1]) && Array.isArray(objKeys2[objKey1])) {
      return eqArrays(objKeys1[objKey1], objKeys2[objKey1]);
    }
    // Check for same values at each key
    else if (objKeys1[objKey1] !== objKeys2[objKey1]) {
      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};


// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
