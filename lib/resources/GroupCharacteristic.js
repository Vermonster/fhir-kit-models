
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class GroupCharacteristic extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof GroupCharacteristic || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
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

  get valueBoolean() {
    return this[_values].valueBoolean;
  }

  set valueBoolean(value) {
    return this[_values].valueBoolean = value;
  }

  get _valueBoolean() {
    if (!isPresent(this[_values]._valueBoolean)) {
      const klass = require('./Element');
      this[_values]._valueBoolean = new klass();
    }
    return this[_values]._valueBoolean;
  }

  set _valueBoolean(value) {
    const klass = require('./Element');
    return this[_values]._valueBoolean = new klass(value);
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

  get exclude() {
    return this[_values].exclude;
  }

  set exclude(value) {
    return this[_values].exclude = value;
  }

  get _exclude() {
    if (!isPresent(this[_values]._exclude)) {
      const klass = require('./Element');
      this[_values]._exclude = new klass();
    }
    return this[_values]._exclude;
  }

  set _exclude(value) {
    const klass = require('./Element');
    return this[_values]._exclude = new klass(value);
  }

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }
}

module.exports = GroupCharacteristic;

