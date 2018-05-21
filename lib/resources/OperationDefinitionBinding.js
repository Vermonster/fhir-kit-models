
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class OperationDefinitionBinding extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof OperationDefinitionBinding || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get strength() {
    return this[_values].strength;
  }

  set strength(value) {
    return this[_values].strength = value;
  }

  get _strength() {
    if (!isPresent(this[_values]._strength)) {
      const klass = require('./Element');
      this[_values]._strength = new klass();
    }
    return this[_values]._strength;
  }

  set _strength(value) {
    const klass = require('./Element');
    return this[_values]._strength = new klass(value);
  }

  get valueSetUri() {
    return this[_values].valueSetUri;
  }

  set valueSetUri(value) {
    return this[_values].valueSetUri = value;
  }

  get _valueSetUri() {
    if (!isPresent(this[_values]._valueSetUri)) {
      const klass = require('./Element');
      this[_values]._valueSetUri = new klass();
    }
    return this[_values]._valueSetUri;
  }

  set _valueSetUri(value) {
    const klass = require('./Element');
    return this[_values]._valueSetUri = new klass(value);
  }

  get valueSetReference() {
    if (!isPresent(this[_values].valueSetReference)) {
      const klass = require('./Reference');
      this[_values].valueSetReference = new klass();
    }
    return this[_values].valueSetReference;
  }

  set valueSetReference(value) {
    const klass = require('./Reference');
    return this[_values].valueSetReference = new klass(value);
  }
}

module.exports = OperationDefinitionBinding;

