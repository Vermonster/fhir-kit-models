
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ExplanationOfBenefit_Financial extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefit_Financial || values instanceof BackboneElement) {
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

  get allowedUnsignedInt() {
    return this[_values].allowedUnsignedInt;
  }

  set allowedUnsignedInt(value) {
    return this[_values].allowedUnsignedInt = value;
  }

  get _allowedUnsignedInt() {
    if (!isPresent(this[_values]._allowedUnsignedInt)) {
      const klass = require('./Element');
      this[_values]._allowedUnsignedInt = new klass();
    }
    return this[_values]._allowedUnsignedInt;
  }

  set _allowedUnsignedInt(value) {
    const klass = require('./Element');
    return this[_values]._allowedUnsignedInt = new klass(value);
  }

  get allowedString() {
    return this[_values].allowedString;
  }

  set allowedString(value) {
    return this[_values].allowedString = value;
  }

  get _allowedString() {
    if (!isPresent(this[_values]._allowedString)) {
      const klass = require('./Element');
      this[_values]._allowedString = new klass();
    }
    return this[_values]._allowedString;
  }

  set _allowedString(value) {
    const klass = require('./Element');
    return this[_values]._allowedString = new klass(value);
  }

  get allowedMoney() {
    if (!isPresent(this[_values].allowedMoney)) {
      const klass = require('./Money');
      this[_values].allowedMoney = new klass();
    }
    return this[_values].allowedMoney;
  }

  set allowedMoney(value) {
    const klass = require('./Money');
    return this[_values].allowedMoney = new klass(value);
  }

  get usedUnsignedInt() {
    return this[_values].usedUnsignedInt;
  }

  set usedUnsignedInt(value) {
    return this[_values].usedUnsignedInt = value;
  }

  get _usedUnsignedInt() {
    if (!isPresent(this[_values]._usedUnsignedInt)) {
      const klass = require('./Element');
      this[_values]._usedUnsignedInt = new klass();
    }
    return this[_values]._usedUnsignedInt;
  }

  set _usedUnsignedInt(value) {
    const klass = require('./Element');
    return this[_values]._usedUnsignedInt = new klass(value);
  }

  get usedMoney() {
    if (!isPresent(this[_values].usedMoney)) {
      const klass = require('./Money');
      this[_values].usedMoney = new klass();
    }
    return this[_values].usedMoney;
  }

  set usedMoney(value) {
    const klass = require('./Money');
    return this[_values].usedMoney = new klass(value);
  }
}

module.exports = ExplanationOfBenefit_Financial;

