const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class CodeSystem_Concept extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CodeSystem_Concept || values instanceof BackboneElement) {
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

  get definition() {
    return this[_values].definition;
  }

  set definition(value) {
    return this[_values].definition = value;
  }

  get _definition() {
    if (!isPresent(this[_values]._definition)) {
      const klass = require('./Element');
      this[_values]._definition = new klass();
    }
    return this[_values]._definition;
  }

  set _definition(value) {
    const klass = require('./Element');
    return this[_values]._definition = new klass(value);
  }

  get designation() {
    if (!isPresent(this[_values].designation)) {
      const klass = require('./CodeSystem_Designation');
      this[_values].designation = ArrayProxy(klass);
    }
    return this[_values].designation;
  }

  set designation(value) {
    const klass = require('./CodeSystem_Designation');
    this[_values].designation = ArrayProxy(klass);
    value.forEach(entry => this[_values].designation.push(entry));
    return this[_values].designation;
  }

  get property() {
    if (!isPresent(this[_values].property)) {
      const klass = require('./CodeSystem_Property1');
      this[_values].property = ArrayProxy(klass);
    }
    return this[_values].property;
  }

  set property(value) {
    const klass = require('./CodeSystem_Property1');
    this[_values].property = ArrayProxy(klass);
    value.forEach(entry => this[_values].property.push(entry));
    return this[_values].property;
  }

  get concept() {
    if (!isPresent(this[_values].concept)) {
      const klass = require('./CodeSystem_Concept');
      this[_values].concept = ArrayProxy(klass);
    }
    return this[_values].concept;
  }

  set concept(value) {
    const klass = require('./CodeSystem_Concept');
    this[_values].concept = ArrayProxy(klass);
    value.forEach(entry => this[_values].concept.push(entry));
    return this[_values].concept;
  }
}

module.exports = CodeSystem_Concept;

