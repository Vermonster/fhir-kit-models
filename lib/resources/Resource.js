
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Resource extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Resource ||
      values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get id() {
    return this[_values].id;
  }

  set id(value) {
    return this[_values].id = value;
  }

  get _id() {
    if (!isPresent(this[_values]._id)) {
      const klass = require('./Element');
      this[_values]._id = new klass();
    }
    return this[_values]._id;
  }

  set _id(value) {
    const klass = require('./Element');
    return this[_values]._id = new klass(value);
  }

  get meta() {
    if (!isPresent(this[_values].meta)) {
      const klass = require('./Meta');
      this[_values].meta = new klass();
    }
    return this[_values].meta;
  }

  set meta(value) {
    const klass = require('./Meta');
    return this[_values].meta = new klass(value);
  }

  get implicitRules() {
    return this[_values].implicitRules;
  }

  set implicitRules(value) {
    return this[_values].implicitRules = value;
  }

  get _implicitRules() {
    if (!isPresent(this[_values]._implicitRules)) {
      const klass = require('./Element');
      this[_values]._implicitRules = new klass();
    }
    return this[_values]._implicitRules;
  }

  set _implicitRules(value) {
    const klass = require('./Element');
    return this[_values]._implicitRules = new klass(value);
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
}

module.exports = Resource;

