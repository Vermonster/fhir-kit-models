/* eslint-disable func-names, no-unused-expressions */
const { isPresent, loadResource } = require('../src/helpers');

describe('isPresent', function () {
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

  it('returns false for undefined', function () {
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

  it('returns false for arrays and objects with no present members', function () {
    const absentValues = [
      [undefined, '', [], {}],
      {
        a: undefined, b: '', c: [], d: {},
      },
    ];

    absentValues.forEach(value => expect(isPresent(value)).to.equal(false));
  });

  it('returns false for objects with only a resourceType key', function () {
    const object = { resourceType: 'Resource' };

    expect(isPresent(object)).to.equal(false);
  });
});

describe('loadResource', function () {
  const testResource = { abc: '123' };

  before(function () {
    mock('../src/TestResource', testResource);
  });

  after(function () {
    mock.stopAll();
  });

  it('loads the specified resourceType', function () {
    expect(loadResource('TestResource')).to.deep.equal(testResource);
  });

  it('throws an error if resourceType is not specified', function () {
    const resourceTypes = ['', undefined];
    const errorMessage = 'resourceType must be specified';

    resourceTypes.forEach(resourceType => {
      expect(() => loadResource(resourceType)).to.throw(errorMessage);
    });
  });

  it('throws an error if resourceType contains non-alhpabetic characters', function () {
    const resourceTypes = ['../ArrayProxy', '123'];

    resourceTypes.forEach(resourceType => {
      const errorMessage = `Invalid resourceType: ${resourceType}`;
      expect(() => loadResource(resourceType)).to.throw(errorMessage);
    });
  });

  it('throws an error if resourceType is not found', function () {
    const resourceType = 'NonexistentResource';

    const errorMessage = `Unknown resourceType: ${resourceType}`;
    expect(() => loadResource(resourceType)).to.throw(errorMessage);
  });
});
