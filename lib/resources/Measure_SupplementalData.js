const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Measure_SupplementalData extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Measure_SupplementalData || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }

  get usage() {
    if (!isPresent(this[_values].usage)) {
      const klass = require('./CodeableConcept');
      this[_values].usage = ArrayProxy(klass);
    }
    return this[_values].usage;
  }

  set usage(value) {
    const klass = require('./CodeableConcept');
    this[_values].usage = ArrayProxy(klass);
    value.forEach(entry => this[_values].usage.push(entry));
    return this[_values].usage;
  }

  get criteria() {
    return this[_values].criteria;
  }

  set criteria(value) {
    return this[_values].criteria = value;
  }

  get _criteria() {
    if (!isPresent(this[_values]._criteria)) {
      const klass = require('./Element');
      this[_values]._criteria = new klass();
    }
    return this[_values]._criteria;
  }

  set _criteria(value) {
    const klass = require('./Element');
    return this[_values]._criteria = new klass(value);
  }

  get path() {
    return this[_values].path;
  }

  set path(value) {
    return this[_values].path = value;
  }

  get _path() {
    if (!isPresent(this[_values]._path)) {
      const klass = require('./Element');
      this[_values]._path = new klass();
    }
    return this[_values]._path;
  }

  set _path(value) {
    const klass = require('./Element');
    return this[_values]._path = new klass(value);
  }
}

module.exports = Measure_SupplementalData;

