const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class DeviceUseStatement extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'DeviceUseStatement';
    if (values instanceof DeviceUseStatement ||
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

  get whenUsed() {
    if (!isPresent(this[_values].whenUsed)) {
      const klass = require('./Period');
      this[_values].whenUsed = new klass();
    }
    return this[_values].whenUsed;
  }

  set whenUsed(value) {
    const klass = require('./Period');
    return this[_values].whenUsed = new klass(value);
  }

  get timingTiming() {
    if (!isPresent(this[_values].timingTiming)) {
      const klass = require('./Timing');
      this[_values].timingTiming = new klass();
    }
    return this[_values].timingTiming;
  }

  set timingTiming(value) {
    const klass = require('./Timing');
    return this[_values].timingTiming = new klass(value);
  }

  get timingPeriod() {
    if (!isPresent(this[_values].timingPeriod)) {
      const klass = require('./Period');
      this[_values].timingPeriod = new klass();
    }
    return this[_values].timingPeriod;
  }

  set timingPeriod(value) {
    const klass = require('./Period');
    return this[_values].timingPeriod = new klass(value);
  }

  get timingDateTime() {
    return this[_values].timingDateTime;
  }

  set timingDateTime(value) {
    return this[_values].timingDateTime = value;
  }

  get _timingDateTime() {
    if (!isPresent(this[_values]._timingDateTime)) {
      const klass = require('./Element');
      this[_values]._timingDateTime = new klass();
    }
    return this[_values]._timingDateTime;
  }

  set _timingDateTime(value) {
    const klass = require('./Element');
    return this[_values]._timingDateTime = new klass(value);
  }

  get recordedOn() {
    return this[_values].recordedOn;
  }

  set recordedOn(value) {
    return this[_values].recordedOn = value;
  }

  get _recordedOn() {
    if (!isPresent(this[_values]._recordedOn)) {
      const klass = require('./Element');
      this[_values]._recordedOn = new klass();
    }
    return this[_values]._recordedOn;
  }

  set _recordedOn(value) {
    const klass = require('./Element');
    return this[_values]._recordedOn = new klass(value);
  }

  get source() {
    if (!isPresent(this[_values].source)) {
      const klass = require('./Reference');
      this[_values].source = new klass();
    }
    return this[_values].source;
  }

  set source(value) {
    const klass = require('./Reference');
    return this[_values].source = new klass(value);
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

  get indication() {
    if (!isPresent(this[_values].indication)) {
      const klass = require('./CodeableConcept');
      this[_values].indication = ArrayProxy(klass);
    }
    return this[_values].indication;
  }

  set indication(value) {
    const klass = require('./CodeableConcept');
    this[_values].indication = ArrayProxy(klass);
    value.forEach(entry => this[_values].indication.push(entry));
    return this[_values].indication;
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

  get note() {
    if (!isPresent(this[_values].note)) {
      const klass = require('./Annotation');
      this[_values].note = ArrayProxy(klass);
    }
    return this[_values].note;
  }

  set note(value) {
    const klass = require('./Annotation');
    this[_values].note = ArrayProxy(klass);
    value.forEach(entry => this[_values].note.push(entry));
    return this[_values].note;
  }
}

module.exports = DeviceUseStatement;
