const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class NutritionOrder_Administration extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof NutritionOrder_Administration || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get schedule() {
    if (!isPresent(this[_values].schedule)) {
      const klass = require('./Timing');
      this[_values].schedule = new klass();
    }
    return this[_values].schedule;
  }

  set schedule(value) {
    const klass = require('./Timing');
    return this[_values].schedule = new klass(value);
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }

  get rateSimpleQuantity() {
    if (!isPresent(this[_values].rateSimpleQuantity)) {
      const klass = require('./Quantity');
      this[_values].rateSimpleQuantity = new klass();
    }
    return this[_values].rateSimpleQuantity;
  }

  set rateSimpleQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].rateSimpleQuantity = new klass(value);
  }

  get rateRatio() {
    if (!isPresent(this[_values].rateRatio)) {
      const klass = require('./Ratio');
      this[_values].rateRatio = new klass();
    }
    return this[_values].rateRatio;
  }

  set rateRatio(value) {
    const klass = require('./Ratio');
    return this[_values].rateRatio = new klass(value);
  }
}

module.exports = NutritionOrder_Administration;

