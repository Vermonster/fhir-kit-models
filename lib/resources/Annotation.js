
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Annotation extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Annotation || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get authorReference() {
    if (!isPresent(this[_values].authorReference)) {
      const klass = require('./Reference');
      this[_values].authorReference = new klass();
    }
    return this[_values].authorReference;
  }

  set authorReference(value) {
    const klass = require('./Reference');
    return this[_values].authorReference = new klass(value);
  }

  get authorString() {
    return this[_values].authorString;
  }

  set authorString(value) {
    return this[_values].authorString = value;
  }

  get _authorString() {
    if (!isPresent(this[_values]._authorString)) {
      const klass = require('./Element');
      this[_values]._authorString = new klass();
    }
    return this[_values]._authorString;
  }

  set _authorString(value) {
    const klass = require('./Element');
    return this[_values]._authorString = new klass(value);
  }

  get time() {
    return this[_values].time;
  }

  set time(value) {
    return this[_values].time = value;
  }

  get _time() {
    if (!isPresent(this[_values]._time)) {
      const klass = require('./Element');
      this[_values]._time = new klass();
    }
    return this[_values]._time;
  }

  set _time(value) {
    const klass = require('./Element');
    return this[_values]._time = new klass(value);
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

module.exports = Annotation;

