const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class RiskAssessment_Prediction extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof RiskAssessment_Prediction || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get outcome() {
    if (!isPresent(this[_values].outcome)) {
      const klass = require('./CodeableConcept');
      this[_values].outcome = new klass();
    }
    return this[_values].outcome;
  }

  set outcome(value) {
    const klass = require('./CodeableConcept');
    return this[_values].outcome = new klass(value);
  }

  get probabilityDecimal() {
    return this[_values].probabilityDecimal;
  }

  set probabilityDecimal(value) {
    return this[_values].probabilityDecimal = value;
  }

  get _probabilityDecimal() {
    if (!isPresent(this[_values]._probabilityDecimal)) {
      const klass = require('./Element');
      this[_values]._probabilityDecimal = new klass();
    }
    return this[_values]._probabilityDecimal;
  }

  set _probabilityDecimal(value) {
    const klass = require('./Element');
    return this[_values]._probabilityDecimal = new klass(value);
  }

  get probabilityRange() {
    if (!isPresent(this[_values].probabilityRange)) {
      const klass = require('./Range');
      this[_values].probabilityRange = new klass();
    }
    return this[_values].probabilityRange;
  }

  set probabilityRange(value) {
    const klass = require('./Range');
    return this[_values].probabilityRange = new klass(value);
  }

  get qualitativeRisk() {
    if (!isPresent(this[_values].qualitativeRisk)) {
      const klass = require('./CodeableConcept');
      this[_values].qualitativeRisk = new klass();
    }
    return this[_values].qualitativeRisk;
  }

  set qualitativeRisk(value) {
    const klass = require('./CodeableConcept');
    return this[_values].qualitativeRisk = new klass(value);
  }

  get relativeRisk() {
    return this[_values].relativeRisk;
  }

  set relativeRisk(value) {
    return this[_values].relativeRisk = value;
  }

  get _relativeRisk() {
    if (!isPresent(this[_values]._relativeRisk)) {
      const klass = require('./Element');
      this[_values]._relativeRisk = new klass();
    }
    return this[_values]._relativeRisk;
  }

  set _relativeRisk(value) {
    const klass = require('./Element');
    return this[_values]._relativeRisk = new klass(value);
  }

  get whenPeriod() {
    if (!isPresent(this[_values].whenPeriod)) {
      const klass = require('./Period');
      this[_values].whenPeriod = new klass();
    }
    return this[_values].whenPeriod;
  }

  set whenPeriod(value) {
    const klass = require('./Period');
    return this[_values].whenPeriod = new klass(value);
  }

  get whenRange() {
    if (!isPresent(this[_values].whenRange)) {
      const klass = require('./Range');
      this[_values].whenRange = new klass();
    }
    return this[_values].whenRange;
  }

  set whenRange(value) {
    const klass = require('./Range');
    return this[_values].whenRange = new klass(value);
  }

  get rationale() {
    return this[_values].rationale;
  }

  set rationale(value) {
    return this[_values].rationale = value;
  }

  get _rationale() {
    if (!isPresent(this[_values]._rationale)) {
      const klass = require('./Element');
      this[_values]._rationale = new klass();
    }
    return this[_values]._rationale;
  }

  set _rationale(value) {
    const klass = require('./Element');
    return this[_values]._rationale = new klass(value);
  }
}

module.exports = RiskAssessment_Prediction;

