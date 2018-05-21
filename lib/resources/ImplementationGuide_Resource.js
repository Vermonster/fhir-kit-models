
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ImplementationGuide_Resource extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImplementationGuide_Resource || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get example() {
    return this[_values].example;
  }

  set example(value) {
    return this[_values].example = value;
  }

  get _example() {
    if (!isPresent(this[_values]._example)) {
      const klass = require('./Element');
      this[_values]._example = new klass();
    }
    return this[_values]._example;
  }

  set _example(value) {
    const klass = require('./Element');
    return this[_values]._example = new klass(value);
  }

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
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

  get acronym() {
    return this[_values].acronym;
  }

  set acronym(value) {
    return this[_values].acronym = value;
  }

  get _acronym() {
    if (!isPresent(this[_values]._acronym)) {
      const klass = require('./Element');
      this[_values]._acronym = new klass();
    }
    return this[_values]._acronym;
  }

  set _acronym(value) {
    const klass = require('./Element');
    return this[_values]._acronym = new klass(value);
  }

  get sourceUri() {
    return this[_values].sourceUri;
  }

  set sourceUri(value) {
    return this[_values].sourceUri = value;
  }

  get _sourceUri() {
    if (!isPresent(this[_values]._sourceUri)) {
      const klass = require('./Element');
      this[_values]._sourceUri = new klass();
    }
    return this[_values]._sourceUri;
  }

  set _sourceUri(value) {
    const klass = require('./Element');
    return this[_values]._sourceUri = new klass(value);
  }

  get sourceReference() {
    if (!isPresent(this[_values].sourceReference)) {
      const klass = require('./Reference');
      this[_values].sourceReference = new klass();
    }
    return this[_values].sourceReference;
  }

  set sourceReference(value) {
    const klass = require('./Reference');
    return this[_values].sourceReference = new klass(value);
  }

  get exampleFor() {
    if (!isPresent(this[_values].exampleFor)) {
      const klass = require('./Reference');
      this[_values].exampleFor = new klass();
    }
    return this[_values].exampleFor;
  }

  set exampleFor(value) {
    const klass = require('./Reference');
    return this[_values].exampleFor = new klass(value);
  }
}

module.exports = ImplementationGuide_Resource;

