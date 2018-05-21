const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ElementDefinitionSlicing extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ElementDefinitionSlicing || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get discriminator() {
    if (!isPresent(this[_values].discriminator)) {
      const klass = require('./ElementDefinitionDiscriminator');
      this[_values].discriminator = ArrayProxy(klass);
    }
    return this[_values].discriminator;
  }

  set discriminator(value) {
    const klass = require('./ElementDefinitionDiscriminator');
    this[_values].discriminator = ArrayProxy(klass);
    value.forEach(entry => this[_values].discriminator.push(entry));
    return this[_values].discriminator;
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get ordered() {
    return this[_values].ordered;
  }

  set ordered(value) {
    return this[_values].ordered = value;
  }

  get _ordered() {
    if (!isPresent(this[_values]._ordered)) {
      const klass = require('./Element');
      this[_values]._ordered = new klass();
    }
    return this[_values]._ordered;
  }

  set _ordered(value) {
    const klass = require('./Element');
    return this[_values]._ordered = new klass(value);
  }

  get rules() {
    return this[_values].rules;
  }

  set rules(value) {
    return this[_values].rules = value;
  }

  get _rules() {
    if (!isPresent(this[_values]._rules)) {
      const klass = require('./Element');
      this[_values]._rules = new klass();
    }
    return this[_values]._rules;
  }

  set _rules(value) {
    const klass = require('./Element');
    return this[_values]._rules = new klass(value);
  }
}

module.exports = ElementDefinitionSlicing;

