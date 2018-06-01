
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ContractLegal extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ContractLegal ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get contentAttachment() {
    if (!isPresent(this[_values].contentAttachment)) {
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
    if (!isPresent(this[_values].contentReference)) {
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

module.exports = ContractLegal;
