const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('checks arguments', () => {
    assert.strictEqual(isNaN(calculateNumber(1)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
  it('check the outputs', () => {
    assert.strictEqual(calculateNumber(3, 2), 5);
    assert.strictEqual(calculateNumber(5, 4.7), 10);
    assert.strictEqual(calculateNumber(3.2, 2.9), 5);
    assert.strictEqual(calculateNumber(3.5, 5.5), 10);
    assert.strictEqual(calculateNumber(3.8, 1), 5);
    assert.strictEqual(calculateNumber(2.6, 5.9), 9);
  });
  it('negative numbers', () => {
    assert.strictEqual(calculateNumber(-2, 2), 0);
    assert.strictEqual(calculateNumber(4, -4), 0);
    assert.strictEqual(calculateNumber(-4, -6), -10);
  });
});
