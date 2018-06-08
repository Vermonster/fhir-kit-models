
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class DataRequirementDateFilter extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DataRequirementDateFilter ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get path() {
    return this[_values].path;
  }

  set path(value) {
    return this[_values].path = value;
  }

  get _path() {
    if (!isPresent(this[_values]._path)) {
      const klass = require('./Element');
      this[_values]._path = new klass();
    }
    return this[_values]._path;
  }

  set _path(value) {
    const klass = require('./Element');
    return this[_values]._path = new klass(value);
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

  get valueDuration() {
    if (!isPresent(this[_values].valueDuration)) {
      const klass = require('./Duration');
      this[_values].valueDuration = new klass();
    }
    return this[_values].valueDuration;
  }

  set valueDuration(value) {
    const klass = require('./Duration');
    return this[_values].valueDuration = new klass(value);
  }
}

module.exports = DataRequirementDateFilter;

