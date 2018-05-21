const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScript_Operation extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScript_Operation || values instanceof BackboneElement) {
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
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./Coding');
    return this[_values].type = new klass(value);
  }

  get resource() {
    return this[_values].resource;
  }

  set resource(value) {
    return this[_values].resource = value;
  }

  get _resource() {
    if (!isPresent(this[_values]._resource)) {
      const klass = require('./Element');
      this[_values]._resource = new klass();
    }
    return this[_values]._resource;
  }

  set _resource(value) {
    const klass = require('./Element');
    return this[_values]._resource = new klass(value);
  }

  get label() {
    return this[_values].label;
  }

  set label(value) {
    return this[_values].label = value;
  }

  get _label() {
    if (!isPresent(this[_values]._label)) {
      const klass = require('./Element');
      this[_values]._label = new klass();
    }
    return this[_values]._label;
  }

  set _label(value) {
    const klass = require('./Element');
    return this[_values]._label = new klass(value);
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

  get accept() {
    return this[_values].accept;
  }

  set accept(value) {
    return this[_values].accept = value;
  }

  get _accept() {
    if (!isPresent(this[_values]._accept)) {
      const klass = require('./Element');
      this[_values]._accept = new klass();
    }
    return this[_values]._accept;
  }

  set _accept(value) {
    const klass = require('./Element');
    return this[_values]._accept = new klass(value);
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

  get destination() {
    return this[_values].destination;
  }

  set destination(value) {
    return this[_values].destination = value;
  }

  get _destination() {
    if (!isPresent(this[_values]._destination)) {
      const klass = require('./Element');
      this[_values]._destination = new klass();
    }
    return this[_values]._destination;
  }

  set _destination(value) {
    const klass = require('./Element');
    return this[_values]._destination = new klass(value);
  }

  get encodeRequestUrl() {
    return this[_values].encodeRequestUrl;
  }

  set encodeRequestUrl(value) {
    return this[_values].encodeRequestUrl = value;
  }

  get _encodeRequestUrl() {
    if (!isPresent(this[_values]._encodeRequestUrl)) {
      const klass = require('./Element');
      this[_values]._encodeRequestUrl = new klass();
    }
    return this[_values]._encodeRequestUrl;
  }

  set _encodeRequestUrl(value) {
    const klass = require('./Element');
    return this[_values]._encodeRequestUrl = new klass(value);
  }

  get origin() {
    return this[_values].origin;
  }

  set origin(value) {
    return this[_values].origin = value;
  }

  get _origin() {
    if (!isPresent(this[_values]._origin)) {
      const klass = require('./Element');
      this[_values]._origin = new klass();
    }
    return this[_values]._origin;
  }

  set _origin(value) {
    const klass = require('./Element');
    return this[_values]._origin = new klass(value);
  }

  get params() {
    return this[_values].params;
  }

  set params(value) {
    return this[_values].params = value;
  }

  get _params() {
    if (!isPresent(this[_values]._params)) {
      const klass = require('./Element');
      this[_values]._params = new klass();
    }
    return this[_values]._params;
  }

  set _params(value) {
    const klass = require('./Element');
    return this[_values]._params = new klass(value);
  }

  get requestHeader() {
    if (!isPresent(this[_values].requestHeader)) {
      const klass = require('./TestScript_RequestHeader');
      this[_values].requestHeader = ArrayProxy(klass);
    }
    return this[_values].requestHeader;
  }

  set requestHeader(value) {
    const klass = require('./TestScript_RequestHeader');
    this[_values].requestHeader = ArrayProxy(klass);
    value.forEach(entry => this[_values].requestHeader.push(entry));
    return this[_values].requestHeader;
  }

  get requestId() {
    return this[_values].requestId;
  }

  set requestId(value) {
    return this[_values].requestId = value;
  }

  get _requestId() {
    if (!isPresent(this[_values]._requestId)) {
      const klass = require('./Element');
      this[_values]._requestId = new klass();
    }
    return this[_values]._requestId;
  }

  set _requestId(value) {
    const klass = require('./Element');
    return this[_values]._requestId = new klass(value);
  }

  get responseId() {
    return this[_values].responseId;
  }

  set responseId(value) {
    return this[_values].responseId = value;
  }

  get _responseId() {
    if (!isPresent(this[_values]._responseId)) {
      const klass = require('./Element');
      this[_values]._responseId = new klass();
    }
    return this[_values]._responseId;
  }

  set _responseId(value) {
    const klass = require('./Element');
    return this[_values]._responseId = new klass(value);
  }

  get sourceId() {
    return this[_values].sourceId;
  }

  set sourceId(value) {
    return this[_values].sourceId = value;
  }

  get _sourceId() {
    if (!isPresent(this[_values]._sourceId)) {
      const klass = require('./Element');
      this[_values]._sourceId = new klass();
    }
    return this[_values]._sourceId;
  }

  set _sourceId(value) {
    const klass = require('./Element');
    return this[_values]._sourceId = new klass(value);
  }

  get targetId() {
    return this[_values].targetId;
  }

  set targetId(value) {
    return this[_values].targetId = value;
  }

  get _targetId() {
    if (!isPresent(this[_values]._targetId)) {
      const klass = require('./Element');
      this[_values]._targetId = new klass();
    }
    return this[_values]._targetId;
  }

  set _targetId(value) {
    const klass = require('./Element');
    return this[_values]._targetId = new klass(value);
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

module.exports = TestScript_Operation;

