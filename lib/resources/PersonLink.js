
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class PersonLink extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PersonLink ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get target() {
    if (!isPresent(this[_values].target)) {
      const klass = require('./Reference');
      this[_values].target = new klass();
    }
    return this[_values].target;
  }

  set target(value) {
    const klass = require('./Reference');
    return this[_values].target = new klass(value);
  }

  get assurance() {
    return this[_values].assurance;
  }

  set assurance(value) {
    return this[_values].assurance = value;
  }

  get _assurance() {
    if (!isPresent(this[_values]._assurance)) {
      const klass = require('./Element');
      this[_values]._assurance = new klass();
    }
    return this[_values]._assurance;
  }

  set _assurance(value) {
    const klass = require('./Element');
    return this[_values]._assurance = new klass(value);
  }
}

module.exports = PersonLink;

