// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
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
const eqObjects = function (object1, object2) {
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

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let result = eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(result, true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
result = eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(result, false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
result = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(result, true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
result = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(result, false);