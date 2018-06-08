
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CapabilityStatementCertificate extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatementCertificate ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get blob() {
    return this[_values].blob;
  }

  set blob(value) {
    return this[_values].blob = value;
  }

  get _blob() {
    if (!isPresent(this[_values]._blob)) {
      const klass = require('./Element');
      this[_values]._blob = new klass();
    }
    return this[_values]._blob;
  }

  set _blob(value) {
    const klass = require('./Element');
    return this[_values]._blob = new klass(value);
  }
}

module.exports = CapabilityStatementCertificate;
