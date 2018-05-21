const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class EligibilityResponseBenefitBalance extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof EligibilityResponseBenefitBalance || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
  }

  get subCategory() {
    if (!isPresent(this[_values].subCategory)) {
      const klass = require('./CodeableConcept');
      this[_values].subCategory = new klass();
    }
    return this[_values].subCategory;
  }

  set subCategory(value) {
    const klass = require('./CodeableConcept');
    return this[_values].subCategory = new klass(value);
  }

  get excluded() {
    return this[_values].excluded;
  }

  set excluded(value) {
    return this[_values].excluded = value;
  }

  get _excluded() {
    if (!isPresent(this[_values]._excluded)) {
      const klass = require('./Element');
      this[_values]._excluded = new klass();
    }
    return this[_values]._excluded;
  }

  set _excluded(value) {
    const klass = require('./Element');
    return this[_values]._excluded = new klass(value);
  }

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get network() {
    if (!isPresent(this[_values].network)) {
      const klass = require('./CodeableConcept');
      this[_values].network = new klass();
    }
    return this[_values].network;
  }

  set network(value) {
    const klass = require('./CodeableConcept');
    return this[_values].network = new klass(value);
  }

  get unit() {
    if (!isPresent(this[_values].unit)) {
      const klass = require('./CodeableConcept');
      this[_values].unit = new klass();
    }
    return this[_values].unit;
  }

  set unit(value) {
    const klass = require('./CodeableConcept');
    return this[_values].unit = new klass(value);
  }

  get term() {
    if (!isPresent(this[_values].term)) {
      const klass = require('./CodeableConcept');
      this[_values].term = new klass();
    }
    return this[_values].term;
  }

  set term(value) {
    const klass = require('./CodeableConcept');
    return this[_values].term = new klass(value);
  }

  get financial() {
    if (!isPresent(this[_values].financial)) {
      const klass = require('./EligibilityResponseFinancial');
      this[_values].financial = ArrayProxy(klass);
    }
    return this[_values].financial;
  }

  set financial(value) {
    const klass = require('./EligibilityResponseFinancial');
    this[_values].financial = ArrayProxy(klass);
    value.forEach(entry => this[_values].financial.push(entry));
    return this[_values].financial;
  }
}

module.exports = EligibilityResponseBenefitBalance;

