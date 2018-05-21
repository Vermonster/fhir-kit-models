const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class DataRequirement_CodeFilter extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DataRequirement_CodeFilter || values instanceof BackboneElement) {
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

  get valueSetString() {
    return this[_values].valueSetString;
  }

  set valueSetString(value) {
    return this[_values].valueSetString = value;
  }

  get _valueSetString() {
    if (!isPresent(this[_values]._valueSetString)) {
      const klass = require('./Element');
      this[_values]._valueSetString = new klass();
    }
    return this[_values]._valueSetString;
  }

  set _valueSetString(value) {
    const klass = require('./Element');
    return this[_values]._valueSetString = new klass(value);
  }

  get valueSetReference() {
    if (!isPresent(this[_values].valueSetReference)) {
      const klass = require('./Reference');
      this[_values].valueSetReference = new klass();
    }
    return this[_values].valueSetReference;
  }

  set valueSetReference(value) {
    const klass = require('./Reference');
    return this[_values].valueSetReference = new klass(value);
  }

  get valueCode() {
    return this[_values].valueCode;
  }

  set valueCode(value) {
    return this[_values].valueCode = value;
  }

  get _valueCode() {
    if (!isPresent(this[_values]._valueCode)) {
      const klass = require('./Element');
      this[_values]._valueCode = ArrayProxy(klass);
    }
    return this[_values]._valueCode;
  }

  set _valueCode(value) {
    const klass = require('./Element');
    this[_values]._valueCode = ArrayProxy(klass);
    value.forEach(entry => this[_values]._valueCode.push(entry));
    return this[_values]._valueCode;
  }

  get valueCoding() {
    if (!isPresent(this[_values].valueCoding)) {
      const klass = require('./Coding');
      this[_values].valueCoding = ArrayProxy(klass);
    }
    return this[_values].valueCoding;
  }

  set valueCoding(value) {
    const klass = require('./Coding');
    this[_values].valueCoding = ArrayProxy(klass);
    value.forEach(entry => this[_values].valueCoding.push(entry));
    return this[_values].valueCoding;
  }

  get valueCodeableConcept() {
    if (!isPresent(this[_values].valueCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].valueCodeableConcept = ArrayProxy(klass);
    }
    return this[_values].valueCodeableConcept;
  }

  set valueCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    this[_values].valueCodeableConcept = ArrayProxy(klass);
    value.forEach(entry => this[_values].valueCodeableConcept.push(entry));
    return this[_values].valueCodeableConcept;
  }
}

module.exports = DataRequirement_CodeFilter;

