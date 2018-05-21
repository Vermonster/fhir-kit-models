const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class DetectedIssue extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DetectedIssue || values instanceof DomainResource) {
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

  get severity() {
    return this[_values].severity;
  }

  set severity(value) {
    return this[_values].severity = value;
  }

  get _severity() {
    if (!isPresent(this[_values]._severity)) {
      const klass = require('./Element');
      this[_values]._severity = new klass();
    }
    return this[_values]._severity;
  }

  set _severity(value) {
    const klass = require('./Element');
    return this[_values]._severity = new klass(value);
  }

  get patient() {
    if (!isPresent(this[_values].patient)) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }

  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }

  get date() {
    return this[_values].date;
  }

  set date(value) {
    return this[_values].date = value;
  }

  get _date() {
    if (!isPresent(this[_values]._date)) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }

  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }

  get author() {
    if (!isPresent(this[_values].author)) {
      const klass = require('./Reference');
      this[_values].author = new klass();
    }
    return this[_values].author;
  }

  set author(value) {
    const klass = require('./Reference');
    return this[_values].author = new klass(value);
  }

  get implicated() {
    if (!isPresent(this[_values].implicated)) {
      const klass = require('./Reference');
      this[_values].implicated = ArrayProxy(klass);
    }
    return this[_values].implicated;
  }

  set implicated(value) {
    const klass = require('./Reference');
    this[_values].implicated = ArrayProxy(klass);
    value.forEach(entry => this[_values].implicated.push(entry));
    return this[_values].implicated;
  }

  get detail() {
    return this[_values].detail;
  }

  set detail(value) {
    return this[_values].detail = value;
  }

  get _detail() {
    if (!isPresent(this[_values]._detail)) {
      const klass = require('./Element');
      this[_values]._detail = new klass();
    }
    return this[_values]._detail;
  }

  set _detail(value) {
    const klass = require('./Element');
    return this[_values]._detail = new klass(value);
  }

  get reference() {
    return this[_values].reference;
  }

  set reference(value) {
    return this[_values].reference = value;
  }

  get _reference() {
    if (!isPresent(this[_values]._reference)) {
      const klass = require('./Element');
      this[_values]._reference = new klass();
    }
    return this[_values]._reference;
  }

  set _reference(value) {
    const klass = require('./Element');
    return this[_values]._reference = new klass(value);
  }

  get mitigation() {
    if (!isPresent(this[_values].mitigation)) {
      const klass = require('./DetectedIssue_Mitigation');
      this[_values].mitigation = ArrayProxy(klass);
    }
    return this[_values].mitigation;
  }

  set mitigation(value) {
    const klass = require('./DetectedIssue_Mitigation');
    this[_values].mitigation = ArrayProxy(klass);
    value.forEach(entry => this[_values].mitigation.push(entry));
    return this[_values].mitigation;
  }
}

module.exports = DetectedIssue;

