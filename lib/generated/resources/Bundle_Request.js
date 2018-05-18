const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Bundle_Request extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Bundle_Request || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get method() {
    return this[_values].method;
  }
  set method(value) {
    return this[_values].method = value;
  }
  get _method() {
    if (!this[_values]._method) {
      const klass = require('./Element');
      this[_values]._method = new klass();
    }
    return this[_values]._method;
  }
  set _method(value) {
    const klass = require('./Element');
    return this[_values]._method = new klass(value);
  }
  get url() {
    return this[_values].url;
  }
  set url(value) {
    return this[_values].url = value;
  }
  get _url() {
    if (!this[_values]._url) {
      const klass = require('./Element');
      this[_values]._url = new klass();
    }
    return this[_values]._url;
  }
  set _url(value) {
    const klass = require('./Element');
    return this[_values]._url = new klass(value);
  }
  get ifNoneMatch() {
    return this[_values].ifNoneMatch;
  }
  set ifNoneMatch(value) {
    return this[_values].ifNoneMatch = value;
  }
  get _ifNoneMatch() {
    if (!this[_values]._ifNoneMatch) {
      const klass = require('./Element');
      this[_values]._ifNoneMatch = new klass();
    }
    return this[_values]._ifNoneMatch;
  }
  set _ifNoneMatch(value) {
    const klass = require('./Element');
    return this[_values]._ifNoneMatch = new klass(value);
  }
  get ifModifiedSince() {
    return this[_values].ifModifiedSince;
  }
  set ifModifiedSince(value) {
    return this[_values].ifModifiedSince = value;
  }
  get _ifModifiedSince() {
    if (!this[_values]._ifModifiedSince) {
      const klass = require('./Element');
      this[_values]._ifModifiedSince = new klass();
    }
    return this[_values]._ifModifiedSince;
  }
  set _ifModifiedSince(value) {
    const klass = require('./Element');
    return this[_values]._ifModifiedSince = new klass(value);
  }
  get ifMatch() {
    return this[_values].ifMatch;
  }
  set ifMatch(value) {
    return this[_values].ifMatch = value;
  }
  get _ifMatch() {
    if (!this[_values]._ifMatch) {
      const klass = require('./Element');
      this[_values]._ifMatch = new klass();
    }
    return this[_values]._ifMatch;
  }
  set _ifMatch(value) {
    const klass = require('./Element');
    return this[_values]._ifMatch = new klass(value);
  }
  get ifNoneExist() {
    return this[_values].ifNoneExist;
  }
  set ifNoneExist(value) {
    return this[_values].ifNoneExist = value;
  }
  get _ifNoneExist() {
    if (!this[_values]._ifNoneExist) {
      const klass = require('./Element');
      this[_values]._ifNoneExist = new klass();
    }
    return this[_values]._ifNoneExist;
  }
  set _ifNoneExist(value) {
    const klass = require('./Element');
    return this[_values]._ifNoneExist = new klass(value);
  }
}
module.exports = Bundle_Request;