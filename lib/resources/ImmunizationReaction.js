
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ImmunizationReaction extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImmunizationReaction || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get date() {
    return this[_values].date;
  }

  set date(value) {
    return this[_values].date = value;
  }

  get _date() {
    if (!isPresent(this[_values]._date)) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }

  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }

  get detail() {
    if (!isPresent(this[_values].detail)) {
      const klass = require('./Reference');
      this[_values].detail = new klass();
    }
    return this[_values].detail;
  }

  set detail(value) {
    const klass = require('./Reference');
    return this[_values].detail = new klass(value);
  }

  get reported() {
    return this[_values].reported;
  }

  set reported(value) {
    return this[_values].reported = value;
  }

  get _reported() {
    if (!isPresent(this[_values]._reported)) {
      const klass = require('./Element');
      this[_values]._reported = new klass();
    }
    return this[_values]._reported;
  }

  set _reported(value) {
    const klass = require('./Element');
    return this[_values]._reported = new klass(value);
  }
}

module.exports = ImmunizationReaction;

