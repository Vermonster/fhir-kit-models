const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Consent_Data1 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Consent_Data1 || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get meaning() {
    return this[_values].meaning;
  }
  set meaning(value) {
    return this[_values].meaning = value;
  }
  get _meaning() {
    if (!this[_values]._meaning) {
      const klass = require('./Element');
      this[_values]._meaning = new klass();
    }
    return this[_values]._meaning;
  }
  set _meaning(value) {
    const klass = require('./Element');
    return this[_values]._meaning = new klass(value);
  }
  get reference() {
    if (!this[_values].reference) {
      const klass = require('./Reference');
      this[_values].reference = new klass();
    }
    return this[_values].reference;
  }
  set reference(value) {
    const klass = require('./Reference');
    return this[_values].reference = new klass(value);
  }
}
module.exports = Consent_Data1;