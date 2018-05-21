const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Subscription extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Subscription || values instanceof DomainResource) {
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

  get contact() {
    if (!isPresent(this[_values].contact)) {
      const klass = require('./ContactPoint');
      this[_values].contact = ArrayProxy(klass);
    }
    return this[_values].contact;
  }

  set contact(value) {
    const klass = require('./ContactPoint');
    this[_values].contact = ArrayProxy(klass);
    value.forEach(entry => this[_values].contact.push(entry));
    return this[_values].contact;
  }

  get end() {
    return this[_values].end;
  }

  set end(value) {
    return this[_values].end = value;
  }

  get _end() {
    if (!isPresent(this[_values]._end)) {
      const klass = require('./Element');
      this[_values]._end = new klass();
    }
    return this[_values]._end;
  }

  set _end(value) {
    const klass = require('./Element');
    return this[_values]._end = new klass(value);
  }

  get reason() {
    return this[_values].reason;
  }

  set reason(value) {
    return this[_values].reason = value;
  }

  get _reason() {
    if (!isPresent(this[_values]._reason)) {
      const klass = require('./Element');
      this[_values]._reason = new klass();
    }
    return this[_values]._reason;
  }

  set _reason(value) {
    const klass = require('./Element');
    return this[_values]._reason = new klass(value);
  }

  get criteria() {
    return this[_values].criteria;
  }

  set criteria(value) {
    return this[_values].criteria = value;
  }

  get _criteria() {
    if (!isPresent(this[_values]._criteria)) {
      const klass = require('./Element');
      this[_values]._criteria = new klass();
    }
    return this[_values]._criteria;
  }

  set _criteria(value) {
    const klass = require('./Element');
    return this[_values]._criteria = new klass(value);
  }

  get error() {
    return this[_values].error;
  }

  set error(value) {
    return this[_values].error = value;
  }

  get _error() {
    if (!isPresent(this[_values]._error)) {
      const klass = require('./Element');
      this[_values]._error = new klass();
    }
    return this[_values]._error;
  }

  set _error(value) {
    const klass = require('./Element');
    return this[_values]._error = new klass(value);
  }

  get channel() {
    if (!isPresent(this[_values].channel)) {
      const klass = require('./Subscription_Channel');
      this[_values].channel = new klass();
    }
    return this[_values].channel;
  }

  set channel(value) {
    const klass = require('./Subscription_Channel');
    return this[_values].channel = new klass(value);
  }

  get tag() {
    if (!isPresent(this[_values].tag)) {
      const klass = require('./Coding');
      this[_values].tag = ArrayProxy(klass);
    }
    return this[_values].tag;
  }

  set tag(value) {
    const klass = require('./Coding');
    this[_values].tag = ArrayProxy(klass);
    value.forEach(entry => this[_values].tag.push(entry));
    return this[_values].tag;
  }
}

module.exports = Subscription;

