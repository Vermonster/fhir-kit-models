const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ValueSet_Expansion extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ValueSet_Expansion || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get identifier() {
    return this[_values].identifier;
  }

  set identifier(value) {
    return this[_values].identifier = value;
  }

  get _identifier() {
    if (!isPresent(this[_values]._identifier)) {
      const klass = require('./Element');
      this[_values]._identifier = new klass();
    }
    return this[_values]._identifier;
  }

  set _identifier(value) {
    const klass = require('./Element');
    return this[_values]._identifier = new klass(value);
  }

  get timestamp() {
    return this[_values].timestamp;
  }

  set timestamp(value) {
    return this[_values].timestamp = value;
  }

  get _timestamp() {
    if (!isPresent(this[_values]._timestamp)) {
      const klass = require('./Element');
      this[_values]._timestamp = new klass();
    }
    return this[_values]._timestamp;
  }

  set _timestamp(value) {
    const klass = require('./Element');
    return this[_values]._timestamp = new klass(value);
  }

  get total() {
    return this[_values].total;
  }

  set total(value) {
    return this[_values].total = value;
  }

  get _total() {
    if (!isPresent(this[_values]._total)) {
      const klass = require('./Element');
      this[_values]._total = new klass();
    }
    return this[_values]._total;
  }

  set _total(value) {
    const klass = require('./Element');
    return this[_values]._total = new klass(value);
  }

  get offset() {
    return this[_values].offset;
  }

  set offset(value) {
    return this[_values].offset = value;
  }

  get _offset() {
    if (!isPresent(this[_values]._offset)) {
      const klass = require('./Element');
      this[_values]._offset = new klass();
    }
    return this[_values]._offset;
  }

  set _offset(value) {
    const klass = require('./Element');
    return this[_values]._offset = new klass(value);
  }

  get parameter() {
    if (!isPresent(this[_values].parameter)) {
      const klass = require('./ValueSet_Parameter');
      this[_values].parameter = ArrayProxy(klass);
    }
    return this[_values].parameter;
  }

  set parameter(value) {
    const klass = require('./ValueSet_Parameter');
    this[_values].parameter = ArrayProxy(klass);
    value.forEach(entry => this[_values].parameter.push(entry));
    return this[_values].parameter;
  }

  get contains() {
    if (!isPresent(this[_values].contains)) {
      const klass = require('./ValueSet_Contains');
      this[_values].contains = ArrayProxy(klass);
    }
    return this[_values].contains;
  }

  set contains(value) {
    const klass = require('./ValueSet_Contains');
    this[_values].contains = ArrayProxy(klass);
    value.forEach(entry => this[_values].contains.push(entry));
    return this[_values].contains;
  }
}

module.exports = ValueSet_Expansion;

