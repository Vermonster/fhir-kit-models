const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class Claim_Accident extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Claim_Accident || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }

  get locationAddress() {
    if (!isPresent(this[_values].locationAddress)) {
      const klass = require('./Address');
      this[_values].locationAddress = new klass();
    }
    return this[_values].locationAddress;
  }

  set locationAddress(value) {
    const klass = require('./Address');
    return this[_values].locationAddress = new klass(value);
  }

  get locationReference() {
    if (!isPresent(this[_values].locationReference)) {
      const klass = require('./Reference');
      this[_values].locationReference = new klass();
    }
    return this[_values].locationReference;
  }

  set locationReference(value) {
    const klass = require('./Reference');
    return this[_values].locationReference = new klass(value);
  }
}

module.exports = Claim_Accident;

