const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class AuditEvent_Source extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AuditEvent_Source || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get site() {
    return this[_values].site;
  }

  set site(value) {
    return this[_values].site = value;
  }

  get _site() {
    if (!isPresent(this[_values]._site)) {
      const klass = require('./Element');
      this[_values]._site = new klass();
    }
    return this[_values]._site;
  }

  set _site(value) {
    const klass = require('./Element');
    return this[_values]._site = new klass(value);
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

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./Coding');
      this[_values].type = ArrayProxy(klass);
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./Coding');
    this[_values].type = ArrayProxy(klass);
    value.forEach(entry => this[_values].type.push(entry));
    return this[_values].type;
  }
}

module.exports = AuditEvent_Source;

