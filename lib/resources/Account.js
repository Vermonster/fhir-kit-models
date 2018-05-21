const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Account extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Account ||
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

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
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

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }

  get active() {
    if (!isPresent(this[_values].active)) {
      const klass = require('./Period');
      this[_values].active = new klass();
    }
    return this[_values].active;
  }

  set active(value) {
    const klass = require('./Period');
    return this[_values].active = new klass(value);
  }

  get balance() {
    if (!isPresent(this[_values].balance)) {
      const klass = require('./Money');
      this[_values].balance = new klass();
    }
    return this[_values].balance;
  }

  set balance(value) {
    const klass = require('./Money');
    return this[_values].balance = new klass(value);
  }

  get coverage() {
    if (!isPresent(this[_values].coverage)) {
      const klass = require('./AccountCoverage');
      this[_values].coverage = ArrayProxy(klass);
    }
    return this[_values].coverage;
  }

  set coverage(value) {
    const klass = require('./AccountCoverage');
    this[_values].coverage = ArrayProxy(klass);
    value.forEach(entry => this[_values].coverage.push(entry));
    return this[_values].coverage;
  }

  get owner() {
    if (!isPresent(this[_values].owner)) {
      const klass = require('./Reference');
      this[_values].owner = new klass();
    }
    return this[_values].owner;
  }

  set owner(value) {
    const klass = require('./Reference');
    return this[_values].owner = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get guarantor() {
    if (!isPresent(this[_values].guarantor)) {
      const klass = require('./AccountGuarantor');
      this[_values].guarantor = ArrayProxy(klass);
    }
    return this[_values].guarantor;
  }

  set guarantor(value) {
    const klass = require('./AccountGuarantor');
    this[_values].guarantor = ArrayProxy(klass);
    value.forEach(entry => this[_values].guarantor.push(entry));
    return this[_values].guarantor;
  }
}

module.exports = Account;

