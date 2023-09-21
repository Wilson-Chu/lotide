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
    if (Array.isArray(object1[objKey1]) && Array.isArray(object2[objKey1])) {
      return eqArrays(object1[objKey1], object2[objKey1]);
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

const cardSet = { aces: 13, spades: [13, 5], hearts: 1, clubs: [1, 5] };
const secondCardSet = { spades: 5, clubs: [5, 1], aces: 13, hearts: 2 };
result = eqObjects(cardSet, secondCardSet); // => false
assertEqual(result, false);

const thirdCardSet = { aces: 13, spades: [13, 5], hearts: 1, clubs: [1, 5] };
const fourthCardSet = { spades: [5, 13], clubs: [5, 1], aces: 13, hearts: 1 };
result = eqObjects(thirdCardSet, fourthCardSet); // => true? (does array order matter?)
assertEqual(result, true);