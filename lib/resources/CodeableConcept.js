const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class CodeableConcept extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CodeableConcept || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get coding() {
    if (!isPresent(this[_values].coding)) {
      const klass = require('./Coding');
      this[_values].coding = ArrayProxy(klass);
    }
    return this[_values].coding;
  }

  set coding(value) {
    const klass = require('./Coding');
    this[_values].coding = ArrayProxy(klass);
    value.forEach(entry => this[_values].coding.push(entry));
    return this[_values].coding;
  }

  get text() {
    return this[_values].text;
  }

  set text(value) {
    return this[_values].text = value;
  }

  get _text() {
    if (!isPresent(this[_values]._text)) {
      const klass = require('./Element');
      this[_values]._text = new klass();
    }
    return this[_values]._text;
  }

  set _text(value) {
    const klass = require('./Element');
    return this[_values]._text = new klass(value);
  }
}

module.exports = CodeableConcept;

