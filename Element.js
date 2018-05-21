const ArrayProxy = require('./lib/ArrayProxy');
const { isPresent, _values } = require('./lib/helpers');

class Element {
  constructor(values = {}) {
    this[_values] = {};
    if (values instanceof Element) {
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
    if (!this[_values]._id) {
      const klass = require('./Element');
      return this[_values]._id = new klass();
    }
    return this[_values]._id;
  }

  set _id(value) {
    const klass = require('./Element');
    return this[_values]._id = new klass(value);
  }

  get extension() {
    if (!this[_values].extension) {
      this[_values].extension = ArrayProxy('Element');
    }
    return this[_values].extension;
  }

  set extension(value) {
    this[_values].extension = ArrayProxy('Element');
    value.forEach(entry => this[_values].extension.push(entry));
  }

  * [Symbol.iterator]() {
    const presentEntries = Object.entries(this[_values])
          .filter(([_key, value]) => isPresent(value));
    for (const entry of presentEntries) {
      yield entry;
    }
  }

  empty() {
    for (const [_key, value] of Object.entries(this[_values])) {
      if (isPresent(value)) {
        return false;
      }
    }
    return true;
  }

  toObject() {
    const object = {};
    for (const [key, value] of Object.entries(this[_values])) {
      if (isPresent(value)) {
        if (value.toObject) {
          object[key] = value.toObject();
        } else {
          object[key] = value;
        }
      }
    }
    return object;
  }
};

module.exports = Element;
