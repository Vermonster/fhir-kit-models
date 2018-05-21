const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class EligibilityResponse_Insurance extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof EligibilityResponse_Insurance || values instanceof BackboneElement) {
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

  get contract() {
    if (!isPresent(this[_values].contract)) {
      const klass = require('./Reference');
      this[_values].contract = new klass();
    }
    return this[_values].contract;
  }

  set contract(value) {
    const klass = require('./Reference');
    return this[_values].contract = new klass(value);
  }

  get benefitBalance() {
    if (!isPresent(this[_values].benefitBalance)) {
      const klass = require('./EligibilityResponse_BenefitBalance');
      this[_values].benefitBalance = ArrayProxy(klass);
    }
    return this[_values].benefitBalance;
  }

  set benefitBalance(value) {
    const klass = require('./EligibilityResponse_BenefitBalance');
    this[_values].benefitBalance = ArrayProxy(klass);
    value.forEach(entry => this[_values].benefitBalance.push(entry));
    return this[_values].benefitBalance;
  }
}

module.exports = EligibilityResponse_Insurance;

