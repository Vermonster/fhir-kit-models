
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Ratio extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Ratio ||
      values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get numerator() {
    if (!isPresent(this[_values].numerator)) {
      const klass = require('./Quantity');
      this[_values].numerator = new klass();
    }
    return this[_values].numerator;
  }

  set numerator(value) {
    const klass = require('./Quantity');
    return this[_values].numerator = new klass(value);
  }

  get denominator() {
    if (!isPresent(this[_values].denominator)) {
      const klass = require('./Quantity');
      this[_values].denominator = new klass();
    }
    return this[_values].denominator;
  }

  set denominator(value) {
    const klass = require('./Quantity');
    return this[_values].denominator = new klass(value);
  }
}

module.exports = Ratio;

