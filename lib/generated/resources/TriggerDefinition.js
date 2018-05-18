const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const Element = require('./Element');
class TriggerDefinition extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TriggerDefinition || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get type() {
    return this[_values].type;
  }
  set type(value) {
    return this[_values].type = value;
  }
  get _type() {
    if (!this[_values]._type) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }
  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }
  get eventName() {
    return this[_values].eventName;
  }
  set eventName(value) {
    return this[_values].eventName = value;
  }
  get _eventName() {
    if (!this[_values]._eventName) {
      const klass = require('./Element');
      this[_values]._eventName = new klass();
    }
    return this[_values]._eventName;
  }
  set _eventName(value) {
    const klass = require('./Element');
    return this[_values]._eventName = new klass(value);
  }
  get eventTimingTiming() {
    if (!this[_values].eventTimingTiming) {
      const klass = require('./Timing');
      this[_values].eventTimingTiming = new klass();
    }
    return this[_values].eventTimingTiming;
  }
  set eventTimingTiming(value) {
    const klass = require('./Timing');
    return this[_values].eventTimingTiming = new klass(value);
  }
  get eventTimingReference() {
    if (!this[_values].eventTimingReference) {
      const klass = require('./Reference');
      this[_values].eventTimingReference = new klass();
    }
    return this[_values].eventTimingReference;
  }
  set eventTimingReference(value) {
    const klass = require('./Reference');
    return this[_values].eventTimingReference = new klass(value);
  }
  get eventTimingDate() {
    return this[_values].eventTimingDate;
  }
  set eventTimingDate(value) {
    return this[_values].eventTimingDate = value;
  }
  get _eventTimingDate() {
    if (!this[_values]._eventTimingDate) {
      const klass = require('./Element');
      this[_values]._eventTimingDate = new klass();
    }
    return this[_values]._eventTimingDate;
  }
  set _eventTimingDate(value) {
    const klass = require('./Element');
    return this[_values]._eventTimingDate = new klass(value);
  }
  get eventTimingDateTime() {
    return this[_values].eventTimingDateTime;
  }
  set eventTimingDateTime(value) {
    return this[_values].eventTimingDateTime = value;
  }
  get _eventTimingDateTime() {
    if (!this[_values]._eventTimingDateTime) {
      const klass = require('./Element');
      this[_values]._eventTimingDateTime = new klass();
    }
    return this[_values]._eventTimingDateTime;
  }
  set _eventTimingDateTime(value) {
    const klass = require('./Element');
    return this[_values]._eventTimingDateTime = new klass(value);
  }
  get eventData() {
    if (!this[_values].eventData) {
      const klass = require('./DataRequirement');
      this[_values].eventData = new klass();
    }
    return this[_values].eventData;
  }
  set eventData(value) {
    const klass = require('./DataRequirement');
    return this[_values].eventData = new klass(value);
  }
}
module.exports = TriggerDefinition;