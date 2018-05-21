
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ClinicalImpressionFinding extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ClinicalImpressionFinding ||
      values instanceof BackboneElement) {
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

  get basis() {
    return this[_values].basis;
  }

  set basis(value) {
    return this[_values].basis = value;
  }

  get _basis() {
    if (!isPresent(this[_values]._basis)) {
      const klass = require('./Element');
      this[_values]._basis = new klass();
    }
    return this[_values]._basis;
  }

  set _basis(value) {
    const klass = require('./Element');
    return this[_values]._basis = new klass(value);
  }
}

module.exports = ClinicalImpressionFinding;

