const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class MessageDefinition_Focus extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MessageDefinition_Focus || values instanceof BackboneElement) {
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
  get profile() {
    if (!this[_values].profile) {
      const klass = require('./Reference');
      this[_values].profile = new klass();
    }
    return this[_values].profile;
  }
  set profile(value) {
    const klass = require('./Reference');
    return this[_values].profile = new klass(value);
  }
  get min() {
    return this[_values].min;
  }
  set min(value) {
    return this[_values].min = value;
  }
  get _min() {
    if (!this[_values]._min) {
      const klass = require('./Element');
      this[_values]._min = new klass();
    }
    return this[_values]._min;
  }
  set _min(value) {
    const klass = require('./Element');
    return this[_values]._min = new klass(value);
  }
  get max() {
    return this[_values].max;
  }
  set max(value) {
    return this[_values].max = value;
  }
  get _max() {
    if (!this[_values]._max) {
      const klass = require('./Element');
      this[_values]._max = new klass();
    }
    return this[_values]._max;
  }
  set _max(value) {
    const klass = require('./Element');
    return this[_values]._max = new klass(value);
  }
}
module.exports = MessageDefinition_Focus;