const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns ['World'] for ['Hello', 'World']", () => {
    assert.deepEqual(tail(["Hello", "World"]), ["World"]);
  });
  it("returns ['Morning', 'World'] for ['Good', 'Morning', 'World']", () => {
    assert.deepEqual(tail(["Good", "Morning", "World"]), ["Morning", "World"]);
  });
  it("returns ['Morning', 'And', 'Hello'] for ['Good', 'Morning', 'And', 'Hello']", () => {
    assert.deepEqual(tail(["Good", "Morning", "And", "Hello"]), ["Morning", "And", "Hello"]);
  });

});