const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class Observation_Component extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Observation_Component || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
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

  get valueCodeableConcept() {
    if (!isPresent(this[_values].valueCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].valueCodeableConcept = new klass();
    }
    return this[_values].valueCodeableConcept;
  }

  set valueCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].valueCodeableConcept = new klass(value);
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

  get valueRange() {
    if (!isPresent(this[_values].valueRange)) {
      const klass = require('./Range');
      this[_values].valueRange = new klass();
    }
    return this[_values].valueRange;
  }

  set valueRange(value) {
    const klass = require('./Range');
    return this[_values].valueRange = new klass(value);
  }

  get valueRatio() {
    if (!isPresent(this[_values].valueRatio)) {
      const klass = require('./Ratio');
      this[_values].valueRatio = new klass();
    }
    return this[_values].valueRatio;
  }

  set valueRatio(value) {
    const klass = require('./Ratio');
    return this[_values].valueRatio = new klass(value);
  }

  get valueSampledData() {
    if (!isPresent(this[_values].valueSampledData)) {
      const klass = require('./SampledData');
      this[_values].valueSampledData = new klass();
    }
    return this[_values].valueSampledData;
  }

  set valueSampledData(value) {
    const klass = require('./SampledData');
    return this[_values].valueSampledData = new klass(value);
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

  get valuePeriod() {
    if (!isPresent(this[_values].valuePeriod)) {
      const klass = require('./Period');
      this[_values].valuePeriod = new klass();
    }
    return this[_values].valuePeriod;
  }

  set valuePeriod(value) {
    const klass = require('./Period');
    return this[_values].valuePeriod = new klass(value);
  }

  get dataAbsentReason() {
    if (!isPresent(this[_values].dataAbsentReason)) {
      const klass = require('./CodeableConcept');
      this[_values].dataAbsentReason = new klass();
    }
    return this[_values].dataAbsentReason;
  }

  set dataAbsentReason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].dataAbsentReason = new klass(value);
  }

  get interpretation() {
    if (!isPresent(this[_values].interpretation)) {
      const klass = require('./CodeableConcept');
      this[_values].interpretation = new klass();
    }
    return this[_values].interpretation;
  }

  set interpretation(value) {
    const klass = require('./CodeableConcept');
    return this[_values].interpretation = new klass(value);
  }

  get referenceRange() {
    if (!isPresent(this[_values].referenceRange)) {
      const klass = require('./Observation_ReferenceRange');
      this[_values].referenceRange = ArrayProxy(klass);
    }
    return this[_values].referenceRange;
  }

  set referenceRange(value) {
    const klass = require('./Observation_ReferenceRange');
    this[_values].referenceRange = ArrayProxy(klass);
    value.forEach(entry => this[_values].referenceRange.push(entry));
    return this[_values].referenceRange;
  }
}

module.exports = Observation_Component;

