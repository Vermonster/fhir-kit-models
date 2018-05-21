
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Measure_Stratifier extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Measure_Stratifier || values instanceof BackboneElement) {
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

module.exports = Measure_Stratifier;

