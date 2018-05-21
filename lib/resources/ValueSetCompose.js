const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ValueSetCompose extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ValueSetCompose || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get lockedDate() {
    return this[_values].lockedDate;
  }

  set lockedDate(value) {
    return this[_values].lockedDate = value;
  }

  get _lockedDate() {
    if (!isPresent(this[_values]._lockedDate)) {
      const klass = require('./Element');
      this[_values]._lockedDate = new klass();
    }
    return this[_values]._lockedDate;
  }

  set _lockedDate(value) {
    const klass = require('./Element');
    return this[_values]._lockedDate = new klass(value);
  }

  get inactive() {
    return this[_values].inactive;
  }

  set inactive(value) {
    return this[_values].inactive = value;
  }

  get _inactive() {
    if (!isPresent(this[_values]._inactive)) {
      const klass = require('./Element');
      this[_values]._inactive = new klass();
    }
    return this[_values]._inactive;
  }

  set _inactive(value) {
    const klass = require('./Element');
    return this[_values]._inactive = new klass(value);
  }

  get include() {
    if (!isPresent(this[_values].include)) {
      const klass = require('./ValueSetInclude');
      this[_values].include = ArrayProxy(klass);
    }
    return this[_values].include;
  }

  set include(value) {
    const klass = require('./ValueSetInclude');
    this[_values].include = ArrayProxy(klass);
    value.forEach(entry => this[_values].include.push(entry));
    return this[_values].include;
  }

  get exclude() {
    if (!isPresent(this[_values].exclude)) {
      const klass = require('./ValueSetInclude');
      this[_values].exclude = ArrayProxy(klass);
    }
    return this[_values].exclude;
  }

  set exclude(value) {
    const klass = require('./ValueSetInclude');
    this[_values].exclude = ArrayProxy(klass);
    value.forEach(entry => this[_values].exclude.push(entry));
    return this[_values].exclude;
  }
}

module.exports = ValueSetCompose;

