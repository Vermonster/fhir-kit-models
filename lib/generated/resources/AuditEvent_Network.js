const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class AuditEvent_Network extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AuditEvent_Network || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get address() {
    return this[_values].address;
  }

  set address(value) {
    return this[_values].address = value;
  }

  get _address() {
    if (!isPresent(this[_values]._address)) {
      const klass = require('./Element');
      this[_values]._address = new klass();
    }
    return this[_values]._address;
  }

  set _address(value) {
    const klass = require('./Element');
    return this[_values]._address = new klass(value);
  }

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }
}

module.exports = AuditEvent_Network;

