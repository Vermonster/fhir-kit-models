const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class CapabilityStatement_Rest extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatement_Rest || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get mode() {
    return this[_values].mode;
  }

  set mode(value) {
    return this[_values].mode = value;
  }

  get _mode() {
    if (!isPresent(this[_values]._mode)) {
      const klass = require('./Element');
      this[_values]._mode = new klass();
    }
    return this[_values]._mode;
  }

  set _mode(value) {
    const klass = require('./Element');
    return this[_values]._mode = new klass(value);
  }

  get documentation() {
    return this[_values].documentation;
  }

  set documentation(value) {
    return this[_values].documentation = value;
  }

  get _documentation() {
    if (!isPresent(this[_values]._documentation)) {
      const klass = require('./Element');
      this[_values]._documentation = new klass();
    }
    return this[_values]._documentation;
  }

  set _documentation(value) {
    const klass = require('./Element');
    return this[_values]._documentation = new klass(value);
  }

  get security() {
    if (!isPresent(this[_values].security)) {
      const klass = require('./CapabilityStatement_Security');
      this[_values].security = new klass();
    }
    return this[_values].security;
  }

  set security(value) {
    const klass = require('./CapabilityStatement_Security');
    return this[_values].security = new klass(value);
  }

  get resource() {
    if (!isPresent(this[_values].resource)) {
      const klass = require('./CapabilityStatement_Resource');
      this[_values].resource = ArrayProxy(klass);
    }
    return this[_values].resource;
  }

  set resource(value) {
    const klass = require('./CapabilityStatement_Resource');
    this[_values].resource = ArrayProxy(klass);
    value.forEach(entry => this[_values].resource.push(entry));
    return this[_values].resource;
  }

  get interaction() {
    if (!isPresent(this[_values].interaction)) {
      const klass = require('./CapabilityStatement_Interaction1');
      this[_values].interaction = ArrayProxy(klass);
    }
    return this[_values].interaction;
  }

  set interaction(value) {
    const klass = require('./CapabilityStatement_Interaction1');
    this[_values].interaction = ArrayProxy(klass);
    value.forEach(entry => this[_values].interaction.push(entry));
    return this[_values].interaction;
  }

  get searchParam() {
    if (!isPresent(this[_values].searchParam)) {
      const klass = require('./CapabilityStatement_SearchParam');
      this[_values].searchParam = ArrayProxy(klass);
    }
    return this[_values].searchParam;
  }

  set searchParam(value) {
    const klass = require('./CapabilityStatement_SearchParam');
    this[_values].searchParam = ArrayProxy(klass);
    value.forEach(entry => this[_values].searchParam.push(entry));
    return this[_values].searchParam;
  }

  get operation() {
    if (!isPresent(this[_values].operation)) {
      const klass = require('./CapabilityStatement_Operation');
      this[_values].operation = ArrayProxy(klass);
    }
    return this[_values].operation;
  }

  set operation(value) {
    const klass = require('./CapabilityStatement_Operation');
    this[_values].operation = ArrayProxy(klass);
    value.forEach(entry => this[_values].operation.push(entry));
    return this[_values].operation;
  }

  get compartment() {
    return this[_values].compartment;
  }

  set compartment(value) {
    return this[_values].compartment = value;
  }

  get _compartment() {
    if (!isPresent(this[_values]._compartment)) {
      const klass = require('./Element');
      this[_values]._compartment = ArrayProxy(klass);
    }
    return this[_values]._compartment;
  }

  set _compartment(value) {
    const klass = require('./Element');
    this[_values]._compartment = ArrayProxy(klass);
    value.forEach(entry => this[_values]._compartment.push(entry));
    return this[_values]._compartment;
  }
}

module.exports = CapabilityStatement_Rest;

