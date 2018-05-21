const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ConceptMap_Target extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ConceptMap_Target || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get code() {
    return this[_values].code;
  }

  set code(value) {
    return this[_values].code = value;
  }

  get _code() {
    if (!isPresent(this[_values]._code)) {
      const klass = require('./Element');
      this[_values]._code = new klass();
    }
    return this[_values]._code;
  }

  set _code(value) {
    const klass = require('./Element');
    return this[_values]._code = new klass(value);
  }

  get display() {
    return this[_values].display;
  }

  set display(value) {
    return this[_values].display = value;
  }

  get _display() {
    if (!isPresent(this[_values]._display)) {
      const klass = require('./Element');
      this[_values]._display = new klass();
    }
    return this[_values]._display;
  }

  set _display(value) {
    const klass = require('./Element');
    return this[_values]._display = new klass(value);
  }

  get equivalence() {
    return this[_values].equivalence;
  }

  set equivalence(value) {
    return this[_values].equivalence = value;
  }

  get _equivalence() {
    if (!isPresent(this[_values]._equivalence)) {
      const klass = require('./Element');
      this[_values]._equivalence = new klass();
    }
    return this[_values]._equivalence;
  }

  set _equivalence(value) {
    const klass = require('./Element');
    return this[_values]._equivalence = new klass(value);
  }

  get comment() {
    return this[_values].comment;
  }

  set comment(value) {
    return this[_values].comment = value;
  }

  get _comment() {
    if (!isPresent(this[_values]._comment)) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }

  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }

  get dependsOn() {
    if (!isPresent(this[_values].dependsOn)) {
      const klass = require('./ConceptMap_DependsOn');
      this[_values].dependsOn = ArrayProxy(klass);
    }
    return this[_values].dependsOn;
  }

  set dependsOn(value) {
    const klass = require('./ConceptMap_DependsOn');
    this[_values].dependsOn = ArrayProxy(klass);
    value.forEach(entry => this[_values].dependsOn.push(entry));
    return this[_values].dependsOn;
  }

  get product() {
    if (!isPresent(this[_values].product)) {
      const klass = require('./ConceptMap_DependsOn');
      this[_values].product = ArrayProxy(klass);
    }
    return this[_values].product;
  }

  set product(value) {
    const klass = require('./ConceptMap_DependsOn');
    this[_values].product = ArrayProxy(klass);
    value.forEach(entry => this[_values].product.push(entry));
    return this[_values].product;
  }
}

module.exports = ConceptMap_Target;

