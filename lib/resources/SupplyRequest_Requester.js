const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class SupplyRequest_Requester extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof SupplyRequest_Requester || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get agent() {
    if (!isPresent(this[_values].agent)) {
      const klass = require('./Reference');
      this[_values].agent = new klass();
    }
    return this[_values].agent;
  }

  set agent(value) {
    const klass = require('./Reference');
    return this[_values].agent = new klass(value);
  }

  get onBehalfOf() {
    if (!isPresent(this[_values].onBehalfOf)) {
      const klass = require('./Reference');
      this[_values].onBehalfOf = new klass();
    }
    return this[_values].onBehalfOf;
  }

  set onBehalfOf(value) {
    const klass = require('./Reference');
    return this[_values].onBehalfOf = new klass(value);
  }
}

module.exports = SupplyRequest_Requester;

