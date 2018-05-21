const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class GraphDefinition_Target extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof GraphDefinition_Target || values instanceof BackboneElement) {
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
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }

  get profile() {
    return this[_values].profile;
  }

  set profile(value) {
    return this[_values].profile = value;
  }

  get _profile() {
    if (!isPresent(this[_values]._profile)) {
      const klass = require('./Element');
      this[_values]._profile = new klass();
    }
    return this[_values]._profile;
  }

  set _profile(value) {
    const klass = require('./Element');
    return this[_values]._profile = new klass(value);
  }

  get compartment() {
    if (!isPresent(this[_values].compartment)) {
      const klass = require('./GraphDefinition_Compartment');
      this[_values].compartment = ArrayProxy(klass);
    }
    return this[_values].compartment;
  }

  set compartment(value) {
    const klass = require('./GraphDefinition_Compartment');
    this[_values].compartment = ArrayProxy(klass);
    value.forEach(entry => this[_values].compartment.push(entry));
    return this[_values].compartment;
  }

  get link() {
    if (!isPresent(this[_values].link)) {
      const klass = require('./GraphDefinition_Link');
      this[_values].link = ArrayProxy(klass);
    }
    return this[_values].link;
  }

  set link(value) {
    const klass = require('./GraphDefinition_Link');
    this[_values].link = ArrayProxy(klass);
    value.forEach(entry => this[_values].link.push(entry));
    return this[_values].link;
  }
}

module.exports = GraphDefinition_Target;

