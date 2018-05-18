const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class CapabilityStatement_Software extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatement_Software || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get name() {
    return this[_values].name;
  }
  set name(value) {
    return this[_values].name = value;
  }
  get _name() {
    if (!this[_values]._name) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }
  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }
  get version() {
    return this[_values].version;
  }
  set version(value) {
    return this[_values].version = value;
  }
  get _version() {
    if (!this[_values]._version) {
      const klass = require('./Element');
      this[_values]._version = new klass();
    }
    return this[_values]._version;
  }
  set _version(value) {
    const klass = require('./Element');
    return this[_values]._version = new klass(value);
  }
  get releaseDate() {
    return this[_values].releaseDate;
  }
  set releaseDate(value) {
    return this[_values].releaseDate = value;
  }
  get _releaseDate() {
    if (!this[_values]._releaseDate) {
      const klass = require('./Element');
      this[_values]._releaseDate = new klass();
    }
    return this[_values]._releaseDate;
  }
  set _releaseDate(value) {
    const klass = require('./Element');
    return this[_values]._releaseDate = new klass(value);
  }
}
module.exports = CapabilityStatement_Software;