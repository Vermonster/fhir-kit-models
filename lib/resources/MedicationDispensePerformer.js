
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MedicationDispensePerformer extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationDispensePerformer ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get onBehalfOf() {
    if (!isPresent(this[_values].onBehalfOf)) {
      const klass = require('./Reference');
      this[_values].onBehalfOf = new klass();
    }
    return this[_values].onBehalfOf;
  }

  set onBehalfOf(value) {
    const klass = require('./Reference');
    return this[_values].onBehalfOf = new klass(value);
  }
}

module.exports = MedicationDispensePerformer;
