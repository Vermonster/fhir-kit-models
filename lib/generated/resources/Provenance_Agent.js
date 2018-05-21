const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class Provenance_Agent extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Provenance_Agent || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get role() {
    if (!isPresent(this[_values].role)) {
      const klass = require('./CodeableConcept');
      this[_values].role = ArrayProxy(klass);
    }
    return this[_values].role;
  }

  set role(value) {
    const klass = require('./CodeableConcept');
    this[_values].role = ArrayProxy(klass);
    value.forEach(entry => this[_values].role.push(entry));
    return this[_values].role;
  }

  get whoUri() {
    return this[_values].whoUri;
  }

  set whoUri(value) {
    return this[_values].whoUri = value;
  }

  get _whoUri() {
    if (!isPresent(this[_values]._whoUri)) {
      const klass = require('./Element');
      this[_values]._whoUri = new klass();
    }
    return this[_values]._whoUri;
  }

  set _whoUri(value) {
    const klass = require('./Element');
    return this[_values]._whoUri = new klass(value);
  }

  get whoReference() {
    if (!isPresent(this[_values].whoReference)) {
      const klass = require('./Reference');
      this[_values].whoReference = new klass();
    }
    return this[_values].whoReference;
  }

  set whoReference(value) {
    const klass = require('./Reference');
    return this[_values].whoReference = new klass(value);
  }

  get onBehalfOfUri() {
    return this[_values].onBehalfOfUri;
  }

  set onBehalfOfUri(value) {
    return this[_values].onBehalfOfUri = value;
  }

  get _onBehalfOfUri() {
    if (!isPresent(this[_values]._onBehalfOfUri)) {
      const klass = require('./Element');
      this[_values]._onBehalfOfUri = new klass();
    }
    return this[_values]._onBehalfOfUri;
  }

  set _onBehalfOfUri(value) {
    const klass = require('./Element');
    return this[_values]._onBehalfOfUri = new klass(value);
  }

  get onBehalfOfReference() {
    if (!isPresent(this[_values].onBehalfOfReference)) {
      const klass = require('./Reference');
      this[_values].onBehalfOfReference = new klass();
    }
    return this[_values].onBehalfOfReference;
  }

  set onBehalfOfReference(value) {
    const klass = require('./Reference');
    return this[_values].onBehalfOfReference = new klass(value);
  }

  get relatedAgentType() {
    if (!isPresent(this[_values].relatedAgentType)) {
      const klass = require('./CodeableConcept');
      this[_values].relatedAgentType = new klass();
    }
    return this[_values].relatedAgentType;
  }

  set relatedAgentType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].relatedAgentType = new klass(value);
  }
}

module.exports = Provenance_Agent;

