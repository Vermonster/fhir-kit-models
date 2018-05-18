const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class Coverage extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Coverage || values instanceof DomainResource) {
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
    if (!this[_values].identifier) {
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
    if (!this[_values]._status) {
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
  get policyHolder() {
    if (!this[_values].policyHolder) {
      const klass = require('./Reference');
      this[_values].policyHolder = new klass();
    }
    return this[_values].policyHolder;
  }
  set policyHolder(value) {
    const klass = require('./Reference');
    return this[_values].policyHolder = new klass(value);
  }
  get subscriber() {
    if (!this[_values].subscriber) {
      const klass = require('./Reference');
      this[_values].subscriber = new klass();
    }
    return this[_values].subscriber;
  }
  set subscriber(value) {
    const klass = require('./Reference');
    return this[_values].subscriber = new klass(value);
  }
  get subscriberId() {
    return this[_values].subscriberId;
  }
  set subscriberId(value) {
    return this[_values].subscriberId = value;
  }
  get _subscriberId() {
    if (!this[_values]._subscriberId) {
      const klass = require('./Element');
      this[_values]._subscriberId = new klass();
    }
    return this[_values]._subscriberId;
  }
  set _subscriberId(value) {
    const klass = require('./Element');
    return this[_values]._subscriberId = new klass(value);
  }
  get beneficiary() {
    if (!this[_values].beneficiary) {
      const klass = require('./Reference');
      this[_values].beneficiary = new klass();
    }
    return this[_values].beneficiary;
  }
  set beneficiary(value) {
    const klass = require('./Reference');
    return this[_values].beneficiary = new klass(value);
  }
  get relationship() {
    if (!this[_values].relationship) {
      const klass = require('./CodeableConcept');
      this[_values].relationship = new klass();
    }
    return this[_values].relationship;
  }
  set relationship(value) {
    const klass = require('./CodeableConcept');
    return this[_values].relationship = new klass(value);
  }
  get period() {
    if (!this[_values].period) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }
  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }
  get payor() {
    if (!this[_values].payor) {
      const klass = require('./Reference');
      this[_values].payor = ArrayProxy(klass);
    }
    return this[_values].payor;
  }
  set payor(value) {
    const klass = require('./Reference');
    this[_values].payor = ArrayProxy(klass);
    value.forEach(entry => this[_values].payor.push(entry));
    return this[_values].payor;
  }
  get grouping() {
    if (!this[_values].grouping) {
      const klass = require('./Coverage_Grouping');
      this[_values].grouping = new klass();
    }
    return this[_values].grouping;
  }
  set grouping(value) {
    const klass = require('./Coverage_Grouping');
    return this[_values].grouping = new klass(value);
  }
  get dependent() {
    return this[_values].dependent;
  }
  set dependent(value) {
    return this[_values].dependent = value;
  }
  get _dependent() {
    if (!this[_values]._dependent) {
      const klass = require('./Element');
      this[_values]._dependent = new klass();
    }
    return this[_values]._dependent;
  }
  set _dependent(value) {
    const klass = require('./Element');
    return this[_values]._dependent = new klass(value);
  }
  get sequence() {
    return this[_values].sequence;
  }
  set sequence(value) {
    return this[_values].sequence = value;
  }
  get _sequence() {
    if (!this[_values]._sequence) {
      const klass = require('./Element');
      this[_values]._sequence = new klass();
    }
    return this[_values]._sequence;
  }
  set _sequence(value) {
    const klass = require('./Element');
    return this[_values]._sequence = new klass(value);
  }
  get order() {
    return this[_values].order;
  }
  set order(value) {
    return this[_values].order = value;
  }
  get _order() {
    if (!this[_values]._order) {
      const klass = require('./Element');
      this[_values]._order = new klass();
    }
    return this[_values]._order;
  }
  set _order(value) {
    const klass = require('./Element');
    return this[_values]._order = new klass(value);
  }
  get network() {
    return this[_values].network;
  }
  set network(value) {
    return this[_values].network = value;
  }
  get _network() {
    if (!this[_values]._network) {
      const klass = require('./Element');
      this[_values]._network = new klass();
    }
    return this[_values]._network;
  }
  set _network(value) {
    const klass = require('./Element');
    return this[_values]._network = new klass(value);
  }
  get contract() {
    if (!this[_values].contract) {
      const klass = require('./Reference');
      this[_values].contract = ArrayProxy(klass);
    }
    return this[_values].contract;
  }
  set contract(value) {
    const klass = require('./Reference');
    this[_values].contract = ArrayProxy(klass);
    value.forEach(entry => this[_values].contract.push(entry));
    return this[_values].contract;
  }
}
module.exports = Coverage;