const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class DataRequirement extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DataRequirement || values instanceof Element) {
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
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }

  get profile() {
    return this[_values].profile;
  }

  set profile(value) {
    return this[_values].profile = value;
  }

  get _profile() {
    if (!isPresent(this[_values]._profile)) {
      const klass = require('./Element');
      this[_values]._profile = ArrayProxy(klass);
    }
    return this[_values]._profile;
  }

  set _profile(value) {
    const klass = require('./Element');
    this[_values]._profile = ArrayProxy(klass);
    value.forEach(entry => this[_values]._profile.push(entry));
    return this[_values]._profile;
  }

  get mustSupport() {
    return this[_values].mustSupport;
  }

  set mustSupport(value) {
    return this[_values].mustSupport = value;
  }

  get _mustSupport() {
    if (!isPresent(this[_values]._mustSupport)) {
      const klass = require('./Element');
      this[_values]._mustSupport = ArrayProxy(klass);
    }
    return this[_values]._mustSupport;
  }

  set _mustSupport(value) {
    const klass = require('./Element');
    this[_values]._mustSupport = ArrayProxy(klass);
    value.forEach(entry => this[_values]._mustSupport.push(entry));
    return this[_values]._mustSupport;
  }

  get codeFilter() {
    if (!isPresent(this[_values].codeFilter)) {
      const klass = require('./DataRequirement_CodeFilter');
      this[_values].codeFilter = ArrayProxy(klass);
    }
    return this[_values].codeFilter;
  }

  set codeFilter(value) {
    const klass = require('./DataRequirement_CodeFilter');
    this[_values].codeFilter = ArrayProxy(klass);
    value.forEach(entry => this[_values].codeFilter.push(entry));
    return this[_values].codeFilter;
  }

  get dateFilter() {
    if (!isPresent(this[_values].dateFilter)) {
      const klass = require('./DataRequirement_DateFilter');
      this[_values].dateFilter = ArrayProxy(klass);
    }
    return this[_values].dateFilter;
  }

  set dateFilter(value) {
    const klass = require('./DataRequirement_DateFilter');
    this[_values].dateFilter = ArrayProxy(klass);
    value.forEach(entry => this[_values].dateFilter.push(entry));
    return this[_values].dateFilter;
  }
}

module.exports = DataRequirement;

