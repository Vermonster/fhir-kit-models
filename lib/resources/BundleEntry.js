const ArrayProxy = require('../ArrayProxy');
const { isPresent, loadResource, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class BundleEntry extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof BundleEntry ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get link() {
    if (!isPresent(this[_values].link)) {
      const klass = require('./BundleLink');
      this[_values].link = ArrayProxy(klass);
    }
    return this[_values].link;
  }

  set link(value) {
    const klass = require('./BundleLink');
    this[_values].link = ArrayProxy(klass);
    value.forEach(entry => this[_values].link.push(entry));
    return this[_values].link;
  }

  get fullUrl() {
    return this[_values].fullUrl;
  }

  set fullUrl(value) {
    return this[_values].fullUrl = value;
  }

  get _fullUrl() {
    if (!isPresent(this[_values]._fullUrl)) {
      const klass = require('./Element');
      this[_values]._fullUrl = new klass();
    }
    return this[_values]._fullUrl;
  }

  set _fullUrl(value) {
    const klass = require('./Element');
    return this[_values]._fullUrl = new klass(value);
  }

  get resource() {
    return this[_values].resource;
  }

  set resource(value) {
    const klass = loadResource(value.resourceType);
    return this[_values].resource = new klass(value);
  }

  get search() {
    if (!isPresent(this[_values].search)) {
      const klass = require('./BundleSearch');
      this[_values].search = new klass();
    }
    return this[_values].search;
  }

  set search(value) {
    const klass = require('./BundleSearch');
    return this[_values].search = new klass(value);
  }

  get request() {
    if (!isPresent(this[_values].request)) {
      const klass = require('./BundleRequest');
      this[_values].request = new klass();
    }
    return this[_values].request;
  }

  set request(value) {
    const klass = require('./BundleRequest');
    return this[_values].request = new klass(value);
  }

  get response() {
    if (!isPresent(this[_values].response)) {
      const klass = require('./BundleResponse');
      this[_values].response = new klass();
    }
    return this[_values].response;
  }

  set response(value) {
    const klass = require('./BundleResponse');
    return this[_values].response = new klass(value);
  }
}

module.exports = BundleEntry;

