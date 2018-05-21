const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class AuditEvent_Agent extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AuditEvent_Agent || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get role() {
    if (!isPresent(this[_values].role)) {
      const klass = require('./CodeableConcept');
      this[_values].role = ArrayProxy(klass);
    }
    return this[_values].role;
  }

  set role(value) {
    const klass = require('./CodeableConcept');
    this[_values].role = ArrayProxy(klass);
    value.forEach(entry => this[_values].role.push(entry));
    return this[_values].role;
  }

  get reference() {
    if (!isPresent(this[_values].reference)) {
      const klass = require('./Reference');
      this[_values].reference = new klass();
    }
    return this[_values].reference;
  }

  set reference(value) {
    const klass = require('./Reference');
    return this[_values].reference = new klass(value);
  }

  get userId() {
    if (!isPresent(this[_values].userId)) {
      const klass = require('./Identifier');
      this[_values].userId = new klass();
    }
    return this[_values].userId;
  }

  set userId(value) {
    const klass = require('./Identifier');
    return this[_values].userId = new klass(value);
  }

  get altId() {
    return this[_values].altId;
  }

  set altId(value) {
    return this[_values].altId = value;
  }

  get _altId() {
    if (!isPresent(this[_values]._altId)) {
      const klass = require('./Element');
      this[_values]._altId = new klass();
    }
    return this[_values]._altId;
  }

  set _altId(value) {
    const klass = require('./Element');
    return this[_values]._altId = new klass(value);
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

  get requestor() {
    return this[_values].requestor;
  }

  set requestor(value) {
    return this[_values].requestor = value;
  }

  get _requestor() {
    if (!isPresent(this[_values]._requestor)) {
      const klass = require('./Element');
      this[_values]._requestor = new klass();
    }
    return this[_values]._requestor;
  }

  set _requestor(value) {
    const klass = require('./Element');
    return this[_values]._requestor = new klass(value);
  }

  get location() {
    if (!isPresent(this[_values].location)) {
      const klass = require('./Reference');
      this[_values].location = new klass();
    }
    return this[_values].location;
  }

  set location(value) {
    const klass = require('./Reference');
    return this[_values].location = new klass(value);
  }

  get policy() {
    return this[_values].policy;
  }

  set policy(value) {
    return this[_values].policy = value;
  }

  get _policy() {
    if (!isPresent(this[_values]._policy)) {
      const klass = require('./Element');
      this[_values]._policy = ArrayProxy(klass);
    }
    return this[_values]._policy;
  }

  set _policy(value) {
    const klass = require('./Element');
    this[_values]._policy = ArrayProxy(klass);
    value.forEach(entry => this[_values]._policy.push(entry));
    return this[_values]._policy;
  }

  get media() {
    if (!isPresent(this[_values].media)) {
      const klass = require('./Coding');
      this[_values].media = new klass();
    }
    return this[_values].media;
  }

  set media(value) {
    const klass = require('./Coding');
    return this[_values].media = new klass(value);
  }

  get network() {
    if (!isPresent(this[_values].network)) {
      const klass = require('./AuditEvent_Network');
      this[_values].network = new klass();
    }
    return this[_values].network;
  }

  set network(value) {
    const klass = require('./AuditEvent_Network');
    return this[_values].network = new klass(value);
  }

  get purposeOfUse() {
    if (!isPresent(this[_values].purposeOfUse)) {
      const klass = require('./CodeableConcept');
      this[_values].purposeOfUse = ArrayProxy(klass);
    }
    return this[_values].purposeOfUse;
  }

  set purposeOfUse(value) {
    const klass = require('./CodeableConcept');
    this[_values].purposeOfUse = ArrayProxy(klass);
    value.forEach(entry => this[_values].purposeOfUse.push(entry));
    return this[_values].purposeOfUse;
  }
}

module.exports = AuditEvent_Agent;

