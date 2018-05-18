const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ExplanationOfBenefit_ProcessNote extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefit_ProcessNote || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get number() {
    return this[_values].number;
  }
  set number(value) {
    return this[_values].number = value;
  }
  get _number() {
    if (!this[_values]._number) {
      const klass = require('./Element');
      this[_values]._number = new klass();
    }
    return this[_values]._number;
  }
  set _number(value) {
    const klass = require('./Element');
    return this[_values]._number = new klass(value);
  }
  get type() {
    if (!this[_values].type) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }
  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }
  get text() {
    return this[_values].text;
  }
  set text(value) {
    return this[_values].text = value;
  }
  get _text() {
    if (!this[_values]._text) {
      const klass = require('./Element');
      this[_values]._text = new klass();
    }
    return this[_values]._text;
  }
  set _text(value) {
    const klass = require('./Element');
    return this[_values]._text = new klass(value);
  }
  get language() {
    if (!this[_values].language) {
      const klass = require('./CodeableConcept');
      this[_values].language = new klass();
    }
    return this[_values].language;
  }
  set language(value) {
    const klass = require('./CodeableConcept');
    return this[_values].language = new klass(value);
  }
}
module.exports = ExplanationOfBenefit_ProcessNote;