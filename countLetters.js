// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function (sentence) {
  console.log('countLetters: ');

  const allCharacters = {};

  const stringLowerCase = sentence.toLowerCase();

  for (const letter of stringLowerCase) {
    // If a letter in the string has already been defined, increment it.
    // Else, if it's the first time letter has been seen, initialize it with a count of 1.
    if (allCharacters[letter]) {
      allCharacters[letter]++;
    } else {
      allCharacters[letter] = 1;
    }
  }

  delete allCharacters[' '];

  return allCharacters;
};

let string = 'Lighthouse Labs Is So Cool';
console.log(countLetters(string));

/* Will evaluate to FALSE => objects cannot properly be compared using '===' */
// assertEqual(countLetters("lighthouse in the house"), {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
// );