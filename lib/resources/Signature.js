const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Signature extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Signature || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./Coding');
      this[_values].type = ArrayProxy(klass);
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./Coding');
    this[_values].type = ArrayProxy(klass);
    value.forEach(entry => this[_values].type.push(entry));
    return this[_values].type;
  }

  get when() {
    return this[_values].when;
  }

  set when(value) {
    return this[_values].when = value;
  }

  get _when() {
    if (!isPresent(this[_values]._when)) {
      const klass = require('./Element');
      this[_values]._when = new klass();
    }
    return this[_values]._when;
  }

  set _when(value) {
    const klass = require('./Element');
    return this[_values]._when = new klass(value);
  }

  get whoUri() {
    return this[_values].whoUri;
  }

  set whoUri(value) {
    return this[_values].whoUri = value;
  }

  get _whoUri() {
    if (!isPresent(this[_values]._whoUri)) {
      const klass = require('./Element');
      this[_values]._whoUri = new klass();
    }
    return this[_values]._whoUri;
  }

  set _whoUri(value) {
    const klass = require('./Element');
    return this[_values]._whoUri = new klass(value);
  }

  get whoReference() {
    if (!isPresent(this[_values].whoReference)) {
      const klass = require('./Reference');
      this[_values].whoReference = new klass();
    }
    return this[_values].whoReference;
  }

  set whoReference(value) {
    const klass = require('./Reference');
    return this[_values].whoReference = new klass(value);
  }

  get onBehalfOfUri() {
    return this[_values].onBehalfOfUri;
  }

  set onBehalfOfUri(value) {
    return this[_values].onBehalfOfUri = value;
  }

  get _onBehalfOfUri() {
    if (!isPresent(this[_values]._onBehalfOfUri)) {
      const klass = require('./Element');
      this[_values]._onBehalfOfUri = new klass();
    }
    return this[_values]._onBehalfOfUri;
  }

  set _onBehalfOfUri(value) {
    const klass = require('./Element');
    return this[_values]._onBehalfOfUri = new klass(value);
  }

  get onBehalfOfReference() {
    if (!isPresent(this[_values].onBehalfOfReference)) {
      const klass = require('./Reference');
      this[_values].onBehalfOfReference = new klass();
    }
    return this[_values].onBehalfOfReference;
  }

  set onBehalfOfReference(value) {
    const klass = require('./Reference');
    return this[_values].onBehalfOfReference = new klass(value);
  }

  get contentType() {
    return this[_values].contentType;
  }

  set contentType(value) {
    return this[_values].contentType = value;
  }

  get _contentType() {
    if (!isPresent(this[_values]._contentType)) {
      const klass = require('./Element');
      this[_values]._contentType = new klass();
    }
    return this[_values]._contentType;
  }

  set _contentType(value) {
    const klass = require('./Element');
    return this[_values]._contentType = new klass(value);
  }

  get blob() {
    return this[_values].blob;
  }

  set blob(value) {
    return this[_values].blob = value;
  }

  get _blob() {
    if (!isPresent(this[_values]._blob)) {
      const klass = require('./Element');
      this[_values]._blob = new klass();
    }
    return this[_values]._blob;
  }

  set _blob(value) {
    const klass = require('./Element');
    return this[_values]._blob = new klass(value);
  }
}

module.exports = Signature;

