const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class GuidanceResponse extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'GuidanceResponse';
    if (values instanceof GuidanceResponse ||
      values instanceof DomainResource) {
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

  get requestId() {
    return this[_values].requestId;
  }

  set requestId(value) {
    return this[_values].requestId = value;
  }

  get _requestId() {
    if (!isPresent(this[_values]._requestId)) {
      const klass = require('./Element');
      this[_values]._requestId = new klass();
    }
    return this[_values]._requestId;
  }

  set _requestId(value) {
    const klass = require('./Element');
    return this[_values]._requestId = new klass(value);
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }

  get module() {
    if (!isPresent(this[_values].module)) {
      const klass = require('./Reference');
      this[_values].module = new klass();
    }
    return this[_values].module;
  }

  set module(value) {
    const klass = require('./Reference');
    return this[_values].module = new klass(value);
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = new klass();
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    return this[_values].subject = new klass(value);
  }

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
  }

  get occurrenceDateTime() {
    return this[_values].occurrenceDateTime;
  }

  set occurrenceDateTime(value) {
    return this[_values].occurrenceDateTime = value;
  }

  get _occurrenceDateTime() {
    if (!isPresent(this[_values]._occurrenceDateTime)) {
      const klass = require('./Element');
      this[_values]._occurrenceDateTime = new klass();
    }
    return this[_values]._occurrenceDateTime;
  }

  set _occurrenceDateTime(value) {
    const klass = require('./Element');
    return this[_values]._occurrenceDateTime = new klass(value);
  }

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./Reference');
      this[_values].performer = new klass();
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./Reference');
    return this[_values].performer = new klass(value);
  }

  get reasonCodeableConcept() {
    if (!isPresent(this[_values].reasonCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCodeableConcept = new klass();
    }
    return this[_values].reasonCodeableConcept;
  }

  set reasonCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reasonCodeableConcept = new klass(value);
  }

  get reasonReference() {
    if (!isPresent(this[_values].reasonReference)) {
      const klass = require('./Reference');
      this[_values].reasonReference = new klass();
    }
    return this[_values].reasonReference;
  }

  set reasonReference(value) {
    const klass = require('./Reference');
    return this[_values].reasonReference = new klass(value);
  }

  get note() {
    if (!isPresent(this[_values].note)) {
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

  get evaluationMessage() {
    if (!isPresent(this[_values].evaluationMessage)) {
      const klass = require('./Reference');
      this[_values].evaluationMessage = ArrayProxy(klass);
    }
    return this[_values].evaluationMessage;
  }

  set evaluationMessage(value) {
    const klass = require('./Reference');
    this[_values].evaluationMessage = ArrayProxy(klass);
    value.forEach(entry => this[_values].evaluationMessage.push(entry));
    return this[_values].evaluationMessage;
  }

  get outputParameters() {
    if (!isPresent(this[_values].outputParameters)) {
      const klass = require('./Reference');
      this[_values].outputParameters = new klass();
    }
    return this[_values].outputParameters;
  }

  set outputParameters(value) {
    const klass = require('./Reference');
    return this[_values].outputParameters = new klass(value);
  }

  get result() {
    if (!isPresent(this[_values].result)) {
      const klass = require('./Reference');
      this[_values].result = new klass();
    }
    return this[_values].result;
  }

  set result(value) {
    const klass = require('./Reference');
    return this[_values].result = new klass(value);
  }

  get dataRequirement() {
    if (!isPresent(this[_values].dataRequirement)) {
      const klass = require('./DataRequirement');
      this[_values].dataRequirement = ArrayProxy(klass);
    }
    return this[_values].dataRequirement;
  }

  set dataRequirement(value) {
    const klass = require('./DataRequirement');
    this[_values].dataRequirement = ArrayProxy(klass);
    value.forEach(entry => this[_values].dataRequirement.push(entry));
    return this[_values].dataRequirement;
  }
}

module.exports = GuidanceResponse;

