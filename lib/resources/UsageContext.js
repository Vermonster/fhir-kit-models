
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class UsageContext extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof UsageContext || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./Coding');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./Coding');
    return this[_values].code = new klass(value);
  }

  get valueCodeableConcept() {
    if (!isPresent(this[_values].valueCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].valueCodeableConcept = new klass();
    }
    return this[_values].valueCodeableConcept;
  }

  set valueCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].valueCodeableConcept = new klass(value);
  }

  get valueQuantity() {
    if (!isPresent(this[_values].valueQuantity)) {
      const klass = require('./Quantity');
      this[_values].valueQuantity = new klass();
    }
    return this[_values].valueQuantity;
  }

  set valueQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].valueQuantity = new klass(value);
  }

  get valueRange() {
    if (!isPresent(this[_values].valueRange)) {
      const klass = require('./Range');
      this[_values].valueRange = new klass();
    }
    return this[_values].valueRange;
  }

  set valueRange(value) {
    const klass = require('./Range');
    return this[_values].valueRange = new klass(value);
  }
}

module.exports = UsageContext;

