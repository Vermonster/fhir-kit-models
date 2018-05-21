const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class CarePlan_Activity extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CarePlan_Activity || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get outcomeCodeableConcept() {
    if (!isPresent(this[_values].outcomeCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].outcomeCodeableConcept = ArrayProxy(klass);
    }
    return this[_values].outcomeCodeableConcept;
  }

  set outcomeCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    this[_values].outcomeCodeableConcept = ArrayProxy(klass);
    value.forEach(entry => this[_values].outcomeCodeableConcept.push(entry));
    return this[_values].outcomeCodeableConcept;
  }

  get outcomeReference() {
    if (!isPresent(this[_values].outcomeReference)) {
      const klass = require('./Reference');
      this[_values].outcomeReference = ArrayProxy(klass);
    }
    return this[_values].outcomeReference;
  }

  set outcomeReference(value) {
    const klass = require('./Reference');
    this[_values].outcomeReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].outcomeReference.push(entry));
    return this[_values].outcomeReference;
  }

  get progress() {
    if (!isPresent(this[_values].progress)) {
      const klass = require('./Annotation');
      this[_values].progress = ArrayProxy(klass);
    }
    return this[_values].progress;
  }

  set progress(value) {
    const klass = require('./Annotation');
    this[_values].progress = ArrayProxy(klass);
    value.forEach(entry => this[_values].progress.push(entry));
    return this[_values].progress;
  }

  get reference() {
    if (!isPresent(this[_values].reference)) {
      const klass = require('./Reference');
      this[_values].reference = new klass();
    }
    return this[_values].reference;
  }

  set reference(value) {
    const klass = require('./Reference');
    return this[_values].reference = new klass(value);
  }

  get detail() {
    if (!isPresent(this[_values].detail)) {
      const klass = require('./CarePlan_Detail');
      this[_values].detail = new klass();
    }
    return this[_values].detail;
  }

  set detail(value) {
    const klass = require('./CarePlan_Detail');
    return this[_values].detail = new klass(value);
  }
}

module.exports = CarePlan_Activity;

