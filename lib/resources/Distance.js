
const { _values } = require('../helpers');

const Quantity = require('./Quantity');

class Distance extends Quantity {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Distance ||
      values instanceof Quantity) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
}

module.exports = Distance;
