
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class NutritionOrder_Nutrient extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof NutritionOrder_Nutrient || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get modifier() {
    if (!isPresent(this[_values].modifier)) {
      const klass = require('./CodeableConcept');
      this[_values].modifier = new klass();
    }
    return this[_values].modifier;
  }

  set modifier(value) {
    const klass = require('./CodeableConcept');
    return this[_values].modifier = new klass(value);
  }

  get amount() {
    if (!isPresent(this[_values].amount)) {
      const klass = require('./Quantity');
      this[_values].amount = new klass();
    }
    return this[_values].amount;
  }

  set amount(value) {
    const klass = require('./Quantity');
    return this[_values].amount = new klass(value);
  }
}

module.exports = NutritionOrder_Nutrient;

