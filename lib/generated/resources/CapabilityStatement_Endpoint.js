const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class CapabilityStatement_Endpoint extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatement_Endpoint || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get protocol() {
    if (!this[_values].protocol) {
      const klass = require('./Coding');
      this[_values].protocol = new klass();
    }
    return this[_values].protocol;
  }
  set protocol(value) {
    const klass = require('./Coding');
    return this[_values].protocol = new klass(value);
  }
  get address() {
    return this[_values].address;
  }
  set address(value) {
    return this[_values].address = value;
  }
  get _address() {
    if (!this[_values]._address) {
      const klass = require('./Element');
      this[_values]._address = new klass();
    }
    return this[_values]._address;
  }
  set _address(value) {
    const klass = require('./Element');
    return this[_values]._address = new klass(value);
  }
}
module.exports = CapabilityStatement_Endpoint;