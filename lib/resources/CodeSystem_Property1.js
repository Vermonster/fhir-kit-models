const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CodeSystem_Property1 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CodeSystem_Property1 || values instanceof BackboneElement) {
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
    if (!isPresent(this[_values]._code)) {
      const klass = require('./Element');
      this[_values]._code = new klass();
    }
    return this[_values]._code;
  }

  set _code(value) {
    const klass = require('./Element');
    return this[_values]._code = new klass(value);
  }

  get valueCode() {
    return this[_values].valueCode;
  }

  set valueCode(value) {
    return this[_values].valueCode = value;
  }

  get _valueCode() {
    if (!isPresent(this[_values]._valueCode)) {
      const klass = require('./Element');
      this[_values]._valueCode = new klass();
    }
    return this[_values]._valueCode;
  }

  set _valueCode(value) {
    const klass = require('./Element');
    return this[_values]._valueCode = new klass(value);
  }

  get valueCoding() {
    if (!isPresent(this[_values].valueCoding)) {
      const klass = require('./Coding');
      this[_values].valueCoding = new klass();
    }
    return this[_values].valueCoding;
  }

  set valueCoding(value) {
    const klass = require('./Coding');
    return this[_values].valueCoding = new klass(value);
  }

  get valueString() {
    return this[_values].valueString;
  }

  set valueString(value) {
    return this[_values].valueString = value;
  }

  get _valueString() {
    if (!isPresent(this[_values]._valueString)) {
      const klass = require('./Element');
      this[_values]._valueString = new klass();
    }
    return this[_values]._valueString;
  }

  set _valueString(value) {
    const klass = require('./Element');
    return this[_values]._valueString = new klass(value);
  }

  get valueInteger() {
    return this[_values].valueInteger;
  }

  set valueInteger(value) {
    return this[_values].valueInteger = value;
  }

  get _valueInteger() {
    if (!isPresent(this[_values]._valueInteger)) {
      const klass = require('./Element');
      this[_values]._valueInteger = new klass();
    }
    return this[_values]._valueInteger;
  }

  set _valueInteger(value) {
    const klass = require('./Element');
    return this[_values]._valueInteger = new klass(value);
  }

  get valueBoolean() {
    return this[_values].valueBoolean;
  }

  set valueBoolean(value) {
    return this[_values].valueBoolean = value;
  }

  get _valueBoolean() {
    if (!isPresent(this[_values]._valueBoolean)) {
      const klass = require('./Element');
      this[_values]._valueBoolean = new klass();
    }
    return this[_values]._valueBoolean;
  }

  set _valueBoolean(value) {
    const klass = require('./Element');
    return this[_values]._valueBoolean = new klass(value);
  }

  get valueDateTime() {
    return this[_values].valueDateTime;
  }

  set valueDateTime(value) {
    return this[_values].valueDateTime = value;
  }

  get _valueDateTime() {
    if (!isPresent(this[_values]._valueDateTime)) {
      const klass = require('./Element');
      this[_values]._valueDateTime = new klass();
    }
    return this[_values]._valueDateTime;
  }

  set _valueDateTime(value) {
    const klass = require('./Element');
    return this[_values]._valueDateTime = new klass(value);
  }
}

module.exports = CodeSystem_Property1;

