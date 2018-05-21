
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ConceptMapUnmapped extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ConceptMapUnmapped || values instanceof BackboneElement) {
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

  get url() {
    return this[_values].url;
  }

  set url(value) {
    return this[_values].url = value;
  }

  get _url() {
    if (!isPresent(this[_values]._url)) {
      const klass = require('./Element');
      this[_values]._url = new klass();
    }
    return this[_values]._url;
  }

  set _url(value) {
    const klass = require('./Element');
    return this[_values]._url = new klass(value);
  }
}

module.exports = ConceptMapUnmapped;

