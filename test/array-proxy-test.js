/* eslint-disable func-names, no-unused-expressions, global-require, no-plusplus */
const { generateClass, loadResourceTemplates } = require('../src/generate');

const ArrayProxy = require('../src/ArrayProxy');

describe('ArrayProxy', function () {
  let BaseResource;
  let template;

  before(function () {
    template = loadResourceTemplates();
    const schema = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/fixtures/base-resource.json`)));

    generateClass(schema, 'tmp', template);

    BaseResource = require('../tmp/BaseResource');
    mock('../src/BaseResource', BaseResource);
  });

  after(function () {
    mock.stopAll();
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
    context('when initialized with a type', function () {
      it('converts POJOs to resources', function () {
        const attributes = { resourceType: 'BaseResource', primitive: 1 };

        this.proxy.push(attributes);

        expect(this.proxy[0] instanceof BaseResource).to.equal(true);
        expect(this.proxy[0].toObject()).to.deep.equal(attributes);
      });

      it('accepts resources', function () {
        const attributes = { resourceType: 'BaseResource', primitive: 1 };
        const resource = new BaseResource(attributes);

        this.proxy.push(resource);

        expect(this.proxy[0] instanceof BaseResource).to.equal(true);
        expect(this.proxy[0].toObject()).to.deep.equal(attributes);
      });
    });

    context('when initialized without a type', function () {
      it('converts POJOs to resources', function () {
        const attributes = { resourceType: 'BaseResource', primitive: 1 };

        const proxy = ArrayProxy();
        proxy.push(attributes);

        expect(proxy[0] instanceof BaseResource).to.equal(true);
        expect(proxy[0].toObject()).to.deep.equal(attributes);
      });

      it('accepts resources', function () {
        const attributes = { resourceType: 'BaseResource', primitive: 1 };
        const resource = new BaseResource(attributes);

        const proxy = ArrayProxy();
        proxy.push(resource);

        expect(proxy[0] instanceof BaseResource).to.equal(true);
        expect(proxy[0].toObject()).to.deep.equal(attributes);
      });
    });
  });

  describe('#toObject', function () {
    it('returns a POJO representation of the proxy', function () {
      const attributes = [
        { resourceType: 'BaseResource', primitive: 1 },
        { resourceType: 'BaseResource', primitive: 2 },
      ];

      attributes.forEach(attrs => this.proxy.push(attrs));
      const pojo = this.proxy.toObject();

      expect(pojo.length).to.equal(attributes.length);
      expect(pojo).to.deep.equal(attributes);
    });
  });
});
