// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
};

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let result = eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(result, true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
result = eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(result, false);