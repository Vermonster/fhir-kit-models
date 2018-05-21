
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScript_Origin extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScript_Origin || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get index() {
    return this[_values].index;
  }

  set index(value) {
    return this[_values].index = value;
  }

  get _index() {
    if (!isPresent(this[_values]._index)) {
      const klass = require('./Element');
      this[_values]._index = new klass();
    }
    return this[_values]._index;
  }

  set _index(value) {
    const klass = require('./Element');
    return this[_values]._index = new klass(value);
  }

  get profile() {
    if (!isPresent(this[_values].profile)) {
      const klass = require('./Coding');
      this[_values].profile = new klass();
    }
    return this[_values].profile;
  }

  set profile(value) {
    const klass = require('./Coding');
    return this[_values].profile = new klass(value);
  }
}

module.exports = TestScript_Origin;

