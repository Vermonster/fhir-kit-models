const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CarePlan_Detail extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CarePlan_Detail || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
  }

  get definition() {
    if (!isPresent(this[_values].definition)) {
      const klass = require('./Reference');
      this[_values].definition = new klass();
    }
    return this[_values].definition;
  }

  set definition(value) {
    const klass = require('./Reference');
    return this[_values].definition = new klass(value);
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

  get reasonCode() {
    if (!isPresent(this[_values].reasonCode)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCode = ArrayProxy(klass);
    }
    return this[_values].reasonCode;
  }

  set reasonCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].reasonCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonCode.push(entry));
    return this[_values].reasonCode;
  }

  get reasonReference() {
    if (!isPresent(this[_values].reasonReference)) {
      const klass = require('./Reference');
      this[_values].reasonReference = ArrayProxy(klass);
    }
    return this[_values].reasonReference;
  }

  set reasonReference(value) {
    const klass = require('./Reference');
    this[_values].reasonReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonReference.push(entry));
    return this[_values].reasonReference;
  }

  get goal() {
    if (!isPresent(this[_values].goal)) {
      const klass = require('./Reference');
      this[_values].goal = ArrayProxy(klass);
    }
    return this[_values].goal;
  }

  set goal(value) {
    const klass = require('./Reference');
    this[_values].goal = ArrayProxy(klass);
    value.forEach(entry => this[_values].goal.push(entry));
    return this[_values].goal;
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

  get statusReason() {
    return this[_values].statusReason;
  }

  set statusReason(value) {
    return this[_values].statusReason = value;
  }

  get _statusReason() {
    if (!isPresent(this[_values]._statusReason)) {
      const klass = require('./Element');
      this[_values]._statusReason = new klass();
    }
    return this[_values]._statusReason;
  }

  set _statusReason(value) {
    const klass = require('./Element');
    return this[_values]._statusReason = new klass(value);
  }

  get prohibited() {
    return this[_values].prohibited;
  }

  set prohibited(value) {
    return this[_values].prohibited = value;
  }

  get _prohibited() {
    if (!isPresent(this[_values]._prohibited)) {
      const klass = require('./Element');
      this[_values]._prohibited = new klass();
    }
    return this[_values]._prohibited;
  }

  set _prohibited(value) {
    const klass = require('./Element');
    return this[_values]._prohibited = new klass(value);
  }

  get scheduledTiming() {
    if (!isPresent(this[_values].scheduledTiming)) {
      const klass = require('./Timing');
      this[_values].scheduledTiming = new klass();
    }
    return this[_values].scheduledTiming;
  }

  set scheduledTiming(value) {
    const klass = require('./Timing');
    return this[_values].scheduledTiming = new klass(value);
  }

  get scheduledPeriod() {
    if (!isPresent(this[_values].scheduledPeriod)) {
      const klass = require('./Period');
      this[_values].scheduledPeriod = new klass();
    }
    return this[_values].scheduledPeriod;
  }

  set scheduledPeriod(value) {
    const klass = require('./Period');
    return this[_values].scheduledPeriod = new klass(value);
  }

  get scheduledString() {
    return this[_values].scheduledString;
  }

  set scheduledString(value) {
    return this[_values].scheduledString = value;
  }

  get _scheduledString() {
    if (!isPresent(this[_values]._scheduledString)) {
      const klass = require('./Element');
      this[_values]._scheduledString = new klass();
    }
    return this[_values]._scheduledString;
  }

  set _scheduledString(value) {
    const klass = require('./Element');
    return this[_values]._scheduledString = new klass(value);
  }

  get location() {
    if (!isPresent(this[_values].location)) {
      const klass = require('./Reference');
      this[_values].location = new klass();
    }
    return this[_values].location;
  }

  set location(value) {
    const klass = require('./Reference');
    return this[_values].location = new klass(value);
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

  get productCodeableConcept() {
    if (!isPresent(this[_values].productCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].productCodeableConcept = new klass();
    }
    return this[_values].productCodeableConcept;
  }

  set productCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].productCodeableConcept = new klass(value);
  }

  get productReference() {
    if (!isPresent(this[_values].productReference)) {
      const klass = require('./Reference');
      this[_values].productReference = new klass();
    }
    return this[_values].productReference;
  }

  set productReference(value) {
    const klass = require('./Reference');
    return this[_values].productReference = new klass(value);
  }

  get dailyAmount() {
    if (!isPresent(this[_values].dailyAmount)) {
      const klass = require('./Quantity');
      this[_values].dailyAmount = new klass();
    }
    return this[_values].dailyAmount;
  }

  set dailyAmount(value) {
    const klass = require('./Quantity');
    return this[_values].dailyAmount = new klass(value);
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }
}

module.exports = CarePlan_Detail;

