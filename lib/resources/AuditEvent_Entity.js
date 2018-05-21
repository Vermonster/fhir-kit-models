const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class AuditEvent_Entity extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AuditEvent_Entity || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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

  get role() {
    if (!isPresent(this[_values].role)) {
      const klass = require('./Coding');
      this[_values].role = new klass();
    }
    return this[_values].role;
  }

  set role(value) {
    const klass = require('./Coding');
    return this[_values].role = new klass(value);
  }

  get lifecycle() {
    if (!isPresent(this[_values].lifecycle)) {
      const klass = require('./Coding');
      this[_values].lifecycle = new klass();
    }
    return this[_values].lifecycle;
  }

  set lifecycle(value) {
    const klass = require('./Coding');
    return this[_values].lifecycle = new klass(value);
  }

  get securityLabel() {
    if (!isPresent(this[_values].securityLabel)) {
      const klass = require('./Coding');
      this[_values].securityLabel = ArrayProxy(klass);
    }
    return this[_values].securityLabel;
  }

  set securityLabel(value) {
    const klass = require('./Coding');
    this[_values].securityLabel = ArrayProxy(klass);
    value.forEach(entry => this[_values].securityLabel.push(entry));
    return this[_values].securityLabel;
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

  get query() {
    return this[_values].query;
  }

  set query(value) {
    return this[_values].query = value;
  }

  get _query() {
    if (!isPresent(this[_values]._query)) {
      const klass = require('./Element');
      this[_values]._query = new klass();
    }
    return this[_values]._query;
  }

  set _query(value) {
    const klass = require('./Element');
    return this[_values]._query = new klass(value);
  }

  get detail() {
    if (!isPresent(this[_values].detail)) {
      const klass = require('./AuditEvent_Detail');
      this[_values].detail = ArrayProxy(klass);
    }
    return this[_values].detail;
  }

  set detail(value) {
    const klass = require('./AuditEvent_Detail');
    this[_values].detail = ArrayProxy(klass);
    value.forEach(entry => this[_values].detail.push(entry));
    return this[_values].detail;
  }
}

module.exports = AuditEvent_Entity;

