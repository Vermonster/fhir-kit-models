const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ExpansionProfile_ExcludedSystem extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExpansionProfile_ExcludedSystem || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get system() {
    return this[_values].system;
  }
  set system(value) {
    return this[_values].system = value;
  }
  get _system() {
    if (!this[_values]._system) {
      const klass = require('./Element');
      this[_values]._system = new klass();
    }
    return this[_values]._system;
  }
  set _system(value) {
    const klass = require('./Element');
    return this[_values]._system = new klass(value);
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
}
module.exports = ExpansionProfile_ExcludedSystem;