
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class QuestionnaireOption extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof QuestionnaireOption || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get valueDate() {
    return this[_values].valueDate;
  }

  set valueDate(value) {
    return this[_values].valueDate = value;
  }

  get _valueDate() {
    if (!isPresent(this[_values]._valueDate)) {
      const klass = require('./Element');
      this[_values]._valueDate = new klass();
    }
    return this[_values]._valueDate;
  }

  set _valueDate(value) {
    const klass = require('./Element');
    return this[_values]._valueDate = new klass(value);
  }

  get valueTime() {
    return this[_values].valueTime;
  }

  set valueTime(value) {
    return this[_values].valueTime = value;
  }

  get _valueTime() {
    if (!isPresent(this[_values]._valueTime)) {
      const klass = require('./Element');
      this[_values]._valueTime = new klass();
    }
    return this[_values]._valueTime;
  }

  set _valueTime(value) {
    const klass = require('./Element');
    return this[_values]._valueTime = new klass(value);
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
}

module.exports = QuestionnaireOption;

