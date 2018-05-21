const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class ProcessResponse extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ProcessResponse || values instanceof DomainResource) {
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
    if (!isPresent(this[_values].identifier)) {
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

  get created() {
    return this[_values].created;
  }

  set created(value) {
    return this[_values].created = value;
  }

  get _created() {
    if (!isPresent(this[_values]._created)) {
      const klass = require('./Element');
      this[_values]._created = new klass();
    }
    return this[_values]._created;
  }

  set _created(value) {
    const klass = require('./Element');
    return this[_values]._created = new klass(value);
  }

  get organization() {
    if (!isPresent(this[_values].organization)) {
      const klass = require('./Reference');
      this[_values].organization = new klass();
    }
    return this[_values].organization;
  }

  set organization(value) {
    const klass = require('./Reference');
    return this[_values].organization = new klass(value);
  }

  get request() {
    if (!isPresent(this[_values].request)) {
      const klass = require('./Reference');
      this[_values].request = new klass();
    }
    return this[_values].request;
  }

  set request(value) {
    const klass = require('./Reference');
    return this[_values].request = new klass(value);
  }

  get outcome() {
    if (!isPresent(this[_values].outcome)) {
      const klass = require('./CodeableConcept');
      this[_values].outcome = new klass();
    }
    return this[_values].outcome;
  }

  set outcome(value) {
    const klass = require('./CodeableConcept');
    return this[_values].outcome = new klass(value);
  }

  get disposition() {
    return this[_values].disposition;
  }

  set disposition(value) {
    return this[_values].disposition = value;
  }

  get _disposition() {
    if (!isPresent(this[_values]._disposition)) {
      const klass = require('./Element');
      this[_values]._disposition = new klass();
    }
    return this[_values]._disposition;
  }

  set _disposition(value) {
    const klass = require('./Element');
    return this[_values]._disposition = new klass(value);
  }

  get requestProvider() {
    if (!isPresent(this[_values].requestProvider)) {
      const klass = require('./Reference');
      this[_values].requestProvider = new klass();
    }
    return this[_values].requestProvider;
  }

  set requestProvider(value) {
    const klass = require('./Reference');
    return this[_values].requestProvider = new klass(value);
  }

  get requestOrganization() {
    if (!isPresent(this[_values].requestOrganization)) {
      const klass = require('./Reference');
      this[_values].requestOrganization = new klass();
    }
    return this[_values].requestOrganization;
  }

  set requestOrganization(value) {
    const klass = require('./Reference');
    return this[_values].requestOrganization = new klass(value);
  }

  get form() {
    if (!isPresent(this[_values].form)) {
      const klass = require('./CodeableConcept');
      this[_values].form = new klass();
    }
    return this[_values].form;
  }

  set form(value) {
    const klass = require('./CodeableConcept');
    return this[_values].form = new klass(value);
  }

  get processNote() {
    if (!isPresent(this[_values].processNote)) {
      const klass = require('./ProcessResponse_ProcessNote');
      this[_values].processNote = ArrayProxy(klass);
    }
    return this[_values].processNote;
  }

  set processNote(value) {
    const klass = require('./ProcessResponse_ProcessNote');
    this[_values].processNote = ArrayProxy(klass);
    value.forEach(entry => this[_values].processNote.push(entry));
    return this[_values].processNote;
  }

  get error() {
    if (!isPresent(this[_values].error)) {
      const klass = require('./CodeableConcept');
      this[_values].error = ArrayProxy(klass);
    }
    return this[_values].error;
  }

  set error(value) {
    const klass = require('./CodeableConcept');
    this[_values].error = ArrayProxy(klass);
    value.forEach(entry => this[_values].error.push(entry));
    return this[_values].error;
  }

  get communicationRequest() {
    if (!isPresent(this[_values].communicationRequest)) {
      const klass = require('./Reference');
      this[_values].communicationRequest = ArrayProxy(klass);
    }
    return this[_values].communicationRequest;
  }

  set communicationRequest(value) {
    const klass = require('./Reference');
    this[_values].communicationRequest = ArrayProxy(klass);
    value.forEach(entry => this[_values].communicationRequest.push(entry));
    return this[_values].communicationRequest;
  }
}

module.exports = ProcessResponse;

