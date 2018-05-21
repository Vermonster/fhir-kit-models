
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MeasureReportPopulation1 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MeasureReportPopulation1 || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get count() {
    return this[_values].count;
  }

  set count(value) {
    return this[_values].count = value;
  }

  get _count() {
    if (!isPresent(this[_values]._count)) {
      const klass = require('./Element');
      this[_values]._count = new klass();
    }
    return this[_values]._count;
  }

  set _count(value) {
    const klass = require('./Element');
    return this[_values]._count = new klass(value);
  }

  get patients() {
    if (!isPresent(this[_values].patients)) {
      const klass = require('./Reference');
      this[_values].patients = new klass();
    }
    return this[_values].patients;
  }

  set patients(value) {
    const klass = require('./Reference');
    return this[_values].patients = new klass(value);
  }
}

module.exports = MeasureReportPopulation1;

