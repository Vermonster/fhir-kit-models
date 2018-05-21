const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class PractitionerRole_NotAvailable extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PractitionerRole_NotAvailable || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get during() {
    if (!isPresent(this[_values].during)) {
      const klass = require('./Period');
      this[_values].during = new klass();
    }
    return this[_values].during;
  }

  set during(value) {
    const klass = require('./Period');
    return this[_values].during = new klass(value);
  }
}

module.exports = PractitionerRole_NotAvailable;

