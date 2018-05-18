const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class ImmunizationRecommendation extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImmunizationRecommendation || values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get resourceType() {
    return this[_values].resourceType;
  }
  set resourceType(value) {
    return this[_values].resourceType = value;
  }
  get identifier() {
    if (!this[_values].identifier) {
      const klass = require('./Identifier');
      this[_values].identifier = ArrayProxy(klass);
    }
    return this[_values].identifier;
  }
  set identifier(value) {
    const klass = require('./Identifier');
    this[_values].identifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].identifier.push(entry));
    return this[_values].identifier;
  }
  get patient() {
    if (!this[_values].patient) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }
  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }
  get recommendation() {
    if (!this[_values].recommendation) {
      const klass = require('./ImmunizationRecommendation_Recommendation');
      this[_values].recommendation = ArrayProxy(klass);
    }
    return this[_values].recommendation;
  }
  set recommendation(value) {
    const klass = require('./ImmunizationRecommendation_Recommendation');
    this[_values].recommendation = ArrayProxy(klass);
    value.forEach(entry => this[_values].recommendation.push(entry));
    return this[_values].recommendation;
  }
}
module.exports = ImmunizationRecommendation;