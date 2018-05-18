const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class FamilyMemberHistory_Condition extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof FamilyMemberHistory_Condition || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get code() {
    if (!this[_values].code) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }
  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
  }
  get outcome() {
    if (!this[_values].outcome) {
      const klass = require('./CodeableConcept');
      this[_values].outcome = new klass();
    }
    return this[_values].outcome;
  }
  set outcome(value) {
    const klass = require('./CodeableConcept');
    return this[_values].outcome = new klass(value);
  }
  get onsetAge() {
    if (!this[_values].onsetAge) {
      const klass = require('./Age');
      this[_values].onsetAge = new klass();
    }
    return this[_values].onsetAge;
  }
  set onsetAge(value) {
    const klass = require('./Age');
    return this[_values].onsetAge = new klass(value);
  }
  get onsetRange() {
    if (!this[_values].onsetRange) {
      const klass = require('./Range');
      this[_values].onsetRange = new klass();
    }
    return this[_values].onsetRange;
  }
  set onsetRange(value) {
    const klass = require('./Range');
    return this[_values].onsetRange = new klass(value);
  }
  get onsetPeriod() {
    if (!this[_values].onsetPeriod) {
      const klass = require('./Period');
      this[_values].onsetPeriod = new klass();
    }
    return this[_values].onsetPeriod;
  }
  set onsetPeriod(value) {
    const klass = require('./Period');
    return this[_values].onsetPeriod = new klass(value);
  }
  get onsetString() {
    return this[_values].onsetString;
  }
  set onsetString(value) {
    return this[_values].onsetString = value;
  }
  get _onsetString() {
    if (!this[_values]._onsetString) {
      const klass = require('./Element');
      this[_values]._onsetString = new klass();
    }
    return this[_values]._onsetString;
  }
  set _onsetString(value) {
    const klass = require('./Element');
    return this[_values]._onsetString = new klass(value);
  }
  get note() {
    if (!this[_values].note) {
      const klass = require('./Annotation');
      this[_values].note = ArrayProxy(klass);
    }
    return this[_values].note;
  }
  set note(value) {
    const klass = require('./Annotation');
    this[_values].note = ArrayProxy(klass);
    value.forEach(entry => this[_values].note.push(entry));
    return this[_values].note;
  }
}
module.exports = FamilyMemberHistory_Condition;