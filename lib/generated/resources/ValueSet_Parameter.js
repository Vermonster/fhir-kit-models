const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ValueSet_Parameter extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ValueSet_Parameter || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get name() {
    return this[_values].name;
  }
  set name(value) {
    return this[_values].name = value;
  }
  get _name() {
    if (!this[_values]._name) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }
  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }
  get valueString() {
    return this[_values].valueString;
  }
  set valueString(value) {
    return this[_values].valueString = value;
  }
  get _valueString() {
    if (!this[_values]._valueString) {
      const klass = require('./Element');
      this[_values]._valueString = new klass();
    }
    return this[_values]._valueString;
  }
  set _valueString(value) {
    const klass = require('./Element');
    return this[_values]._valueString = new klass(value);
  }
  get valueBoolean() {
    return this[_values].valueBoolean;
  }
  set valueBoolean(value) {
    return this[_values].valueBoolean = value;
  }
  get _valueBoolean() {
    if (!this[_values]._valueBoolean) {
      const klass = require('./Element');
      this[_values]._valueBoolean = new klass();
    }
    return this[_values]._valueBoolean;
  }
  set _valueBoolean(value) {
    const klass = require('./Element');
    return this[_values]._valueBoolean = new klass(value);
  }
  get valueInteger() {
    return this[_values].valueInteger;
  }
  set valueInteger(value) {
    return this[_values].valueInteger = value;
  }
  get _valueInteger() {
    if (!this[_values]._valueInteger) {
      const klass = require('./Element');
      this[_values]._valueInteger = new klass();
    }
    return this[_values]._valueInteger;
  }
  set _valueInteger(value) {
    const klass = require('./Element');
    return this[_values]._valueInteger = new klass(value);
  }
  get valueDecimal() {
    return this[_values].valueDecimal;
  }
  set valueDecimal(value) {
    return this[_values].valueDecimal = value;
  }
  get _valueDecimal() {
    if (!this[_values]._valueDecimal) {
      const klass = require('./Element');
      this[_values]._valueDecimal = new klass();
    }
    return this[_values]._valueDecimal;
  }
  set _valueDecimal(value) {
    const klass = require('./Element');
    return this[_values]._valueDecimal = new klass(value);
  }
  get valueUri() {
    return this[_values].valueUri;
  }
  set valueUri(value) {
    return this[_values].valueUri = value;
  }
  get _valueUri() {
    if (!this[_values]._valueUri) {
      const klass = require('./Element');
      this[_values]._valueUri = new klass();
    }
    return this[_values]._valueUri;
  }
  set _valueUri(value) {
    const klass = require('./Element');
    return this[_values]._valueUri = new klass(value);
  }
  get valueCode() {
    return this[_values].valueCode;
  }
  set valueCode(value) {
    return this[_values].valueCode = value;
  }
  get _valueCode() {
    if (!this[_values]._valueCode) {
      const klass = require('./Element');
      this[_values]._valueCode = new klass();
    }
    return this[_values]._valueCode;
  }
  set _valueCode(value) {
    const klass = require('./Element');
    return this[_values]._valueCode = new klass(value);
  }
}
module.exports = ValueSet_Parameter;