/* eslint-disable func-names, no-unused-expressions, global-require */
const { expect } = require('chai');
const mock = require('mock-require');
const fs = require('fs');
const path = require('path');

const { generateClass, loadTemplates } = require('../lib/generate');

describe('Generated Resources', function () {
  let BaseResource;
  let template;

  before(function () {
    mock('../../ArrayProxy', require('../lib/ArrayProxy'));
    mock('../../helpers', require('../lib/helpers'));

    template = loadTemplates();
    const schema = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/fixtures/base-resource.json`)));
    generateClass(schema, '../tmp', template);
    BaseResource = require('../tmp/BaseResource');
  });

  after(function () {
    mock.stopAll();
  });

  describe('Base Resources', function () {
    describe('constructor', function () {
      it('assigns attributes from a POJO', function () {
        const attributes = {
          primitive: 'abc',
          complex: {
            primitive: 'def',
          },
        };

        const resource = new BaseResource(attributes);

        expect(resource.toObject()).to.deep.equal(attributes);
      });

      it('assigns attributes from a resource', function () {
        const attributes = {
          primitive: 'abc',
          complex: {
            primitive: 'def',
          },
        };

        const sourceResource = new BaseResource(attributes);
        const resource = new BaseResource(sourceResource);

        expect(resource.toObject()).to.deep.equal(attributes);
      });
    });

    describe('attributes', function () {
      beforeEach(function () {
        this.baseResource = new BaseResource();
      });

      it('provides read and write access for primitive values', function () {
        const primitiveValue = 'abc';
        this.baseResource.primitive = primitiveValue;

        expect(this.baseResource.primitive).to.equal(primitiveValue);
      });

      it('provides read and write access for complex values', function () {
        const complexValue = { primitive: 'abc' };
        this.baseResource.complex = complexValue;

        expect(this.baseResource.complex instanceof BaseResource).to.equal(true);
        expect(this.baseResource.complex.toObject()).to.deep.equal(complexValue);
      });

      it('provides read and write access for arrays of primitive values', function () {
        const primitiveValues = ['abc', 'def', 'ghi'];
        this.baseResource.primitiveArray = primitiveValues;

        expect(this.baseResource.primitiveArray instanceof Array).to.equal(true);
        expect(this.baseResource.primitiveArray).to.deep.equal(primitiveValues);
      });

      it('provides read and write access for arrays of complex values', function () {
        const complexValues = [{ primitive: 'abc' }, { primitive: 'def' }];
        this.baseResource.complexArray = complexValues;

        expect(this.baseResource.complexArray instanceof Array).to.equal(true);
        this.baseResource.complexArray.forEach(
          entry => expect(entry instanceof BaseResource).to.equal(true),
        );
        expect(this.baseResource.complexArray.toObject()).to.deep.equal(complexValues);
      });

      it('allows chaining on uninitialized elements', function () {
        const value = 'abc';
        this.baseResource.complex.complex.primitive = value;

        expect(this.baseResource.complex.complex.primitive).to.equal(value);
      });
    });

    describe('iteration', function () {
      it('iterates over all present values', function () {
        const complex = new BaseResource({ primitive: 'def' });
        const attributes = {
          primitive: 'abc',
          primitiveArray: [null],
          complex,
        };
        const resource = new BaseResource(attributes);
        const visitedKeys = [];

        for (const [key, value] of resource) {
          expect(value).to.equal(resource[key]);
          visitedKeys.push(key);
        }

        expect(visitedKeys).to.deep.equal(Object.keys(attributes));
      });

      it('does not iterate over empty values', function () {
        const complex = new BaseResource();
        const attributes = {
          primitive: '',
          primitiveArray: [],
          complex,
          complexArray: [complex],
        };
        const resource = new BaseResource(attributes);
        const visitedKeys = [];

        for (const [key] of resource) {
          visitedKeys.push(key);
        }

        expect(visitedKeys.length).to.equal(0);
      });
    });

    describe('#empty', function () {
      it('returns true for empty resources', function () {
        const emptyResources = [
          new BaseResource(),
          new BaseResource({
            primitive: '',
            complex: new BaseResource(),
            primitiveArray: [],
            complexArray: [],
          }),
        ];

        emptyResources.forEach(resource => expect(resource.empty()).to.equal(true));
      });

      it('returns false for non-empty resources', function () {
        const presentResources = [
          new BaseResource({ primitive: 1 }),
          new BaseResource({
            complex: new BaseResource({
              complex: new BaseResource({
                primitive: 2,
              }),
            }),
          }),
        ];

        presentResources.forEach(resource => expect(resource.empty()).to.equal(false));
      });
    });

    describe('#toObject', function () {
      it('returns a POJO of the resource attributes', function () {
        const attributes = {
          primitive: 'abc',
          complex: {
            primitive: 'def',
          },
        };

        const resource = new BaseResource(attributes);

        expect(resource.toObject()).to.deep.equal(attributes);
      });

      it('omits empty attributes', function () {
        const attributes = {
          primitive: 'abc',
          primitiveArray: [1],
          complexArray: [],
        };
        const resource = new BaseResource(attributes);
        const pojo = resource.toObject();

        for (const [key, value] of Object.entries(pojo)) {
          expect(value).to.equal(resource[key]);
        }

        expect(Object.keys(pojo)).to.deep.equal(['primitive', 'primitiveArray']);
      });
    });
  });

  describe('Derived Resources', function () {
    let DerivedResource;

    before(function () {
      const schema = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/fixtures/derived-resource.json`)));
      generateClass(schema, '../tmp', template);
      DerivedResource = require('../tmp/DerivedResource');
    });

    describe('constructor', function () {
      it('assigns attributes from a POJO', function () {
        const attributes = {
          primitive: 'abc',
          complex: {
            primitive: 'def',
          },
          own: 'ghi',
        };

        const resource = new DerivedResource(attributes);

        expect(resource.toObject()).to.deep.equal(attributes);
      });

      it('assigns attributes from a resource', function () {
        const attributes = {
          primitive: 'abc',
          complex: {
            primitive: 'def',
          },
          own: 'ghi',
        };

        const sourceResource = new DerivedResource(attributes);
        const resource = new DerivedResource(sourceResource);

        expect(resource.toObject()).to.deep.equal(attributes);
      });

      it('assigns attributes from its base resource', function () {
        const attributes = {
          primitive: 'abc',
          complex: {
            primitive: 'def',
          },
        };

        const sourceResource = new BaseResource(attributes);
        const resource = new DerivedResource(sourceResource);

        expect(resource.toObject()).to.deep.equal(attributes);
      });
    });

    describe('attributes', function () {
      it('provides read and write access for its own and inherited attributes', function () {
        const derivedResource = new DerivedResource();
        const primitiveValue = 'abc';
        derivedResource.primitive = primitiveValue;
        derivedResource.own = primitiveValue;

        expect(derivedResource.primitive).to.equal(primitiveValue);
        expect(derivedResource.own).to.equal(primitiveValue);
      });
    });

    describe('iteration', function () {
      it('iterates over all present values', function () {
        const complex = new BaseResource({ primitive: 'def' });
        const attributes = {
          primitive: 'abc',
          primitiveArray: [null],
          complex,
          own: 'ghi',
        };
        const resource = new DerivedResource(attributes);
        const visitedKeys = [];

        for (const [key, value] of resource) {
          expect(value).to.equal(resource[key]);
          visitedKeys.push(key);
        }

        expect(visitedKeys).to.deep.equal(Object.keys(attributes));
      });
    });

    describe('#empty', function () {
      it('returns true for empty resources', function () {
        const emptyResources = [
          new DerivedResource(),
          new DerivedResource({
            primitive: '',
            complex: new BaseResource(),
            primitiveArray: [],
            complexArray: [],
            own: undefined,
          }),
        ];

        emptyResources.forEach(resource => expect(resource.empty()).to.equal(true));
      });

      it('returns false for non-empty resources', function () {
        const presentResources = [
          new DerivedResource({ primitive: 1 }),
          new DerivedResource({
            complex: new BaseResource({
              complex: new BaseResource({
                primitive: 2,
              }),
            }),
          }),
          new DerivedResource({ own: 3 }),
        ];

        presentResources.forEach(resource => expect(resource.empty()).to.equal(false));
      });
    });

    describe('#toObject', function () {
      it('returns a POJO of the resource attributes', function () {
        const attributes = {
          primitive: 'abc',
          complex: {
            primitive: 'def',
          },
          own: 'ghi',
        };

        const resource = new DerivedResource(attributes);

        expect(resource.toObject()).to.deep.equal(attributes);
      });

      it('omits empty attributes', function () {
        const attributes = {
          primitive: 'abc',
          primitiveArray: [1],
          complexArray: [],
          own: '',
        };
        const resource = new DerivedResource(attributes);
        const pojo = resource.toObject();

        for (const [key, value] of Object.entries(pojo)) {
          expect(value).to.equal(resource[key]);
        }

        expect(Object.keys(pojo)).to.deep.equal(['primitive', 'primitiveArray']);
      });
    });
  });
});
