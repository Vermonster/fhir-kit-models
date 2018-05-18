const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class DocumentManifest_Content extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DocumentManifest_Content || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get pAttachment() {
    if (!this[_values].pAttachment) {
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
    if (!this[_values].pReference) {
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
module.exports = DocumentManifest_Content;