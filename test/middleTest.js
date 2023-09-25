const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

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