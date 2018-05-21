
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class DocumentReferenceRelated extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DocumentReferenceRelated || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }

  get ref() {
    if (!isPresent(this[_values].ref)) {
      const klass = require('./Reference');
      this[_values].ref = new klass();
    }
    return this[_values].ref;
  }

  set ref(value) {
    const klass = require('./Reference');
    return this[_values].ref = new klass(value);
  }
}

module.exports = DocumentReferenceRelated;

