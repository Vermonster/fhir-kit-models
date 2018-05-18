const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class CapabilityStatement_Interaction extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatement_Interaction || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get code() {
    return this[_values].code;
  }
  set code(value) {
    return this[_values].code = value;
  }
  get _code() {
    if (!this[_values]._code) {
      const klass = require('./Element');
      this[_values]._code = new klass();
    }
    return this[_values]._code;
  }
  set _code(value) {
    const klass = require('./Element');
    return this[_values]._code = new klass(value);
  }
  get documentation() {
    return this[_values].documentation;
  }
  set documentation(value) {
    return this[_values].documentation = value;
  }
  get _documentation() {
    if (!this[_values]._documentation) {
      const klass = require('./Element');
      this[_values]._documentation = new klass();
    }
    return this[_values]._documentation;
  }
  set _documentation(value) {
    const klass = require('./Element');
    return this[_values]._documentation = new klass(value);
  }
}
module.exports = CapabilityStatement_Interaction;