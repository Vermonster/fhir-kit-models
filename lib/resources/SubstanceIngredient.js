
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class SubstanceIngredient extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof SubstanceIngredient || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Ratio');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Ratio');
    return this[_values].quantity = new klass(value);
  }

  get substanceCodeableConcept() {
    if (!isPresent(this[_values].substanceCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].substanceCodeableConcept = new klass();
    }
    return this[_values].substanceCodeableConcept;
  }

  set substanceCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].substanceCodeableConcept = new klass(value);
  }

  get substanceReference() {
    if (!isPresent(this[_values].substanceReference)) {
      const klass = require('./Reference');
      this[_values].substanceReference = new klass();
    }
    return this[_values].substanceReference;
  }

  set substanceReference(value) {
    const klass = require('./Reference');
    return this[_values].substanceReference = new klass(value);
  }
}

module.exports = SubstanceIngredient;

