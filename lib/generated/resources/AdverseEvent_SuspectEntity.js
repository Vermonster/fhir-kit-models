const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class AdverseEvent_SuspectEntity extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AdverseEvent_SuspectEntity || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get instance() {
    if (!this[_values].instance) {
      const klass = require('./Reference');
      this[_values].instance = new klass();
    }
    return this[_values].instance;
  }
  set instance(value) {
    const klass = require('./Reference');
    return this[_values].instance = new klass(value);
  }
  get causality() {
    return this[_values].causality;
  }
  set causality(value) {
    return this[_values].causality = value;
  }
  get _causality() {
    if (!this[_values]._causality) {
      const klass = require('./Element');
      this[_values]._causality = new klass();
    }
    return this[_values]._causality;
  }
  set _causality(value) {
    const klass = require('./Element');
    return this[_values]._causality = new klass(value);
  }
  get causalityAssessment() {
    if (!this[_values].causalityAssessment) {
      const klass = require('./CodeableConcept');
      this[_values].causalityAssessment = new klass();
    }
    return this[_values].causalityAssessment;
  }
  set causalityAssessment(value) {
    const klass = require('./CodeableConcept');
    return this[_values].causalityAssessment = new klass(value);
  }
  get causalityProductRelatedness() {
    return this[_values].causalityProductRelatedness;
  }
  set causalityProductRelatedness(value) {
    return this[_values].causalityProductRelatedness = value;
  }
  get _causalityProductRelatedness() {
    if (!this[_values]._causalityProductRelatedness) {
      const klass = require('./Element');
      this[_values]._causalityProductRelatedness = new klass();
    }
    return this[_values]._causalityProductRelatedness;
  }
  set _causalityProductRelatedness(value) {
    const klass = require('./Element');
    return this[_values]._causalityProductRelatedness = new klass(value);
  }
  get causalityMethod() {
    if (!this[_values].causalityMethod) {
      const klass = require('./CodeableConcept');
      this[_values].causalityMethod = new klass();
    }
    return this[_values].causalityMethod;
  }
  set causalityMethod(value) {
    const klass = require('./CodeableConcept');
    return this[_values].causalityMethod = new klass(value);
  }
  get causalityAuthor() {
    if (!this[_values].causalityAuthor) {
      const klass = require('./Reference');
      this[_values].causalityAuthor = new klass();
    }
    return this[_values].causalityAuthor;
  }
  set causalityAuthor(value) {
    const klass = require('./Reference');
    return this[_values].causalityAuthor = new klass(value);
  }
  get causalityResult() {
    if (!this[_values].causalityResult) {
      const klass = require('./CodeableConcept');
      this[_values].causalityResult = new klass();
    }
    return this[_values].causalityResult;
  }
  set causalityResult(value) {
    const klass = require('./CodeableConcept');
    return this[_values].causalityResult = new klass(value);
  }
}
module.exports = AdverseEvent_SuspectEntity;