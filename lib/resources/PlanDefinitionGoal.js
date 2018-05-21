const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class PlanDefinitionGoal extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PlanDefinitionGoal || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
  }

  get description() {
    if (!isPresent(this[_values].description)) {
      const klass = require('./CodeableConcept');
      this[_values].description = new klass();
    }
    return this[_values].description;
  }

  set description(value) {
    const klass = require('./CodeableConcept');
    return this[_values].description = new klass(value);
  }

  get priority() {
    if (!isPresent(this[_values].priority)) {
      const klass = require('./CodeableConcept');
      this[_values].priority = new klass();
    }
    return this[_values].priority;
  }

  set priority(value) {
    const klass = require('./CodeableConcept');
    return this[_values].priority = new klass(value);
  }

  get start() {
    if (!isPresent(this[_values].start)) {
      const klass = require('./CodeableConcept');
      this[_values].start = new klass();
    }
    return this[_values].start;
  }

  set start(value) {
    const klass = require('./CodeableConcept');
    return this[_values].start = new klass(value);
  }

  get addresses() {
    if (!isPresent(this[_values].addresses)) {
      const klass = require('./CodeableConcept');
      this[_values].addresses = ArrayProxy(klass);
    }
    return this[_values].addresses;
  }

  set addresses(value) {
    const klass = require('./CodeableConcept');
    this[_values].addresses = ArrayProxy(klass);
    value.forEach(entry => this[_values].addresses.push(entry));
    return this[_values].addresses;
  }

  get documentation() {
    if (!isPresent(this[_values].documentation)) {
      const klass = require('./RelatedArtifact');
      this[_values].documentation = ArrayProxy(klass);
    }
    return this[_values].documentation;
  }

  set documentation(value) {
    const klass = require('./RelatedArtifact');
    this[_values].documentation = ArrayProxy(klass);
    value.forEach(entry => this[_values].documentation.push(entry));
    return this[_values].documentation;
  }

  get target() {
    if (!isPresent(this[_values].target)) {
      const klass = require('./PlanDefinitionTarget');
      this[_values].target = ArrayProxy(klass);
    }
    return this[_values].target;
  }

  set target(value) {
    const klass = require('./PlanDefinitionTarget');
    this[_values].target = ArrayProxy(klass);
    value.forEach(entry => this[_values].target.push(entry));
    return this[_values].target;
  }
}

module.exports = PlanDefinitionGoal;

