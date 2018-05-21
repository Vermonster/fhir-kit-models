const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class Provenance extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Provenance || values instanceof DomainResource) {
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

  get target() {
    if (!isPresent(this[_values].target)) {
      const klass = require('./Reference');
      this[_values].target = ArrayProxy(klass);
    }
    return this[_values].target;
  }

  set target(value) {
    const klass = require('./Reference');
    this[_values].target = ArrayProxy(klass);
    value.forEach(entry => this[_values].target.push(entry));
    return this[_values].target;
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

  get reason() {
    if (!isPresent(this[_values].reason)) {
      const klass = require('./Coding');
      this[_values].reason = ArrayProxy(klass);
    }
    return this[_values].reason;
  }

  set reason(value) {
    const klass = require('./Coding');
    this[_values].reason = ArrayProxy(klass);
    value.forEach(entry => this[_values].reason.push(entry));
    return this[_values].reason;
  }

  get activity() {
    if (!isPresent(this[_values].activity)) {
      const klass = require('./Coding');
      this[_values].activity = new klass();
    }
    return this[_values].activity;
  }

  set activity(value) {
    const klass = require('./Coding');
    return this[_values].activity = new klass(value);
  }

  get agent() {
    if (!isPresent(this[_values].agent)) {
      const klass = require('./Provenance_Agent');
      this[_values].agent = ArrayProxy(klass);
    }
    return this[_values].agent;
  }

  set agent(value) {
    const klass = require('./Provenance_Agent');
    this[_values].agent = ArrayProxy(klass);
    value.forEach(entry => this[_values].agent.push(entry));
    return this[_values].agent;
  }

  get entity() {
    if (!isPresent(this[_values].entity)) {
      const klass = require('./Provenance_Entity');
      this[_values].entity = ArrayProxy(klass);
    }
    return this[_values].entity;
  }

  set entity(value) {
    const klass = require('./Provenance_Entity');
    this[_values].entity = ArrayProxy(klass);
    value.forEach(entry => this[_values].entity.push(entry));
    return this[_values].entity;
  }

  get signature() {
    if (!isPresent(this[_values].signature)) {
      const klass = require('./Signature');
      this[_values].signature = ArrayProxy(klass);
    }
    return this[_values].signature;
  }

  set signature(value) {
    const klass = require('./Signature');
    this[_values].signature = ArrayProxy(klass);
    value.forEach(entry => this[_values].signature.push(entry));
    return this[_values].signature;
  }
}

module.exports = Provenance;

