const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const findKey = (obj, callback) => {
  const keys = Object.keys(obj);

  for (const key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

// TEST CODE
const obj1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(obj1, "noma");

const obj2 = findKey({
  "Apple": { type: "fruit" },
  "Carrot": { type: "vegetable" },
  "Banana": { type: "fruit" }
}, x => x.type === "nut"); // => undefined
assertEqual(obj2, undefined);

const obj3 = findKey({
  "Red": { count: 10 },
  "Green": { count: 20 },
  "Blue": { count: 30 }
}, x => x.count === 30); // "Blue"
assertEqual(obj3, "Blue");

const obj4 = findKey({}, x => x.stars === 8); // => undefined
assertEqual(obj4, undefined);

const obj5 = findKey({
  "Monday": { meetings: 2 },
  "Tuesday": { meetings: 3 },
  "Wednesday": { meetings: 1 },
  "Thursday": { meetings: 5 },
  "Friday": { meetings: 1 },
}, x => x.meetings < 2);
assertEqual(obj5, "Wednesday");