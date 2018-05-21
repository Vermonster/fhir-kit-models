const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ImplementationGuide_Global extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImplementationGuide_Global || values instanceof BackboneElement) {
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

  get profile() {
    if (!isPresent(this[_values].profile)) {
      const klass = require('./Reference');
      this[_values].profile = new klass();
    }
    return this[_values].profile;
  }

  set profile(value) {
    const klass = require('./Reference');
    return this[_values].profile = new klass(value);
  }
}

module.exports = ImplementationGuide_Global;

