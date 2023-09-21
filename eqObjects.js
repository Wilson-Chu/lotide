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

// if (arr1.length !== arr2.length) {
//   return false;
// }

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] !== arr2[i]) {
//     return false;
//   }
// }

// return true;
// };
const eqObjects = function (object1, object2) {
  let objKeys1 = Object.keys(object1); // Array of keys
  let objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (let objKey1 of objKeys1) {
    if (objKeys1[objKey1] !== objKeys2[objKey1]) {
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