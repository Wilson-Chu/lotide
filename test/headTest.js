const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'Bootcamp' for ['Bootcamp', 'Is', 'Cool']", () => {
    assert.strictEqual(head(['Bootcamp', 'Is', 'Cool']), 'Bootcamp');
  });
  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});