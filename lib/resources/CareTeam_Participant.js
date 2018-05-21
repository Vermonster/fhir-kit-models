
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CareTeam_Participant extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CareTeam_Participant || values instanceof BackboneElement) {
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

  get member() {
    if (!isPresent(this[_values].member)) {
      const klass = require('./Reference');
      this[_values].member = new klass();
    }
    return this[_values].member;
  }

  set member(value) {
    const klass = require('./Reference');
    return this[_values].member = new klass(value);
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

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }
}

module.exports = CareTeam_Participant;

