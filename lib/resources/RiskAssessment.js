const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class RiskAssessment extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof RiskAssessment || values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }

  get basedOn() {
    if (!isPresent(this[_values].basedOn)) {
      const klass = require('./Reference');
      this[_values].basedOn = new klass();
    }
    return this[_values].basedOn;
  }

  set basedOn(value) {
    const klass = require('./Reference');
    return this[_values].basedOn = new klass(value);
  }

  get parent() {
    if (!isPresent(this[_values].parent)) {
      const klass = require('./Reference');
      this[_values].parent = new klass();
    }
    return this[_values].parent;
  }

  set parent(value) {
    const klass = require('./Reference');
    return this[_values].parent = new klass(value);
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
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

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = new klass();
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    return this[_values].subject = new klass(value);
  }

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
  }

  get occurrenceDateTime() {
    return this[_values].occurrenceDateTime;
  }

  set occurrenceDateTime(value) {
    return this[_values].occurrenceDateTime = value;
  }

  get _occurrenceDateTime() {
    if (!isPresent(this[_values]._occurrenceDateTime)) {
      const klass = require('./Element');
      this[_values]._occurrenceDateTime = new klass();
    }
    return this[_values]._occurrenceDateTime;
  }

  set _occurrenceDateTime(value) {
    const klass = require('./Element');
    return this[_values]._occurrenceDateTime = new klass(value);
  }

  get occurrencePeriod() {
    if (!isPresent(this[_values].occurrencePeriod)) {
      const klass = require('./Period');
      this[_values].occurrencePeriod = new klass();
    }
    return this[_values].occurrencePeriod;
  }

  set occurrencePeriod(value) {
    const klass = require('./Period');
    return this[_values].occurrencePeriod = new klass(value);
  }

  get condition() {
    if (!isPresent(this[_values].condition)) {
      const klass = require('./Reference');
      this[_values].condition = new klass();
    }
    return this[_values].condition;
  }

  set condition(value) {
    const klass = require('./Reference');
    return this[_values].condition = new klass(value);
  }

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./Reference');
      this[_values].performer = new klass();
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./Reference');
    return this[_values].performer = new klass(value);
  }

  get reasonCodeableConcept() {
    if (!isPresent(this[_values].reasonCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCodeableConcept = new klass();
    }
    return this[_values].reasonCodeableConcept;
  }

  set reasonCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reasonCodeableConcept = new klass(value);
  }

  get reasonReference() {
    if (!isPresent(this[_values].reasonReference)) {
      const klass = require('./Reference');
      this[_values].reasonReference = new klass();
    }
    return this[_values].reasonReference;
  }

  set reasonReference(value) {
    const klass = require('./Reference');
    return this[_values].reasonReference = new klass(value);
  }

  get basis() {
    if (!isPresent(this[_values].basis)) {
      const klass = require('./Reference');
      this[_values].basis = ArrayProxy(klass);
    }
    return this[_values].basis;
  }

  set basis(value) {
    const klass = require('./Reference');
    this[_values].basis = ArrayProxy(klass);
    value.forEach(entry => this[_values].basis.push(entry));
    return this[_values].basis;
  }

  get prediction() {
    if (!isPresent(this[_values].prediction)) {
      const klass = require('./RiskAssessment_Prediction');
      this[_values].prediction = ArrayProxy(klass);
    }
    return this[_values].prediction;
  }

  set prediction(value) {
    const klass = require('./RiskAssessment_Prediction');
    this[_values].prediction = ArrayProxy(klass);
    value.forEach(entry => this[_values].prediction.push(entry));
    return this[_values].prediction;
  }

  get mitigation() {
    return this[_values].mitigation;
  }

  set mitigation(value) {
    return this[_values].mitigation = value;
  }

  get _mitigation() {
    if (!isPresent(this[_values]._mitigation)) {
      const klass = require('./Element');
      this[_values]._mitigation = new klass();
    }
    return this[_values]._mitigation;
  }

  set _mitigation(value) {
    const klass = require('./Element');
    return this[_values]._mitigation = new klass(value);
  }

  get comment() {
    return this[_values].comment;
  }

  set comment(value) {
    return this[_values].comment = value;
  }

  get _comment() {
    if (!isPresent(this[_values]._comment)) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }

  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }
}

module.exports = RiskAssessment;

