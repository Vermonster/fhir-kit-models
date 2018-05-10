const defaultValue = require('./default-value');
const ArrayProxy = require('./ArrayProxy');

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

module.exports = class Element {
  constructor(values = {}) {
    this.structure = structure;
    this.values = {};
    Object.entries(values).forEach(property => this[property[0]] = property[1]);
  }

  * [Symbol.iterator]() {
    for (const value of this.values) {
      yield value;
    }
  }

  get id() {
    return this.values.id;
  }

  set id(value) {
    return this.values.id = value;
  }

  get _id() {
    return this.values._id;
  }

  set _id(value) {
    const klass = require(`./${this.structure.properties._id.type}`);
    return this.values._id = new klass(value);
  }

  get extension() {
    if (!this.values.extension) {
      this.values.extension = ArrayProxy(this.structure.properties.extension.items);
    }
    return this.values.extension;
  }

  set extension(value) {
    this.values.extension = ArrayProxy(this.structure.properties.extension.items);
    value.forEach(entry => this.values.extension.push(entry));
  }
};
