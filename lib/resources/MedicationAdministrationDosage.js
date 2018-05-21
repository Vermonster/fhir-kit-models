
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MedicationAdministrationDosage extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationAdministrationDosage ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get text() {
    return this[_values].text;
  }

  set text(value) {
    return this[_values].text = value;
  }

  get _text() {
    if (!isPresent(this[_values]._text)) {
      const klass = require('./Element');
      this[_values]._text = new klass();
    }
    return this[_values]._text;
  }

  set _text(value) {
    const klass = require('./Element');
    return this[_values]._text = new klass(value);
  }

  get site() {
    if (!isPresent(this[_values].site)) {
      const klass = require('./CodeableConcept');
      this[_values].site = new klass();
    }
    return this[_values].site;
  }

  set site(value) {
    const klass = require('./CodeableConcept');
    return this[_values].site = new klass(value);
  }

  get route() {
    if (!isPresent(this[_values].route)) {
      const klass = require('./CodeableConcept');
      this[_values].route = new klass();
    }
    return this[_values].route;
  }

  set route(value) {
    const klass = require('./CodeableConcept');
    return this[_values].route = new klass(value);
  }

  get method() {
    if (!isPresent(this[_values].method)) {
      const klass = require('./CodeableConcept');
      this[_values].method = new klass();
    }
    return this[_values].method;
  }

  set method(value) {
    const klass = require('./CodeableConcept');
    return this[_values].method = new klass(value);
  }

  get dose() {
    if (!isPresent(this[_values].dose)) {
      const klass = require('./Quantity');
      this[_values].dose = new klass();
    }
    return this[_values].dose;
  }

  set dose(value) {
    const klass = require('./Quantity');
    return this[_values].dose = new klass(value);
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
}

module.exports = MedicationAdministrationDosage;

