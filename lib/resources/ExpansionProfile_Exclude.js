const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ExpansionProfile_Exclude extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExpansionProfile_Exclude || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get designation() {
    if (!isPresent(this[_values].designation)) {
      const klass = require('./ExpansionProfile_Designation2');
      this[_values].designation = ArrayProxy(klass);
    }
    return this[_values].designation;
  }

  set designation(value) {
    const klass = require('./ExpansionProfile_Designation2');
    this[_values].designation = ArrayProxy(klass);
    value.forEach(entry => this[_values].designation.push(entry));
    return this[_values].designation;
  }
}

module.exports = ExpansionProfile_Exclude;

