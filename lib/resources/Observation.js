const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Observation extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'Observation';
    if (values instanceof Observation ||
      values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = ArrayProxy(klass);
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    this[_values].identifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].identifier.push(entry));
    return this[_values].identifier;
  }

  get basedOn() {
    if (!isPresent(this[_values].basedOn)) {
      const klass = require('./Reference');
      this[_values].basedOn = ArrayProxy(klass);
    }
    return this[_values].basedOn;
  }

  set basedOn(value) {
    const klass = require('./Reference');
    this[_values].basedOn = ArrayProxy(klass);
    value.forEach(entry => this[_values].basedOn.push(entry));
    return this[_values].basedOn;
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = ArrayProxy(klass);
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    this[_values].category = ArrayProxy(klass);
    value.forEach(entry => this[_values].category.push(entry));
    return this[_values].category;
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

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = new klass();
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    return this[_values].subject = new klass(value);
  }

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
  }

  get effectiveDateTime() {
    return this[_values].effectiveDateTime;
  }

  set effectiveDateTime(value) {
    return this[_values].effectiveDateTime = value;
  }

  get _effectiveDateTime() {
    if (!isPresent(this[_values]._effectiveDateTime)) {
      const klass = require('./Element');
      this[_values]._effectiveDateTime = new klass();
    }
    return this[_values]._effectiveDateTime;
  }

  set _effectiveDateTime(value) {
    const klass = require('./Element');
    return this[_values]._effectiveDateTime = new klass(value);
  }

  get effectivePeriod() {
    if (!isPresent(this[_values].effectivePeriod)) {
      const klass = require('./Period');
      this[_values].effectivePeriod = new klass();
    }
    return this[_values].effectivePeriod;
  }

  set effectivePeriod(value) {
    const klass = require('./Period');
    return this[_values].effectivePeriod = new klass(value);
  }

  get issued() {
    return this[_values].issued;
  }

  set issued(value) {
    return this[_values].issued = value;
  }

  get _issued() {
    if (!isPresent(this[_values]._issued)) {
      const klass = require('./Element');
      this[_values]._issued = new klass();
    }
    return this[_values]._issued;
  }

  set _issued(value) {
    const klass = require('./Element');
    return this[_values]._issued = new klass(value);
  }

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./Reference');
      this[_values].performer = ArrayProxy(klass);
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./Reference');
    this[_values].performer = ArrayProxy(klass);
    value.forEach(entry => this[_values].performer.push(entry));
    return this[_values].performer;
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

  get comment() {
    return this[_values].comment;
  }

  set comment(value) {
    return this[_values].comment = value;
  }

  get _comment() {
    if (!isPresent(this[_values]._comment)) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }

  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }

  get bodySite() {
    if (!isPresent(this[_values].bodySite)) {
      const klass = require('./CodeableConcept');
      this[_values].bodySite = new klass();
    }
    return this[_values].bodySite;
  }

  set bodySite(value) {
    const klass = require('./CodeableConcept');
    return this[_values].bodySite = new klass(value);
  }

  get method() {
    if (!isPresent(this[_values].method)) {
      const klass = require('./CodeableConcept');
      this[_values].method = new klass();
    }
    return this[_values].method;
  }

  set method(value) {
    const klass = require('./CodeableConcept');
    return this[_values].method = new klass(value);
  }

  get specimen() {
    if (!isPresent(this[_values].specimen)) {
      const klass = require('./Reference');
      this[_values].specimen = new klass();
    }
    return this[_values].specimen;
  }

  set specimen(value) {
    const klass = require('./Reference');
    return this[_values].specimen = new klass(value);
  }

  get device() {
    if (!isPresent(this[_values].device)) {
      const klass = require('./Reference');
      this[_values].device = new klass();
    }
    return this[_values].device;
  }

  set device(value) {
    const klass = require('./Reference');
    return this[_values].device = new klass(value);
  }

  get referenceRange() {
    if (!isPresent(this[_values].referenceRange)) {
      const klass = require('./ObservationReferenceRange');
      this[_values].referenceRange = ArrayProxy(klass);
    }
    return this[_values].referenceRange;
  }

  set referenceRange(value) {
    const klass = require('./ObservationReferenceRange');
    this[_values].referenceRange = ArrayProxy(klass);
    value.forEach(entry => this[_values].referenceRange.push(entry));
    return this[_values].referenceRange;
  }

  get related() {
    if (!isPresent(this[_values].related)) {
      const klass = require('./ObservationRelated');
      this[_values].related = ArrayProxy(klass);
    }
    return this[_values].related;
  }

  set related(value) {
    const klass = require('./ObservationRelated');
    this[_values].related = ArrayProxy(klass);
    value.forEach(entry => this[_values].related.push(entry));
    return this[_values].related;
  }

  get component() {
    if (!isPresent(this[_values].component)) {
      const klass = require('./ObservationComponent');
      this[_values].component = ArrayProxy(klass);
    }
    return this[_values].component;
  }

  set component(value) {
    const klass = require('./ObservationComponent');
    this[_values].component = ArrayProxy(klass);
    value.forEach(entry => this[_values].component.push(entry));
    return this[_values].component;
  }
}

module.exports = Observation;

