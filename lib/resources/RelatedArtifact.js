
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class RelatedArtifact extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof RelatedArtifact ||
      values instanceof Element) {
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

  get citation() {
    return this[_values].citation;
  }

  set citation(value) {
    return this[_values].citation = value;
  }

  get _citation() {
    if (!isPresent(this[_values]._citation)) {
      const klass = require('./Element');
      this[_values]._citation = new klass();
    }
    return this[_values]._citation;
  }

  set _citation(value) {
    const klass = require('./Element');
    return this[_values]._citation = new klass(value);
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

  get document() {
    if (!isPresent(this[_values].document)) {
      const klass = require('./Attachment');
      this[_values].document = new klass();
    }
    return this[_values].document;
  }

  set document(value) {
    const klass = require('./Attachment');
    return this[_values].document = new klass(value);
  }

  get resource() {
    if (!isPresent(this[_values].resource)) {
      const klass = require('./Reference');
      this[_values].resource = new klass();
    }
    return this[_values].resource;
  }

  set resource(value) {
    const klass = require('./Reference');
    return this[_values].resource = new klass(value);
  }
}

module.exports = RelatedArtifact;

