const ArrayProxy = require('./ArrayProxy');
const { isPresent } = require('./helpers');

const _values = Symbol.for('values');
const _structure = Symbol.for('structure');

const structure = {
  properties: {
    id: {
      min: 0,
      max: '1',
      type: 'string',
    },
    _id: {
      type: 'Element',
      min: 0,
      max: '1',
    },
    extension: {
      min: 0,
      max: '*',
      // items: 'Extension',
      items: 'Element',
    },
  }
};

class Element {
  constructor(values = {}) {
    this[_structure] = Element[_structure];
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
      const klass = require(`./${this[_structure].properties._id.type}`);
      return this[_values]._id = new klass();
    }
    return this[_values]._id;
  }

  set _id(value) {
    const klass = require(`./${this[_structure].properties._id.type}`);
    return this[_values]._id = new klass(value);
  }

  get extension() {
    if (!this[_values].extension) {
      this[_values].extension = ArrayProxy(this[_structure].properties.extension.items);
    }
    return this[_values].extension;
  }

  set extension(value) {
    this[_values].extension = ArrayProxy(this[_structure].properties.extension.items);
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
};

Element[_structure] = structure;

module.exports = Element;
