const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Provenance_Entity extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Provenance_Entity || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get role() {
    return this[_values].role;
  }

  set role(value) {
    return this[_values].role = value;
  }

  get _role() {
    if (!isPresent(this[_values]._role)) {
      const klass = require('./Element');
      this[_values]._role = new klass();
    }
    return this[_values]._role;
  }

  set _role(value) {
    const klass = require('./Element');
    return this[_values]._role = new klass(value);
  }

  get whatUri() {
    return this[_values].whatUri;
  }

  set whatUri(value) {
    return this[_values].whatUri = value;
  }

  get _whatUri() {
    if (!isPresent(this[_values]._whatUri)) {
      const klass = require('./Element');
      this[_values]._whatUri = new klass();
    }
    return this[_values]._whatUri;
  }

  set _whatUri(value) {
    const klass = require('./Element');
    return this[_values]._whatUri = new klass(value);
  }

  get whatReference() {
    if (!isPresent(this[_values].whatReference)) {
      const klass = require('./Reference');
      this[_values].whatReference = new klass();
    }
    return this[_values].whatReference;
  }

  set whatReference(value) {
    const klass = require('./Reference');
    return this[_values].whatReference = new klass(value);
  }

  get whatIdentifier() {
    if (!isPresent(this[_values].whatIdentifier)) {
      const klass = require('./Identifier');
      this[_values].whatIdentifier = new klass();
    }
    return this[_values].whatIdentifier;
  }

  set whatIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].whatIdentifier = new klass(value);
  }

  get agent() {
    if (!isPresent(this[_values].agent)) {
      const klass = require('./Provenance_Agent');
      this[_values].agent = ArrayProxy(klass);
    }
    return this[_values].agent;
  }

  set agent(value) {
    const klass = require('./Provenance_Agent');
    this[_values].agent = ArrayProxy(klass);
    value.forEach(entry => this[_values].agent.push(entry));
    return this[_values].agent;
  }
}

module.exports = Provenance_Entity;

