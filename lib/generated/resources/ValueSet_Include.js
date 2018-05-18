const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ValueSet_Include extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ValueSet_Include || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get system() {
    return this[_values].system;
  }
  set system(value) {
    return this[_values].system = value;
  }
  get _system() {
    if (!this[_values]._system) {
      const klass = require('./Element');
      this[_values]._system = new klass();
    }
    return this[_values]._system;
  }
  set _system(value) {
    const klass = require('./Element');
    return this[_values]._system = new klass(value);
  }
  get version() {
    return this[_values].version;
  }
  set version(value) {
    return this[_values].version = value;
  }
  get _version() {
    if (!this[_values]._version) {
      const klass = require('./Element');
      this[_values]._version = new klass();
    }
    return this[_values]._version;
  }
  set _version(value) {
    const klass = require('./Element');
    return this[_values]._version = new klass(value);
  }
  get concept() {
    if (!this[_values].concept) {
      const klass = require('./ValueSet_Concept');
      this[_values].concept = ArrayProxy(klass);
    }
    return this[_values].concept;
  }
  set concept(value) {
    const klass = require('./ValueSet_Concept');
    this[_values].concept = ArrayProxy(klass);
    value.forEach(entry => this[_values].concept.push(entry));
    return this[_values].concept;
  }
  get filter() {
    if (!this[_values].filter) {
      const klass = require('./ValueSet_Filter');
      this[_values].filter = ArrayProxy(klass);
    }
    return this[_values].filter;
  }
  set filter(value) {
    const klass = require('./ValueSet_Filter');
    this[_values].filter = ArrayProxy(klass);
    value.forEach(entry => this[_values].filter.push(entry));
    return this[_values].filter;
  }
  get valueSet() {
    return this[_values].valueSet;
  }
  set valueSet(value) {
    return this[_values].valueSet = value;
  }
  get _valueSet() {
    if (!this[_values]._valueSet) {
      const klass = require('./Element');
      this[_values]._valueSet = ArrayProxy(klass);
    }
    return this[_values]._valueSet;
  }
  set _valueSet(value) {
    const klass = require('./Element');
    this[_values]._valueSet = ArrayProxy(klass);
    value.forEach(entry => this[_values]._valueSet.push(entry));
    return this[_values]._valueSet;
  }
}
module.exports = ValueSet_Include;