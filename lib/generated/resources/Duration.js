const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const Quantity = require('./Quantity');

class Duration extends Quantity {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Duration || values instanceof Quantity) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
}

module.exports = Duration;

