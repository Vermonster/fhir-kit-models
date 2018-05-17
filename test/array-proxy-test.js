/* eslint-disable func-names, no-unused-expressions */
const { expect } = require('chai');
const fs = require('fs');
const path = require('path');

const { generateClass, loadTemplates } = require('../generate');
const ArrayProxy = require('../ArrayProxy');

describe('ArrayProxy', function () {
  let BaseResource;

  before(function () {
    loadTemplates();
    const schema = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/fixtures/base-resource.json`)));
    generateClass(schema, `${__dirname}/../tmp`);
    BaseResource = require(`${__dirname}/../tmp/BaseResource`);
  });

  beforeEach(function () {
    this.proxy = ArrayProxy(BaseResource);
  });

  it('is an array', function () {
    expect(this.proxy instanceof Array).to.equal(true);
    expect(Array.isArray(this.proxy)).to.equal(true);
  });

  it('updates #length', function () {
    const resource = new BaseResource({ primitive: 1 });
    const times = 3;

    for (let i = 0; i < times; i++) {
      expect(this.proxy.length).to.equal(i);
      this.proxy.push(resource);
    }

    for (let i = times; i > 0; i--) {
      expect(this.proxy.length).to.equal(i);
      this.proxy.pop();
    }

    expect(this.proxy.length).to.equal(0);
  });

  describe('setter', function () {
    it('converts POJOs to resources', function () {
      const attributes = { primitive: 1};

      this.proxy.push(attributes);

      expect(this.proxy[0] instanceof BaseResource).to.equal(true);
      expect(this.proxy[0].toObject()).to.deep.equal(attributes);
    });

    it('accepts resources', function () {
      const attributes = { primitive: 1};
      const resource = new BaseResource(attributes);

      this.proxy.push(resource);

      expect(this.proxy[0] instanceof BaseResource).to.equal(true);
      expect(this.proxy[0].toObject()).to.deep.equal(attributes);
    });
  });

  describe('#toObject', function () {
    it('returns a POJO representation of the proxy', function () {
      const attributes = [
        { primitive: 1 },
        { primitive: 2 },
      ];

      attributes.forEach(attrs => this.proxy.push(attrs));
      const pojo = this.proxy.toObject();

      expect(pojo.length).to.equal(attributes.length);
      expect(pojo).to.deep.equal(attributes);
    });
  });
});
