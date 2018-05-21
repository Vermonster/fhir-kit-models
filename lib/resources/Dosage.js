const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Dosage extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Dosage || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get sequence() {
    return this[_values].sequence;
  }

  set sequence(value) {
    return this[_values].sequence = value;
  }

  get _sequence() {
    if (!isPresent(this[_values]._sequence)) {
      const klass = require('./Element');
      this[_values]._sequence = new klass();
    }
    return this[_values]._sequence;
  }

  set _sequence(value) {
    const klass = require('./Element');
    return this[_values]._sequence = new klass(value);
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

  get additionalInstruction() {
    if (!isPresent(this[_values].additionalInstruction)) {
      const klass = require('./CodeableConcept');
      this[_values].additionalInstruction = ArrayProxy(klass);
    }
    return this[_values].additionalInstruction;
  }

  set additionalInstruction(value) {
    const klass = require('./CodeableConcept');
    this[_values].additionalInstruction = ArrayProxy(klass);
    value.forEach(entry => this[_values].additionalInstruction.push(entry));
    return this[_values].additionalInstruction;
  }

  get patientInstruction() {
    return this[_values].patientInstruction;
  }

  set patientInstruction(value) {
    return this[_values].patientInstruction = value;
  }

  get _patientInstruction() {
    if (!isPresent(this[_values]._patientInstruction)) {
      const klass = require('./Element');
      this[_values]._patientInstruction = new klass();
    }
    return this[_values]._patientInstruction;
  }

  set _patientInstruction(value) {
    const klass = require('./Element');
    return this[_values]._patientInstruction = new klass(value);
  }

  get timing() {
    if (!isPresent(this[_values].timing)) {
      const klass = require('./Timing');
      this[_values].timing = new klass();
    }
    return this[_values].timing;
  }

  set timing(value) {
    const klass = require('./Timing');
    return this[_values].timing = new klass(value);
  }

  get asNeededBoolean() {
    return this[_values].asNeededBoolean;
  }

  set asNeededBoolean(value) {
    return this[_values].asNeededBoolean = value;
  }

  get _asNeededBoolean() {
    if (!isPresent(this[_values]._asNeededBoolean)) {
      const klass = require('./Element');
      this[_values]._asNeededBoolean = new klass();
    }
    return this[_values]._asNeededBoolean;
  }

  set _asNeededBoolean(value) {
    const klass = require('./Element');
    return this[_values]._asNeededBoolean = new klass(value);
  }

  get asNeededCodeableConcept() {
    if (!isPresent(this[_values].asNeededCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].asNeededCodeableConcept = new klass();
    }
    return this[_values].asNeededCodeableConcept;
  }

  set asNeededCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].asNeededCodeableConcept = new klass(value);
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

  get doseRange() {
    if (!isPresent(this[_values].doseRange)) {
      const klass = require('./Range');
      this[_values].doseRange = new klass();
    }
    return this[_values].doseRange;
  }

  set doseRange(value) {
    const klass = require('./Range');
    return this[_values].doseRange = new klass(value);
  }

  get doseSimpleQuantity() {
    if (!isPresent(this[_values].doseSimpleQuantity)) {
      const klass = require('./Quantity');
      this[_values].doseSimpleQuantity = new klass();
    }
    return this[_values].doseSimpleQuantity;
  }

  set doseSimpleQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].doseSimpleQuantity = new klass(value);
  }

  get maxDosePerPeriod() {
    if (!isPresent(this[_values].maxDosePerPeriod)) {
      const klass = require('./Ratio');
      this[_values].maxDosePerPeriod = new klass();
    }
    return this[_values].maxDosePerPeriod;
  }

  set maxDosePerPeriod(value) {
    const klass = require('./Ratio');
    return this[_values].maxDosePerPeriod = new klass(value);
  }

  get maxDosePerAdministration() {
    if (!isPresent(this[_values].maxDosePerAdministration)) {
      const klass = require('./Quantity');
      this[_values].maxDosePerAdministration = new klass();
    }
    return this[_values].maxDosePerAdministration;
  }

  set maxDosePerAdministration(value) {
    const klass = require('./Quantity');
    return this[_values].maxDosePerAdministration = new klass(value);
  }

  get maxDosePerLifetime() {
    if (!isPresent(this[_values].maxDosePerLifetime)) {
      const klass = require('./Quantity');
      this[_values].maxDosePerLifetime = new klass();
    }
    return this[_values].maxDosePerLifetime;
  }

  set maxDosePerLifetime(value) {
    const klass = require('./Quantity');
    return this[_values].maxDosePerLifetime = new klass(value);
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

  get rateRange() {
    if (!isPresent(this[_values].rateRange)) {
      const klass = require('./Range');
      this[_values].rateRange = new klass();
    }
    return this[_values].rateRange;
  }

  set rateRange(value) {
    const klass = require('./Range');
    return this[_values].rateRange = new klass(value);
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

module.exports = Dosage;

