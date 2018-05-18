const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const Element = require('./Element');
class Range extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Range || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get low() {
    if (!this[_values].low) {
      const klass = require('./Quantity');
      this[_values].low = new klass();
    }
    return this[_values].low;
  }
  set low(value) {
    const klass = require('./Quantity');
    return this[_values].low = new klass(value);
  }
  get high() {
    if (!this[_values].high) {
      const klass = require('./Quantity');
      this[_values].high = new klass();
    }
    return this[_values].high;
  }
  set high(value) {
    const klass = require('./Quantity');
    return this[_values].high = new klass(value);
  }
}
module.exports = Range;