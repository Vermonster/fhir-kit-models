const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class AuditEvent extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AuditEvent || values instanceof DomainResource) {
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

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./Coding');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./Coding');
    return this[_values].type = new klass(value);
  }

  get subtype() {
    if (!isPresent(this[_values].subtype)) {
      const klass = require('./Coding');
      this[_values].subtype = ArrayProxy(klass);
    }
    return this[_values].subtype;
  }

  set subtype(value) {
    const klass = require('./Coding');
    this[_values].subtype = ArrayProxy(klass);
    value.forEach(entry => this[_values].subtype.push(entry));
    return this[_values].subtype;
  }

  get action() {
    return this[_values].action;
  }

  set action(value) {
    return this[_values].action = value;
  }

  get _action() {
    if (!isPresent(this[_values]._action)) {
      const klass = require('./Element');
      this[_values]._action = new klass();
    }
    return this[_values]._action;
  }

  set _action(value) {
    const klass = require('./Element');
    return this[_values]._action = new klass(value);
  }

  get recorded() {
    return this[_values].recorded;
  }

  set recorded(value) {
    return this[_values].recorded = value;
  }

  get _recorded() {
    if (!isPresent(this[_values]._recorded)) {
      const klass = require('./Element');
      this[_values]._recorded = new klass();
    }
    return this[_values]._recorded;
  }

  set _recorded(value) {
    const klass = require('./Element');
    return this[_values]._recorded = new klass(value);
  }

  get outcome() {
    return this[_values].outcome;
  }

  set outcome(value) {
    return this[_values].outcome = value;
  }

  get _outcome() {
    if (!isPresent(this[_values]._outcome)) {
      const klass = require('./Element');
      this[_values]._outcome = new klass();
    }
    return this[_values]._outcome;
  }

  set _outcome(value) {
    const klass = require('./Element');
    return this[_values]._outcome = new klass(value);
  }

  get outcomeDesc() {
    return this[_values].outcomeDesc;
  }

  set outcomeDesc(value) {
    return this[_values].outcomeDesc = value;
  }

  get _outcomeDesc() {
    if (!isPresent(this[_values]._outcomeDesc)) {
      const klass = require('./Element');
      this[_values]._outcomeDesc = new klass();
    }
    return this[_values]._outcomeDesc;
  }

  set _outcomeDesc(value) {
    const klass = require('./Element');
    return this[_values]._outcomeDesc = new klass(value);
  }

  get purposeOfEvent() {
    if (!isPresent(this[_values].purposeOfEvent)) {
      const klass = require('./CodeableConcept');
      this[_values].purposeOfEvent = ArrayProxy(klass);
    }
    return this[_values].purposeOfEvent;
  }

  set purposeOfEvent(value) {
    const klass = require('./CodeableConcept');
    this[_values].purposeOfEvent = ArrayProxy(klass);
    value.forEach(entry => this[_values].purposeOfEvent.push(entry));
    return this[_values].purposeOfEvent;
  }

  get agent() {
    if (!isPresent(this[_values].agent)) {
      const klass = require('./AuditEvent_Agent');
      this[_values].agent = ArrayProxy(klass);
    }
    return this[_values].agent;
  }

  set agent(value) {
    const klass = require('./AuditEvent_Agent');
    this[_values].agent = ArrayProxy(klass);
    value.forEach(entry => this[_values].agent.push(entry));
    return this[_values].agent;
  }

  get source() {
    if (!isPresent(this[_values].source)) {
      const klass = require('./AuditEvent_Source');
      this[_values].source = new klass();
    }
    return this[_values].source;
  }

  set source(value) {
    const klass = require('./AuditEvent_Source');
    return this[_values].source = new klass(value);
  }

  get entity() {
    if (!isPresent(this[_values].entity)) {
      const klass = require('./AuditEvent_Entity');
      this[_values].entity = ArrayProxy(klass);
    }
    return this[_values].entity;
  }

  set entity(value) {
    const klass = require('./AuditEvent_Entity');
    this[_values].entity = ArrayProxy(klass);
    value.forEach(entry => this[_values].entity.push(entry));
    return this[_values].entity;
  }
}

module.exports = AuditEvent;

