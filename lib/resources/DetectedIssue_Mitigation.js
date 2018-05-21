const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class DetectedIssue_Mitigation extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DetectedIssue_Mitigation || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./CodeableConcept');
      this[_values].action = new klass();
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./CodeableConcept');
    return this[_values].action = new klass(value);
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
}

module.exports = DetectedIssue_Mitigation;

