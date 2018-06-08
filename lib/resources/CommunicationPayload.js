
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CommunicationPayload extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CommunicationPayload ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get contentString() {
    return this[_values].contentString;
  }

  set contentString(value) {
    return this[_values].contentString = value;
  }

  get _contentString() {
    if (!isPresent(this[_values]._contentString)) {
      const klass = require('./Element');
      this[_values]._contentString = new klass();
    }
    return this[_values]._contentString;
  }

  set _contentString(value) {
    const klass = require('./Element');
    return this[_values]._contentString = new klass(value);
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

module.exports = CommunicationPayload;

