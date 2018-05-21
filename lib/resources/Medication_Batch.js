
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Medication_Batch extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Medication_Batch || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get lotNumber() {
    return this[_values].lotNumber;
  }

  set lotNumber(value) {
    return this[_values].lotNumber = value;
  }

  get _lotNumber() {
    if (!isPresent(this[_values]._lotNumber)) {
      const klass = require('./Element');
      this[_values]._lotNumber = new klass();
    }
    return this[_values]._lotNumber;
  }

  set _lotNumber(value) {
    const klass = require('./Element');
    return this[_values]._lotNumber = new klass(value);
  }

  get expirationDate() {
    return this[_values].expirationDate;
  }

  set expirationDate(value) {
    return this[_values].expirationDate = value;
  }

  get _expirationDate() {
    if (!isPresent(this[_values]._expirationDate)) {
      const klass = require('./Element');
      this[_values]._expirationDate = new klass();
    }
    return this[_values]._expirationDate;
  }

  set _expirationDate(value) {
    const klass = require('./Element');
    return this[_values]._expirationDate = new klass(value);
  }
}

module.exports = Medication_Batch;

