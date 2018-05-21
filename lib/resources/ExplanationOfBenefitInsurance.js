const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ExplanationOfBenefitInsurance extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefitInsurance ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get coverage() {
    if (!isPresent(this[_values].coverage)) {
      const klass = require('./Reference');
      this[_values].coverage = new klass();
    }
    return this[_values].coverage;
  }

  set coverage(value) {
    const klass = require('./Reference');
    return this[_values].coverage = new klass(value);
  }

  get preAuthRef() {
    return this[_values].preAuthRef;
  }

  set preAuthRef(value) {
    return this[_values].preAuthRef = value;
  }

  get _preAuthRef() {
    if (!isPresent(this[_values]._preAuthRef)) {
      const klass = require('./Element');
      this[_values]._preAuthRef = ArrayProxy(klass);
    }
    return this[_values]._preAuthRef;
  }

  set _preAuthRef(value) {
    const klass = require('./Element');
    this[_values]._preAuthRef = ArrayProxy(klass);
    value.forEach(entry => this[_values]._preAuthRef.push(entry));
    return this[_values]._preAuthRef;
  }
}

module.exports = ExplanationOfBenefitInsurance;

