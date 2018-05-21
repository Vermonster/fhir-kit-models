const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class Medication_Content extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Medication_Content || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get itemCodeableConcept() {
    if (!isPresent(this[_values].itemCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].itemCodeableConcept = new klass();
    }
    return this[_values].itemCodeableConcept;
  }

  set itemCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].itemCodeableConcept = new klass(value);
  }

  get itemReference() {
    if (!isPresent(this[_values].itemReference)) {
      const klass = require('./Reference');
      this[_values].itemReference = new klass();
    }
    return this[_values].itemReference;
  }

  set itemReference(value) {
    const klass = require('./Reference');
    return this[_values].itemReference = new klass(value);
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

module.exports = Medication_Content;

