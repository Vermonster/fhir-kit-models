const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class QuestionnaireResponseAnswer extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof QuestionnaireResponseAnswer || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get valueDecimal() {
    return this[_values].valueDecimal;
  }

  set valueDecimal(value) {
    return this[_values].valueDecimal = value;
  }

  get _valueDecimal() {
    if (!isPresent(this[_values]._valueDecimal)) {
      const klass = require('./Element');
      this[_values]._valueDecimal = new klass();
    }
    return this[_values]._valueDecimal;
  }

  set _valueDecimal(value) {
    const klass = require('./Element');
    return this[_values]._valueDecimal = new klass(value);
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

  get valueUri() {
    return this[_values].valueUri;
  }

  set valueUri(value) {
    return this[_values].valueUri = value;
  }

  get _valueUri() {
    if (!isPresent(this[_values]._valueUri)) {
      const klass = require('./Element');
      this[_values]._valueUri = new klass();
    }
    return this[_values]._valueUri;
  }

  set _valueUri(value) {
    const klass = require('./Element');
    return this[_values]._valueUri = new klass(value);
  }

  get valueAttachment() {
    if (!isPresent(this[_values].valueAttachment)) {
      const klass = require('./Attachment');
      this[_values].valueAttachment = new klass();
    }
    return this[_values].valueAttachment;
  }

  set valueAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].valueAttachment = new klass(value);
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

  get valueQuantity() {
    if (!isPresent(this[_values].valueQuantity)) {
      const klass = require('./Quantity');
      this[_values].valueQuantity = new klass();
    }
    return this[_values].valueQuantity;
  }

  set valueQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].valueQuantity = new klass(value);
  }

  get valueReference() {
    if (!isPresent(this[_values].valueReference)) {
      const klass = require('./Reference');
      this[_values].valueReference = new klass();
    }
    return this[_values].valueReference;
  }

  set valueReference(value) {
    const klass = require('./Reference');
    return this[_values].valueReference = new klass(value);
  }

  get item() {
    if (!isPresent(this[_values].item)) {
      const klass = require('./QuestionnaireResponseItem');
      this[_values].item = ArrayProxy(klass);
    }
    return this[_values].item;
  }

  set item(value) {
    const klass = require('./QuestionnaireResponseItem');
    this[_values].item = ArrayProxy(klass);
    value.forEach(entry => this[_values].item.push(entry));
    return this[_values].item;
  }
}

module.exports = QuestionnaireResponseAnswer;

