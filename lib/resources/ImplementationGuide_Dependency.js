const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ImplementationGuide_Dependency extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImplementationGuide_Dependency || values instanceof BackboneElement) {
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

  get uri() {
    return this[_values].uri;
  }

  set uri(value) {
    return this[_values].uri = value;
  }

  get _uri() {
    if (!isPresent(this[_values]._uri)) {
      const klass = require('./Element');
      this[_values]._uri = new klass();
    }
    return this[_values]._uri;
  }

  set _uri(value) {
    const klass = require('./Element');
    return this[_values]._uri = new klass(value);
  }
}

module.exports = ImplementationGuide_Dependency;

