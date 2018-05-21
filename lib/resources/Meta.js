const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Meta extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Meta ||
      values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get versionId() {
    return this[_values].versionId;
  }

  set versionId(value) {
    return this[_values].versionId = value;
  }

  get _versionId() {
    if (!isPresent(this[_values]._versionId)) {
      const klass = require('./Element');
      this[_values]._versionId = new klass();
    }
    return this[_values]._versionId;
  }

  set _versionId(value) {
    const klass = require('./Element');
    return this[_values]._versionId = new klass(value);
  }

  get lastUpdated() {
    return this[_values].lastUpdated;
  }

  set lastUpdated(value) {
    return this[_values].lastUpdated = value;
  }

  get _lastUpdated() {
    if (!isPresent(this[_values]._lastUpdated)) {
      const klass = require('./Element');
      this[_values]._lastUpdated = new klass();
    }
    return this[_values]._lastUpdated;
  }

  set _lastUpdated(value) {
    const klass = require('./Element');
    return this[_values]._lastUpdated = new klass(value);
  }

  get profile() {
    return this[_values].profile;
  }

  set profile(value) {
    return this[_values].profile = value;
  }

  get _profile() {
    if (!isPresent(this[_values]._profile)) {
      const klass = require('./Element');
      this[_values]._profile = ArrayProxy(klass);
    }
    return this[_values]._profile;
  }

  set _profile(value) {
    const klass = require('./Element');
    this[_values]._profile = ArrayProxy(klass);
    value.forEach(entry => this[_values]._profile.push(entry));
    return this[_values]._profile;
  }

  get security() {
    if (!isPresent(this[_values].security)) {
      const klass = require('./Coding');
      this[_values].security = ArrayProxy(klass);
    }
    return this[_values].security;
  }

  set security(value) {
    const klass = require('./Coding');
    this[_values].security = ArrayProxy(klass);
    value.forEach(entry => this[_values].security.push(entry));
    return this[_values].security;
  }

  get tag() {
    if (!isPresent(this[_values].tag)) {
      const klass = require('./Coding');
      this[_values].tag = ArrayProxy(klass);
    }
    return this[_values].tag;
  }

  set tag(value) {
    const klass = require('./Coding');
    this[_values].tag = ArrayProxy(klass);
    value.forEach(entry => this[_values].tag.push(entry));
    return this[_values].tag;
  }
}

module.exports = Meta;

