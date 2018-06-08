
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ExpansionProfileDesignation2 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExpansionProfileDesignation2 ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get language() {
    return this[_values].language;
  }

  set language(value) {
    return this[_values].language = value;
  }

  get _language() {
    if (!isPresent(this[_values]._language)) {
      const klass = require('./Element');
      this[_values]._language = new klass();
    }
    return this[_values]._language;
  }

  set _language(value) {
    const klass = require('./Element');
    return this[_values]._language = new klass(value);
  }

  get use() {
    if (!isPresent(this[_values].use)) {
      const klass = require('./Coding');
      this[_values].use = new klass();
    }
    return this[_values].use;
  }

  set use(value) {
    const klass = require('./Coding');
    return this[_values].use = new klass(value);
  }
}

module.exports = ExpansionProfileDesignation2;

