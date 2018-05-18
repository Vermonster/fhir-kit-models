const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class PaymentReconciliation_Detail extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PaymentReconciliation_Detail || values instanceof BackboneElement) {
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
  get request() {
    if (!this[_values].request) {
      const klass = require('./Reference');
      this[_values].request = new klass();
    }
    return this[_values].request;
  }
  set request(value) {
    const klass = require('./Reference');
    return this[_values].request = new klass(value);
  }
  get response() {
    if (!this[_values].response) {
      const klass = require('./Reference');
      this[_values].response = new klass();
    }
    return this[_values].response;
  }
  set response(value) {
    const klass = require('./Reference');
    return this[_values].response = new klass(value);
  }
  get submitter() {
    if (!this[_values].submitter) {
      const klass = require('./Reference');
      this[_values].submitter = new klass();
    }
    return this[_values].submitter;
  }
  set submitter(value) {
    const klass = require('./Reference');
    return this[_values].submitter = new klass(value);
  }
  get payee() {
    if (!this[_values].payee) {
      const klass = require('./Reference');
      this[_values].payee = new klass();
    }
    return this[_values].payee;
  }
  set payee(value) {
    const klass = require('./Reference');
    return this[_values].payee = new klass(value);
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
}
module.exports = PaymentReconciliation_Detail;