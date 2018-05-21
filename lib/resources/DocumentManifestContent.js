
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class DocumentManifestContent extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DocumentManifestContent || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get pAttachment() {
    if (!isPresent(this[_values].pAttachment)) {
      const klass = require('./Attachment');
      this[_values].pAttachment = new klass();
    }
    return this[_values].pAttachment;
  }

  set pAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].pAttachment = new klass(value);
  }

  get pReference() {
    if (!isPresent(this[_values].pReference)) {
      const klass = require('./Reference');
      this[_values].pReference = new klass();
    }
    return this[_values].pReference;
  }

  set pReference(value) {
    const klass = require('./Reference');
    return this[_values].pReference = new klass(value);
  }
}

module.exports = DocumentManifestContent;

