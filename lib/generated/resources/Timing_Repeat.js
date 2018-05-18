const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Timing_Repeat extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Timing_Repeat || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get boundsDuration() {
    if (!this[_values].boundsDuration) {
      const klass = require('./Duration');
      this[_values].boundsDuration = new klass();
    }
    return this[_values].boundsDuration;
  }
  set boundsDuration(value) {
    const klass = require('./Duration');
    return this[_values].boundsDuration = new klass(value);
  }
  get boundsRange() {
    if (!this[_values].boundsRange) {
      const klass = require('./Range');
      this[_values].boundsRange = new klass();
    }
    return this[_values].boundsRange;
  }
  set boundsRange(value) {
    const klass = require('./Range');
    return this[_values].boundsRange = new klass(value);
  }
  get boundsPeriod() {
    if (!this[_values].boundsPeriod) {
      const klass = require('./Period');
      this[_values].boundsPeriod = new klass();
    }
    return this[_values].boundsPeriod;
  }
  set boundsPeriod(value) {
    const klass = require('./Period');
    return this[_values].boundsPeriod = new klass(value);
  }
  get count() {
    return this[_values].count;
  }
  set count(value) {
    return this[_values].count = value;
  }
  get _count() {
    if (!this[_values]._count) {
      const klass = require('./Element');
      this[_values]._count = new klass();
    }
    return this[_values]._count;
  }
  set _count(value) {
    const klass = require('./Element');
    return this[_values]._count = new klass(value);
  }
  get countMax() {
    return this[_values].countMax;
  }
  set countMax(value) {
    return this[_values].countMax = value;
  }
  get _countMax() {
    if (!this[_values]._countMax) {
      const klass = require('./Element');
      this[_values]._countMax = new klass();
    }
    return this[_values]._countMax;
  }
  set _countMax(value) {
    const klass = require('./Element');
    return this[_values]._countMax = new klass(value);
  }
  get duration() {
    return this[_values].duration;
  }
  set duration(value) {
    return this[_values].duration = value;
  }
  get _duration() {
    if (!this[_values]._duration) {
      const klass = require('./Element');
      this[_values]._duration = new klass();
    }
    return this[_values]._duration;
  }
  set _duration(value) {
    const klass = require('./Element');
    return this[_values]._duration = new klass(value);
  }
  get durationMax() {
    return this[_values].durationMax;
  }
  set durationMax(value) {
    return this[_values].durationMax = value;
  }
  get _durationMax() {
    if (!this[_values]._durationMax) {
      const klass = require('./Element');
      this[_values]._durationMax = new klass();
    }
    return this[_values]._durationMax;
  }
  set _durationMax(value) {
    const klass = require('./Element');
    return this[_values]._durationMax = new klass(value);
  }
  get durationUnit() {
    return this[_values].durationUnit;
  }
  set durationUnit(value) {
    return this[_values].durationUnit = value;
  }
  get _durationUnit() {
    if (!this[_values]._durationUnit) {
      const klass = require('./Element');
      this[_values]._durationUnit = new klass();
    }
    return this[_values]._durationUnit;
  }
  set _durationUnit(value) {
    const klass = require('./Element');
    return this[_values]._durationUnit = new klass(value);
  }
  get frequency() {
    return this[_values].frequency;
  }
  set frequency(value) {
    return this[_values].frequency = value;
  }
  get _frequency() {
    if (!this[_values]._frequency) {
      const klass = require('./Element');
      this[_values]._frequency = new klass();
    }
    return this[_values]._frequency;
  }
  set _frequency(value) {
    const klass = require('./Element');
    return this[_values]._frequency = new klass(value);
  }
  get frequencyMax() {
    return this[_values].frequencyMax;
  }
  set frequencyMax(value) {
    return this[_values].frequencyMax = value;
  }
  get _frequencyMax() {
    if (!this[_values]._frequencyMax) {
      const klass = require('./Element');
      this[_values]._frequencyMax = new klass();
    }
    return this[_values]._frequencyMax;
  }
  set _frequencyMax(value) {
    const klass = require('./Element');
    return this[_values]._frequencyMax = new klass(value);
  }
  get period() {
    return this[_values].period;
  }
  set period(value) {
    return this[_values].period = value;
  }
  get _period() {
    if (!this[_values]._period) {
      const klass = require('./Element');
      this[_values]._period = new klass();
    }
    return this[_values]._period;
  }
  set _period(value) {
    const klass = require('./Element');
    return this[_values]._period = new klass(value);
  }
  get periodMax() {
    return this[_values].periodMax;
  }
  set periodMax(value) {
    return this[_values].periodMax = value;
  }
  get _periodMax() {
    if (!this[_values]._periodMax) {
      const klass = require('./Element');
      this[_values]._periodMax = new klass();
    }
    return this[_values]._periodMax;
  }
  set _periodMax(value) {
    const klass = require('./Element');
    return this[_values]._periodMax = new klass(value);
  }
  get periodUnit() {
    return this[_values].periodUnit;
  }
  set periodUnit(value) {
    return this[_values].periodUnit = value;
  }
  get _periodUnit() {
    if (!this[_values]._periodUnit) {
      const klass = require('./Element');
      this[_values]._periodUnit = new klass();
    }
    return this[_values]._periodUnit;
  }
  set _periodUnit(value) {
    const klass = require('./Element');
    return this[_values]._periodUnit = new klass(value);
  }
  get dayOfWeek() {
    return this[_values].dayOfWeek;
  }
  set dayOfWeek(value) {
    return this[_values].dayOfWeek = value;
  }
  get _dayOfWeek() {
    if (!this[_values]._dayOfWeek) {
      const klass = require('./Element');
      this[_values]._dayOfWeek = ArrayProxy(klass);
    }
    return this[_values]._dayOfWeek;
  }
  set _dayOfWeek(value) {
    const klass = require('./Element');
    this[_values]._dayOfWeek = ArrayProxy(klass);
    value.forEach(entry => this[_values]._dayOfWeek.push(entry));
    return this[_values]._dayOfWeek;
  }
  get timeOfDay() {
    return this[_values].timeOfDay;
  }
  set timeOfDay(value) {
    return this[_values].timeOfDay = value;
  }
  get _timeOfDay() {
    if (!this[_values]._timeOfDay) {
      const klass = require('./Element');
      this[_values]._timeOfDay = ArrayProxy(klass);
    }
    return this[_values]._timeOfDay;
  }
  set _timeOfDay(value) {
    const klass = require('./Element');
    this[_values]._timeOfDay = ArrayProxy(klass);
    value.forEach(entry => this[_values]._timeOfDay.push(entry));
    return this[_values]._timeOfDay;
  }
  get when() {
    return this[_values].when;
  }
  set when(value) {
    return this[_values].when = value;
  }
  get _when() {
    if (!this[_values]._when) {
      const klass = require('./Element');
      this[_values]._when = ArrayProxy(klass);
    }
    return this[_values]._when;
  }
  set _when(value) {
    const klass = require('./Element');
    this[_values]._when = ArrayProxy(klass);
    value.forEach(entry => this[_values]._when.push(entry));
    return this[_values]._when;
  }
  get offset() {
    return this[_values].offset;
  }
  set offset(value) {
    return this[_values].offset = value;
  }
  get _offset() {
    if (!this[_values]._offset) {
      const klass = require('./Element');
      this[_values]._offset = new klass();
    }
    return this[_values]._offset;
  }
  set _offset(value) {
    const klass = require('./Element');
    return this[_values]._offset = new klass(value);
  }
}
module.exports = Timing_Repeat;