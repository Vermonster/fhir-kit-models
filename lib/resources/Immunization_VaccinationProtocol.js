const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Immunization_VaccinationProtocol extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Immunization_VaccinationProtocol || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get doseSequence() {
    return this[_values].doseSequence;
  }

  set doseSequence(value) {
    return this[_values].doseSequence = value;
  }

  get _doseSequence() {
    if (!isPresent(this[_values]._doseSequence)) {
      const klass = require('./Element');
      this[_values]._doseSequence = new klass();
    }
    return this[_values]._doseSequence;
  }

  set _doseSequence(value) {
    const klass = require('./Element');
    return this[_values]._doseSequence = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get authority() {
    if (!isPresent(this[_values].authority)) {
      const klass = require('./Reference');
      this[_values].authority = new klass();
    }
    return this[_values].authority;
  }

  set authority(value) {
    const klass = require('./Reference');
    return this[_values].authority = new klass(value);
  }

  get series() {
    return this[_values].series;
  }

  set series(value) {
    return this[_values].series = value;
  }

  get _series() {
    if (!isPresent(this[_values]._series)) {
      const klass = require('./Element');
      this[_values]._series = new klass();
    }
    return this[_values]._series;
  }

  set _series(value) {
    const klass = require('./Element');
    return this[_values]._series = new klass(value);
  }

  get seriesDoses() {
    return this[_values].seriesDoses;
  }

  set seriesDoses(value) {
    return this[_values].seriesDoses = value;
  }

  get _seriesDoses() {
    if (!isPresent(this[_values]._seriesDoses)) {
      const klass = require('./Element');
      this[_values]._seriesDoses = new klass();
    }
    return this[_values]._seriesDoses;
  }

  set _seriesDoses(value) {
    const klass = require('./Element');
    return this[_values]._seriesDoses = new klass(value);
  }

  get targetDisease() {
    if (!isPresent(this[_values].targetDisease)) {
      const klass = require('./CodeableConcept');
      this[_values].targetDisease = ArrayProxy(klass);
    }
    return this[_values].targetDisease;
  }

  set targetDisease(value) {
    const klass = require('./CodeableConcept');
    this[_values].targetDisease = ArrayProxy(klass);
    value.forEach(entry => this[_values].targetDisease.push(entry));
    return this[_values].targetDisease;
  }

  get doseStatus() {
    if (!isPresent(this[_values].doseStatus)) {
      const klass = require('./CodeableConcept');
      this[_values].doseStatus = new klass();
    }
    return this[_values].doseStatus;
  }

  set doseStatus(value) {
    const klass = require('./CodeableConcept');
    return this[_values].doseStatus = new klass(value);
  }

  get doseStatusReason() {
    if (!isPresent(this[_values].doseStatusReason)) {
      const klass = require('./CodeableConcept');
      this[_values].doseStatusReason = new klass();
    }
    return this[_values].doseStatusReason;
  }

  set doseStatusReason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].doseStatusReason = new klass(value);
  }
}

module.exports = Immunization_VaccinationProtocol;

