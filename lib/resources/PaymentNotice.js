const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class PaymentNotice extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'PaymentNotice';
    if (values instanceof PaymentNotice ||
      values instanceof DomainResource) {
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
      this[_values].identifier = ArrayProxy(klass);
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    this[_values].identifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].identifier.push(entry));
    return this[_values].identifier;
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

  get request() {
    if (!isPresent(this[_values].request)) {
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
    if (!isPresent(this[_values].response)) {
      const klass = require('./Reference');
      this[_values].response = new klass();
    }
    return this[_values].response;
  }

  set response(value) {
    const klass = require('./Reference');
    return this[_values].response = new klass(value);
  }

  get statusDate() {
    return this[_values].statusDate;
  }

  set statusDate(value) {
    return this[_values].statusDate = value;
  }

  get _statusDate() {
    if (!isPresent(this[_values]._statusDate)) {
      const klass = require('./Element');
      this[_values]._statusDate = new klass();
    }
    return this[_values]._statusDate;
  }

  set _statusDate(value) {
    const klass = require('./Element');
    return this[_values]._statusDate = new klass(value);
  }

  get created() {
    return this[_values].created;
  }

  set created(value) {
    return this[_values].created = value;
  }

  get _created() {
    if (!isPresent(this[_values]._created)) {
      const klass = require('./Element');
      this[_values]._created = new klass();
    }
    return this[_values]._created;
  }

  set _created(value) {
    const klass = require('./Element');
    return this[_values]._created = new klass(value);
  }

  get target() {
    if (!isPresent(this[_values].target)) {
      const klass = require('./Reference');
      this[_values].target = new klass();
    }
    return this[_values].target;
  }

  set target(value) {
    const klass = require('./Reference');
    return this[_values].target = new klass(value);
  }

  get provider() {
    if (!isPresent(this[_values].provider)) {
      const klass = require('./Reference');
      this[_values].provider = new klass();
    }
    return this[_values].provider;
  }

  set provider(value) {
    const klass = require('./Reference');
    return this[_values].provider = new klass(value);
  }

  get organization() {
    if (!isPresent(this[_values].organization)) {
      const klass = require('./Reference');
      this[_values].organization = new klass();
    }
    return this[_values].organization;
  }

  set organization(value) {
    const klass = require('./Reference');
    return this[_values].organization = new klass(value);
  }

  get paymentStatus() {
    if (!isPresent(this[_values].paymentStatus)) {
      const klass = require('./CodeableConcept');
      this[_values].paymentStatus = new klass();
    }
    return this[_values].paymentStatus;
  }

  set paymentStatus(value) {
    const klass = require('./CodeableConcept');
    return this[_values].paymentStatus = new klass(value);
  }
}

module.exports = PaymentNotice;

