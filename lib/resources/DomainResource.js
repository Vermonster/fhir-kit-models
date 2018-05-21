const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const Resource = require('./Resource');

class DomainResource extends Resource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DomainResource || values instanceof Resource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get text() {
    if (!isPresent(this[_values].text)) {
      const klass = require('./Narrative');
      this[_values].text = new klass();
    }
    return this[_values].text;
  }

  set text(value) {
    const klass = require('./Narrative');
    return this[_values].text = new klass(value);
  }

  get contained() {
    if (!isPresent(this[_values].contained)) {
      const klass = require('./ResourceList');
      this[_values].contained = ArrayProxy(klass);
    }
    return this[_values].contained;
  }

  set contained(value) {
    const klass = require('./ResourceList');
    this[_values].contained = ArrayProxy(klass);
    value.forEach(entry => this[_values].contained.push(entry));
    return this[_values].contained;
  }

  get extension() {
    if (!isPresent(this[_values].extension)) {
      const klass = require('./Extension');
      this[_values].extension = ArrayProxy(klass);
    }
    return this[_values].extension;
  }

  set extension(value) {
    const klass = require('./Extension');
    this[_values].extension = ArrayProxy(klass);
    value.forEach(entry => this[_values].extension.push(entry));
    return this[_values].extension;
  }

  get modifierExtension() {
    if (!isPresent(this[_values].modifierExtension)) {
      const klass = require('./Extension');
      this[_values].modifierExtension = ArrayProxy(klass);
    }
    return this[_values].modifierExtension;
  }

  set modifierExtension(value) {
    const klass = require('./Extension');
    this[_values].modifierExtension = ArrayProxy(klass);
    value.forEach(entry => this[_values].modifierExtension.push(entry));
    return this[_values].modifierExtension;
  }
}

module.exports = DomainResource;

