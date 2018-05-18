const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class PlanDefinition_Participant extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PlanDefinition_Participant || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get type() {
    return this[_values].type;
  }
  set type(value) {
    return this[_values].type = value;
  }
  get _type() {
    if (!this[_values]._type) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }
  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }
  get role() {
    if (!this[_values].role) {
      const klass = require('./CodeableConcept');
      this[_values].role = new klass();
    }
    return this[_values].role;
  }
  set role(value) {
    const klass = require('./CodeableConcept');
    return this[_values].role = new klass(value);
  }
}
module.exports = PlanDefinition_Participant;