const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ExplanationOfBenefit_Payment extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefit_Payment || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get type() {
    if (!this[_values].type) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }
  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }
  get adjustment() {
    if (!this[_values].adjustment) {
      const klass = require('./Money');
      this[_values].adjustment = new klass();
    }
    return this[_values].adjustment;
  }
  set adjustment(value) {
    const klass = require('./Money');
    return this[_values].adjustment = new klass(value);
  }
  get adjustmentReason() {
    if (!this[_values].adjustmentReason) {
      const klass = require('./CodeableConcept');
      this[_values].adjustmentReason = new klass();
    }
    return this[_values].adjustmentReason;
  }
  set adjustmentReason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].adjustmentReason = new klass(value);
  }
  get date() {
    return this[_values].date;
  }
  set date(value) {
    return this[_values].date = value;
  }
  get _date() {
    if (!this[_values]._date) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }
  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }
  get amount() {
    if (!this[_values].amount) {
      const klass = require('./Money');
      this[_values].amount = new klass();
    }
    return this[_values].amount;
  }
  set amount(value) {
    const klass = require('./Money');
    return this[_values].amount = new klass(value);
  }
  get identifier() {
    if (!this[_values].identifier) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }
  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }
}
module.exports = ExplanationOfBenefit_Payment;