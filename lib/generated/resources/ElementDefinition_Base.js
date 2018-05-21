const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ElementDefinition_Base extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ElementDefinition_Base || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get min() {
    return this[_values].min;
  }

  set min(value) {
    return this[_values].min = value;
  }

  get _min() {
    if (!isPresent(this[_values]._min)) {
      const klass = require('./Element');
      this[_values]._min = new klass();
    }
    return this[_values]._min;
  }

  set _min(value) {
    const klass = require('./Element');
    return this[_values]._min = new klass(value);
  }

  get max() {
    return this[_values].max;
  }

  set max(value) {
    return this[_values].max = value;
  }

  get _max() {
    if (!isPresent(this[_values]._max)) {
      const klass = require('./Element');
      this[_values]._max = new klass();
    }
    return this[_values]._max;
  }

  set _max(value) {
    const klass = require('./Element');
    return this[_values]._max = new klass(value);
  }
}

module.exports = ElementDefinition_Base;

