
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class BundleSearch extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof BundleSearch || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get mode() {
    return this[_values].mode;
  }

  set mode(value) {
    return this[_values].mode = value;
  }

  get _mode() {
    if (!isPresent(this[_values]._mode)) {
      const klass = require('./Element');
      this[_values]._mode = new klass();
    }
    return this[_values]._mode;
  }

  set _mode(value) {
    const klass = require('./Element');
    return this[_values]._mode = new klass(value);
  }

  get score() {
    return this[_values].score;
  }

  set score(value) {
    return this[_values].score = value;
  }

  get _score() {
    if (!isPresent(this[_values]._score)) {
      const klass = require('./Element');
      this[_values]._score = new klass();
    }
    return this[_values]._score;
  }

  set _score(value) {
    const klass = require('./Element');
    return this[_values]._score = new klass(value);
  }
}

module.exports = BundleSearch;

