
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ClaimPayee extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'ClaimPayee';
    if (values instanceof ClaimPayee ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }

  get resourceType() {
    if (!isPresent(this[_values].resourceType)) {
      const klass = require('./Coding');
      this[_values].resourceType = new klass();
    }
    return this[_values].resourceType;
  }

  set resourceType(value) {
    const klass = require('./Coding');
    return this[_values].resourceType = new klass(value);
  }

  get party() {
    if (!isPresent(this[_values].party)) {
      const klass = require('./Reference');
      this[_values].party = new klass();
    }
    return this[_values].party;
  }

  set party(value) {
    const klass = require('./Reference');
    return this[_values].party = new klass(value);
  }
}

module.exports = ClaimPayee;
