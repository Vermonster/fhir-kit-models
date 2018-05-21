
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class DocumentReferenceContent extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DocumentReferenceContent || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get attachment() {
    if (!isPresent(this[_values].attachment)) {
      const klass = require('./Attachment');
      this[_values].attachment = new klass();
    }
    return this[_values].attachment;
  }

  set attachment(value) {
    const klass = require('./Attachment');
    return this[_values].attachment = new klass(value);
  }

  get format() {
    if (!isPresent(this[_values].format)) {
      const klass = require('./Coding');
      this[_values].format = new klass();
    }
    return this[_values].format;
  }

  set format(value) {
    const klass = require('./Coding');
    return this[_values].format = new klass(value);
  }
}

module.exports = DocumentReferenceContent;

