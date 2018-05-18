const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ExplanationOfBenefit_Information extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefit_Information || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get sequence() {
    return this[_values].sequence;
  }
  set sequence(value) {
    return this[_values].sequence = value;
  }
  get _sequence() {
    if (!this[_values]._sequence) {
      const klass = require('./Element');
      this[_values]._sequence = new klass();
    }
    return this[_values]._sequence;
  }
  set _sequence(value) {
    const klass = require('./Element');
    return this[_values]._sequence = new klass(value);
  }
  get category() {
    if (!this[_values].category) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }
  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
  }
  get code() {
    if (!this[_values].code) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }
  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
  }
  get timingDate() {
    return this[_values].timingDate;
  }
  set timingDate(value) {
    return this[_values].timingDate = value;
  }
  get _timingDate() {
    if (!this[_values]._timingDate) {
      const klass = require('./Element');
      this[_values]._timingDate = new klass();
    }
    return this[_values]._timingDate;
  }
  set _timingDate(value) {
    const klass = require('./Element');
    return this[_values]._timingDate = new klass(value);
  }
  get timingPeriod() {
    if (!this[_values].timingPeriod) {
      const klass = require('./Period');
      this[_values].timingPeriod = new klass();
    }
    return this[_values].timingPeriod;
  }
  set timingPeriod(value) {
    const klass = require('./Period');
    return this[_values].timingPeriod = new klass(value);
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
  get valueQuantity() {
    if (!this[_values].valueQuantity) {
      const klass = require('./Quantity');
      this[_values].valueQuantity = new klass();
    }
    return this[_values].valueQuantity;
  }
  set valueQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].valueQuantity = new klass(value);
  }
  get valueAttachment() {
    if (!this[_values].valueAttachment) {
      const klass = require('./Attachment');
      this[_values].valueAttachment = new klass();
    }
    return this[_values].valueAttachment;
  }
  set valueAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].valueAttachment = new klass(value);
  }
  get valueReference() {
    if (!this[_values].valueReference) {
      const klass = require('./Reference');
      this[_values].valueReference = new klass();
    }
    return this[_values].valueReference;
  }
  set valueReference(value) {
    const klass = require('./Reference');
    return this[_values].valueReference = new klass(value);
  }
  get reason() {
    if (!this[_values].reason) {
      const klass = require('./Coding');
      this[_values].reason = new klass();
    }
    return this[_values].reason;
  }
  set reason(value) {
    const klass = require('./Coding');
    return this[_values].reason = new klass(value);
  }
}
module.exports = ExplanationOfBenefit_Information;