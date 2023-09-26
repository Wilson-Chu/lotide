const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [] for ['Hello', 'World']", () => {
    assert.deepEqual(middle(["Hello", "World"]), []);
  });
  it("returns ['Morning'] for ['Good', 'Morning', 'World']", () => {
    assert.deepEqual(middle(["Good", "Morning", "World"]), ["Morning"]);
  });
  it("returns ['Morning', 'And'] for ['Good', 'Morning', 'And', 'Hello']", () => {
    assert.deepEqual(middle(["Good", "Morning", "And", "Hello"]), ["Morning", "And"]);
  });

});