
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class SampledData extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof SampledData || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get origin() {
    if (!isPresent(this[_values].origin)) {
      const klass = require('./Quantity');
      this[_values].origin = new klass();
    }
    return this[_values].origin;
  }

  set origin(value) {
    const klass = require('./Quantity');
    return this[_values].origin = new klass(value);
  }

  get period() {
    return this[_values].period;
  }

  set period(value) {
    return this[_values].period = value;
  }

  get _period() {
    if (!isPresent(this[_values]._period)) {
      const klass = require('./Element');
      this[_values]._period = new klass();
    }
    return this[_values]._period;
  }

  set _period(value) {
    const klass = require('./Element');
    return this[_values]._period = new klass(value);
  }

  get factor() {
    return this[_values].factor;
  }

  set factor(value) {
    return this[_values].factor = value;
  }

  get _factor() {
    if (!isPresent(this[_values]._factor)) {
      const klass = require('./Element');
      this[_values]._factor = new klass();
    }
    return this[_values]._factor;
  }

  set _factor(value) {
    const klass = require('./Element');
    return this[_values]._factor = new klass(value);
  }

  get lowerLimit() {
    return this[_values].lowerLimit;
  }

  set lowerLimit(value) {
    return this[_values].lowerLimit = value;
  }

  get _lowerLimit() {
    if (!isPresent(this[_values]._lowerLimit)) {
      const klass = require('./Element');
      this[_values]._lowerLimit = new klass();
    }
    return this[_values]._lowerLimit;
  }

  set _lowerLimit(value) {
    const klass = require('./Element');
    return this[_values]._lowerLimit = new klass(value);
  }

  get upperLimit() {
    return this[_values].upperLimit;
  }

  set upperLimit(value) {
    return this[_values].upperLimit = value;
  }

  get _upperLimit() {
    if (!isPresent(this[_values]._upperLimit)) {
      const klass = require('./Element');
      this[_values]._upperLimit = new klass();
    }
    return this[_values]._upperLimit;
  }

  set _upperLimit(value) {
    const klass = require('./Element');
    return this[_values]._upperLimit = new klass(value);
  }

  get dimensions() {
    return this[_values].dimensions;
  }

  set dimensions(value) {
    return this[_values].dimensions = value;
  }

  get _dimensions() {
    if (!isPresent(this[_values]._dimensions)) {
      const klass = require('./Element');
      this[_values]._dimensions = new klass();
    }
    return this[_values]._dimensions;
  }

  set _dimensions(value) {
    const klass = require('./Element');
    return this[_values]._dimensions = new klass(value);
  }

  get data() {
    return this[_values].data;
  }

  set data(value) {
    return this[_values].data = value;
  }

  get _data() {
    if (!isPresent(this[_values]._data)) {
      const klass = require('./Element');
      this[_values]._data = new klass();
    }
    return this[_values]._data;
  }

  set _data(value) {
    const klass = require('./Element');
    return this[_values]._data = new klass(value);
  }
}

module.exports = SampledData;

