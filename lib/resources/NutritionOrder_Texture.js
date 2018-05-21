const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class NutritionOrder_Texture extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof NutritionOrder_Texture || values instanceof BackboneElement) {
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

  get foodType() {
    if (!isPresent(this[_values].foodType)) {
      const klass = require('./CodeableConcept');
      this[_values].foodType = new klass();
    }
    return this[_values].foodType;
  }

  set foodType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].foodType = new klass(value);
  }
}

module.exports = NutritionOrder_Texture;

