const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ExplanationOfBenefit_Detail1 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefit_Detail1 || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get revenue() {
    if (!isPresent(this[_values].revenue)) {
      const klass = require('./CodeableConcept');
      this[_values].revenue = new klass();
    }
    return this[_values].revenue;
  }

  set revenue(value) {
    const klass = require('./CodeableConcept');
    return this[_values].revenue = new klass(value);
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
  }

  get service() {
    if (!isPresent(this[_values].service)) {
      const klass = require('./CodeableConcept');
      this[_values].service = new klass();
    }
    return this[_values].service;
  }

  set service(value) {
    const klass = require('./CodeableConcept');
    return this[_values].service = new klass(value);
  }

  get modifier() {
    if (!isPresent(this[_values].modifier)) {
      const klass = require('./CodeableConcept');
      this[_values].modifier = ArrayProxy(klass);
    }
    return this[_values].modifier;
  }

  set modifier(value) {
    const klass = require('./CodeableConcept');
    this[_values].modifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].modifier.push(entry));
    return this[_values].modifier;
  }

  get fee() {
    if (!isPresent(this[_values].fee)) {
      const klass = require('./Money');
      this[_values].fee = new klass();
    }
    return this[_values].fee;
  }

  set fee(value) {
    const klass = require('./Money');
    return this[_values].fee = new klass(value);
  }

  get noteNumber() {
    return this[_values].noteNumber;
  }

  set noteNumber(value) {
    return this[_values].noteNumber = value;
  }

  get _noteNumber() {
    if (!isPresent(this[_values]._noteNumber)) {
      const klass = require('./Element');
      this[_values]._noteNumber = ArrayProxy(klass);
    }
    return this[_values]._noteNumber;
  }

  set _noteNumber(value) {
    const klass = require('./Element');
    this[_values]._noteNumber = ArrayProxy(klass);
    value.forEach(entry => this[_values]._noteNumber.push(entry));
    return this[_values]._noteNumber;
  }

  get adjudication() {
    if (!isPresent(this[_values].adjudication)) {
      const klass = require('./ExplanationOfBenefit_Adjudication');
      this[_values].adjudication = ArrayProxy(klass);
    }
    return this[_values].adjudication;
  }

  set adjudication(value) {
    const klass = require('./ExplanationOfBenefit_Adjudication');
    this[_values].adjudication = ArrayProxy(klass);
    value.forEach(entry => this[_values].adjudication.push(entry));
    return this[_values].adjudication;
  }
}

module.exports = ExplanationOfBenefit_Detail1;

