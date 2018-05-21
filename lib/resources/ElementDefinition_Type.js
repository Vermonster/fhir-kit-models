const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ElementDefinition_Type extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ElementDefinition_Type || values instanceof BackboneElement) {
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

  get profile() {
    return this[_values].profile;
  }

  set profile(value) {
    return this[_values].profile = value;
  }

  get _profile() {
    if (!isPresent(this[_values]._profile)) {
      const klass = require('./Element');
      this[_values]._profile = new klass();
    }
    return this[_values]._profile;
  }

  set _profile(value) {
    const klass = require('./Element');
    return this[_values]._profile = new klass(value);
  }

  get targetProfile() {
    return this[_values].targetProfile;
  }

  set targetProfile(value) {
    return this[_values].targetProfile = value;
  }

  get _targetProfile() {
    if (!isPresent(this[_values]._targetProfile)) {
      const klass = require('./Element');
      this[_values]._targetProfile = new klass();
    }
    return this[_values]._targetProfile;
  }

  set _targetProfile(value) {
    const klass = require('./Element');
    return this[_values]._targetProfile = new klass(value);
  }

  get aggregation() {
    return this[_values].aggregation;
  }

  set aggregation(value) {
    return this[_values].aggregation = value;
  }

  get _aggregation() {
    if (!isPresent(this[_values]._aggregation)) {
      const klass = require('./Element');
      this[_values]._aggregation = ArrayProxy(klass);
    }
    return this[_values]._aggregation;
  }

  set _aggregation(value) {
    const klass = require('./Element');
    this[_values]._aggregation = ArrayProxy(klass);
    value.forEach(entry => this[_values]._aggregation.push(entry));
    return this[_values]._aggregation;
  }

  get versioning() {
    return this[_values].versioning;
  }

  set versioning(value) {
    return this[_values].versioning = value;
  }

  get _versioning() {
    if (!isPresent(this[_values]._versioning)) {
      const klass = require('./Element');
      this[_values]._versioning = new klass();
    }
    return this[_values]._versioning;
  }

  set _versioning(value) {
    const klass = require('./Element');
    return this[_values]._versioning = new klass(value);
  }
}

module.exports = ElementDefinition_Type;

