/* eslint-disable func-names, no-unused-expressions */
const { expect } = require('chai');

const { isPresent } = require('../helpers');

describe('isPresent', function() {
  it('returns true for non-undefined primitives', function () {
    const presentValues = [
      true,
      false,
      null,
      0,
      1,
      'a',
    ];

    presentValues.forEach(value => expect(isPresent(value)).to.equal(true));
  });

  it('returns true for non-empty strings, arrays, and objects', function () {
    const presentValues = [
      'a',
      [1],
      { a: 1 },
    ];

    presentValues.forEach(value => expect(isPresent(value)).to.equal(true));
  });

  it('returns false for undefined', function() {
    expect(isPresent(undefined)).to.equal(false);
  });

  it('returns false for empty strings, arrays, and objects', function () {
    const absentValues = [
      '',
      [],
      {},
    ];

    absentValues.forEach(value => expect(isPresent(value)).to.equal(false));
  });

  it('returns the opposite of #empty for objects with an #empty method', function () {
    const objects = [
      { empty() { return true; } },
      { empty() { return false; } },
    ];

    objects.forEach(object => expect(isPresent(object)).to.equal(!object.empty()));
  });
});
