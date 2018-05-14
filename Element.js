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

class Element {
  constructor(values = {}) {
    this.structure = Element.structure;
    this.values = {};
    if (values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  * [Symbol.iterator]() {
    const presentEntries = Object.entries(this.values)
      .filter(([_key, value]) => {
        if (value && value.empty && !value.empty()) {
          return false;
        }
        return !!value;
      });
    for (const entry of presentEntries) {
      yield entry;
    }
  }

  get id() {
    return this.values.id;
  }

  set id(value) {
    return this.values.id = value;
  }

  get _id() {
    if (!this.values._id) {
      const klass = require(`./${this.structure.properties._id.type}`);
      return this.values._id = new klass();
    }
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

  empty() {
    for (const [_key, value] of Object.entries(this.values)) {
      if (value && value.empty && !value.empty()) {
        return false;
      }
    }
    return true;
  }
};

Element.structure = structure;

module.exports = Element;
