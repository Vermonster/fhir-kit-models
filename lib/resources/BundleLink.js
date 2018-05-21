
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class BundleLink extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof BundleLink || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get relation() {
    return this[_values].relation;
  }

  set relation(value) {
    return this[_values].relation = value;
  }

  get _relation() {
    if (!isPresent(this[_values]._relation)) {
      const klass = require('./Element');
      this[_values]._relation = new klass();
    }
    return this[_values]._relation;
  }

  set _relation(value) {
    const klass = require('./Element');
    return this[_values]._relation = new klass(value);
  }

  get url() {
    return this[_values].url;
  }

  set url(value) {
    return this[_values].url = value;
  }

  get _url() {
    if (!isPresent(this[_values]._url)) {
      const klass = require('./Element');
      this[_values]._url = new klass();
    }
    return this[_values]._url;
  }

  set _url(value) {
    const klass = require('./Element');
    return this[_values]._url = new klass(value);
  }
}

module.exports = BundleLink;

