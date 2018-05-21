const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Composition_RelatesTo extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Composition_RelatesTo || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get code() {
    return this[_values].code;
  }

  set code(value) {
    return this[_values].code = value;
  }

  get _code() {
    if (!isPresent(this[_values]._code)) {
      const klass = require('./Element');
      this[_values]._code = new klass();
    }
    return this[_values]._code;
  }

  set _code(value) {
    const klass = require('./Element');
    return this[_values]._code = new klass(value);
  }

  get targetIdentifier() {
    if (!isPresent(this[_values].targetIdentifier)) {
      const klass = require('./Identifier');
      this[_values].targetIdentifier = new klass();
    }
    return this[_values].targetIdentifier;
  }

  set targetIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].targetIdentifier = new klass(value);
  }

  get targetReference() {
    if (!isPresent(this[_values].targetReference)) {
      const klass = require('./Reference');
      this[_values].targetReference = new klass();
    }
    return this[_values].targetReference;
  }

  set targetReference(value) {
    const klass = require('./Reference');
    return this[_values].targetReference = new klass(value);
  }
}

module.exports = Composition_RelatesTo;

