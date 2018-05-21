const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ExpansionProfile_Designation extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExpansionProfile_Designation || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get include() {
    if (!isPresent(this[_values].include)) {
      const klass = require('./ExpansionProfile_Include');
      this[_values].include = new klass();
    }
    return this[_values].include;
  }

  set include(value) {
    const klass = require('./ExpansionProfile_Include');
    return this[_values].include = new klass(value);
  }

  get exclude() {
    if (!isPresent(this[_values].exclude)) {
      const klass = require('./ExpansionProfile_Exclude');
      this[_values].exclude = new klass();
    }
    return this[_values].exclude;
  }

  set exclude(value) {
    const klass = require('./ExpansionProfile_Exclude');
    return this[_values].exclude = new klass(value);
  }
}

module.exports = ExpansionProfile_Designation;

