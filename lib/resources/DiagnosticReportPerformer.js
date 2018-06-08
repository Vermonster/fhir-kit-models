
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class DiagnosticReportPerformer extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DiagnosticReportPerformer ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get role() {
    if (!isPresent(this[_values].role)) {
      const klass = require('./CodeableConcept');
      this[_values].role = new klass();
    }
    return this[_values].role;
  }

  set role(value) {
    const klass = require('./CodeableConcept');
    return this[_values].role = new klass(value);
  }

  get actor() {
    if (!isPresent(this[_values].actor)) {
      const klass = require('./Reference');
      this[_values].actor = new klass();
    }
    return this[_values].actor;
  }

  set actor(value) {
    const klass = require('./Reference');
    return this[_values].actor = new klass(value);
  }
}

module.exports = DiagnosticReportPerformer;

