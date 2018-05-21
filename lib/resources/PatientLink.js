
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class PatientLink extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PatientLink || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get other() {
    if (!isPresent(this[_values].other)) {
      const klass = require('./Reference');
      this[_values].other = new klass();
    }
    return this[_values].other;
  }

  set other(value) {
    const klass = require('./Reference');
    return this[_values].other = new klass(value);
  }

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }
}

module.exports = PatientLink;

