const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Contract_Friendly extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Contract_Friendly || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get contentAttachment() {
    if (!this[_values].contentAttachment) {
      const klass = require('./Attachment');
      this[_values].contentAttachment = new klass();
    }
    return this[_values].contentAttachment;
  }
  set contentAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].contentAttachment = new klass(value);
  }
  get contentReference() {
    if (!this[_values].contentReference) {
      const klass = require('./Reference');
      this[_values].contentReference = new klass();
    }
    return this[_values].contentReference;
  }
  set contentReference(value) {
    const klass = require('./Reference');
    return this[_values].contentReference = new klass(value);
  }
}
module.exports = Contract_Friendly;