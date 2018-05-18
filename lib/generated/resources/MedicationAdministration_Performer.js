const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class MedicationAdministration_Performer extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationAdministration_Performer || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get actor() {
    if (!this[_values].actor) {
      const klass = require('./Reference');
      this[_values].actor = new klass();
    }
    return this[_values].actor;
  }
  set actor(value) {
    const klass = require('./Reference');
    return this[_values].actor = new klass(value);
  }
  get onBehalfOf() {
    if (!this[_values].onBehalfOf) {
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
module.exports = MedicationAdministration_Performer;