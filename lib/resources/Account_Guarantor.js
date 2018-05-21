
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Account_Guarantor extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Account_Guarantor || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get onHold() {
    return this[_values].onHold;
  }

  set onHold(value) {
    return this[_values].onHold = value;
  }

  get _onHold() {
    if (!isPresent(this[_values]._onHold)) {
      const klass = require('./Element');
      this[_values]._onHold = new klass();
    }
    return this[_values]._onHold;
  }

  set _onHold(value) {
    const klass = require('./Element');
    return this[_values]._onHold = new klass(value);
  }

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }
}

module.exports = Account_Guarantor;

