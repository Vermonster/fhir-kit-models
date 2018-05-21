
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ProcessRequest_Item extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ProcessRequest_Item || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get sequenceLinkId() {
    return this[_values].sequenceLinkId;
  }

  set sequenceLinkId(value) {
    return this[_values].sequenceLinkId = value;
  }

  get _sequenceLinkId() {
    if (!isPresent(this[_values]._sequenceLinkId)) {
      const klass = require('./Element');
      this[_values]._sequenceLinkId = new klass();
    }
    return this[_values]._sequenceLinkId;
  }

  set _sequenceLinkId(value) {
    const klass = require('./Element');
    return this[_values]._sequenceLinkId = new klass(value);
  }
}

module.exports = ProcessRequest_Item;

