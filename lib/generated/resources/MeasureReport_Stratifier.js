const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class MeasureReport_Stratifier extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MeasureReport_Stratifier || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get identifier() {
    if (!this[_values].identifier) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }
  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }
  get stratum() {
    if (!this[_values].stratum) {
      const klass = require('./MeasureReport_Stratum');
      this[_values].stratum = ArrayProxy(klass);
    }
    return this[_values].stratum;
  }
  set stratum(value) {
    const klass = require('./MeasureReport_Stratum');
    this[_values].stratum = ArrayProxy(klass);
    value.forEach(entry => this[_values].stratum.push(entry));
    return this[_values].stratum;
  }
}
module.exports = MeasureReport_Stratifier;