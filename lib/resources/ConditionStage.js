const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ConditionStage extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ConditionStage ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get summary() {
    if (!isPresent(this[_values].summary)) {
      const klass = require('./CodeableConcept');
      this[_values].summary = new klass();
    }
    return this[_values].summary;
  }

  set summary(value) {
    const klass = require('./CodeableConcept');
    return this[_values].summary = new klass(value);
  }

  get assessment() {
    if (!isPresent(this[_values].assessment)) {
      const klass = require('./Reference');
      this[_values].assessment = ArrayProxy(klass);
    }
    return this[_values].assessment;
  }

  set assessment(value) {
    const klass = require('./Reference');
    this[_values].assessment = ArrayProxy(klass);
    value.forEach(entry => this[_values].assessment.push(entry));
    return this[_values].assessment;
  }
}

module.exports = ConditionStage;

