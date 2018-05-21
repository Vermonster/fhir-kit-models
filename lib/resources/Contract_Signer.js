const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Contract_Signer extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Contract_Signer || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./Coding');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./Coding');
    return this[_values].type = new klass(value);
  }

  get party() {
    if (!isPresent(this[_values].party)) {
      const klass = require('./Reference');
      this[_values].party = new klass();
    }
    return this[_values].party;
  }

  set party(value) {
    const klass = require('./Reference');
    return this[_values].party = new klass(value);
  }

  get signature() {
    if (!isPresent(this[_values].signature)) {
      const klass = require('./Signature');
      this[_values].signature = ArrayProxy(klass);
    }
    return this[_values].signature;
  }

  set signature(value) {
    const klass = require('./Signature');
    this[_values].signature = ArrayProxy(klass);
    value.forEach(entry => this[_values].signature.push(entry));
    return this[_values].signature;
  }
}

module.exports = Contract_Signer;

