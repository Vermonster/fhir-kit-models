const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScript_Assert extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScript_Assert || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get direction() {
    return this[_values].direction;
  }

  set direction(value) {
    return this[_values].direction = value;
  }

  get _direction() {
    if (!isPresent(this[_values]._direction)) {
      const klass = require('./Element');
      this[_values]._direction = new klass();
    }
    return this[_values]._direction;
  }

  set _direction(value) {
    const klass = require('./Element');
    return this[_values]._direction = new klass(value);
  }

  get compareToSourceId() {
    return this[_values].compareToSourceId;
  }

  set compareToSourceId(value) {
    return this[_values].compareToSourceId = value;
  }

  get _compareToSourceId() {
    if (!isPresent(this[_values]._compareToSourceId)) {
      const klass = require('./Element');
      this[_values]._compareToSourceId = new klass();
    }
    return this[_values]._compareToSourceId;
  }

  set _compareToSourceId(value) {
    const klass = require('./Element');
    return this[_values]._compareToSourceId = new klass(value);
  }

  get compareToSourceExpression() {
    return this[_values].compareToSourceExpression;
  }

  set compareToSourceExpression(value) {
    return this[_values].compareToSourceExpression = value;
  }

  get _compareToSourceExpression() {
    if (!isPresent(this[_values]._compareToSourceExpression)) {
      const klass = require('./Element');
      this[_values]._compareToSourceExpression = new klass();
    }
    return this[_values]._compareToSourceExpression;
  }

  set _compareToSourceExpression(value) {
    const klass = require('./Element');
    return this[_values]._compareToSourceExpression = new klass(value);
  }

  get compareToSourcePath() {
    return this[_values].compareToSourcePath;
  }

  set compareToSourcePath(value) {
    return this[_values].compareToSourcePath = value;
  }

  get _compareToSourcePath() {
    if (!isPresent(this[_values]._compareToSourcePath)) {
      const klass = require('./Element');
      this[_values]._compareToSourcePath = new klass();
    }
    return this[_values]._compareToSourcePath;
  }

  set _compareToSourcePath(value) {
    const klass = require('./Element');
    return this[_values]._compareToSourcePath = new klass(value);
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

  get expression() {
    return this[_values].expression;
  }

  set expression(value) {
    return this[_values].expression = value;
  }

  get _expression() {
    if (!isPresent(this[_values]._expression)) {
      const klass = require('./Element');
      this[_values]._expression = new klass();
    }
    return this[_values]._expression;
  }

  set _expression(value) {
    const klass = require('./Element');
    return this[_values]._expression = new klass(value);
  }

  get headerField() {
    return this[_values].headerField;
  }

  set headerField(value) {
    return this[_values].headerField = value;
  }

  get _headerField() {
    if (!isPresent(this[_values]._headerField)) {
      const klass = require('./Element');
      this[_values]._headerField = new klass();
    }
    return this[_values]._headerField;
  }

  set _headerField(value) {
    const klass = require('./Element');
    return this[_values]._headerField = new klass(value);
  }

  get minimumId() {
    return this[_values].minimumId;
  }

  set minimumId(value) {
    return this[_values].minimumId = value;
  }

  get _minimumId() {
    if (!isPresent(this[_values]._minimumId)) {
      const klass = require('./Element');
      this[_values]._minimumId = new klass();
    }
    return this[_values]._minimumId;
  }

  set _minimumId(value) {
    const klass = require('./Element');
    return this[_values]._minimumId = new klass(value);
  }

  get navigationLinks() {
    return this[_values].navigationLinks;
  }

  set navigationLinks(value) {
    return this[_values].navigationLinks = value;
  }

  get _navigationLinks() {
    if (!isPresent(this[_values]._navigationLinks)) {
      const klass = require('./Element');
      this[_values]._navigationLinks = new klass();
    }
    return this[_values]._navigationLinks;
  }

  set _navigationLinks(value) {
    const klass = require('./Element');
    return this[_values]._navigationLinks = new klass(value);
  }

  get operator() {
    return this[_values].operator;
  }

  set operator(value) {
    return this[_values].operator = value;
  }

  get _operator() {
    if (!isPresent(this[_values]._operator)) {
      const klass = require('./Element');
      this[_values]._operator = new klass();
    }
    return this[_values]._operator;
  }

  set _operator(value) {
    const klass = require('./Element');
    return this[_values]._operator = new klass(value);
  }

  get path() {
    return this[_values].path;
  }

  set path(value) {
    return this[_values].path = value;
  }

  get _path() {
    if (!isPresent(this[_values]._path)) {
      const klass = require('./Element');
      this[_values]._path = new klass();
    }
    return this[_values]._path;
  }

  set _path(value) {
    const klass = require('./Element');
    return this[_values]._path = new klass(value);
  }

  get requestMethod() {
    return this[_values].requestMethod;
  }

  set requestMethod(value) {
    return this[_values].requestMethod = value;
  }

  get _requestMethod() {
    if (!isPresent(this[_values]._requestMethod)) {
      const klass = require('./Element');
      this[_values]._requestMethod = new klass();
    }
    return this[_values]._requestMethod;
  }

  set _requestMethod(value) {
    const klass = require('./Element');
    return this[_values]._requestMethod = new klass(value);
  }

  get requestURL() {
    return this[_values].requestURL;
  }

  set requestURL(value) {
    return this[_values].requestURL = value;
  }

  get _requestURL() {
    if (!isPresent(this[_values]._requestURL)) {
      const klass = require('./Element');
      this[_values]._requestURL = new klass();
    }
    return this[_values]._requestURL;
  }

  set _requestURL(value) {
    const klass = require('./Element');
    return this[_values]._requestURL = new klass(value);
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

  get response() {
    return this[_values].response;
  }

  set response(value) {
    return this[_values].response = value;
  }

  get _response() {
    if (!isPresent(this[_values]._response)) {
      const klass = require('./Element');
      this[_values]._response = new klass();
    }
    return this[_values]._response;
  }

  set _response(value) {
    const klass = require('./Element');
    return this[_values]._response = new klass(value);
  }

  get responseCode() {
    return this[_values].responseCode;
  }

  set responseCode(value) {
    return this[_values].responseCode = value;
  }

  get _responseCode() {
    if (!isPresent(this[_values]._responseCode)) {
      const klass = require('./Element');
      this[_values]._responseCode = new klass();
    }
    return this[_values]._responseCode;
  }

  set _responseCode(value) {
    const klass = require('./Element');
    return this[_values]._responseCode = new klass(value);
  }

  get rule() {
    if (!isPresent(this[_values].rule)) {
      const klass = require('./TestScript_Rule2');
      this[_values].rule = new klass();
    }
    return this[_values].rule;
  }

  set rule(value) {
    const klass = require('./TestScript_Rule2');
    return this[_values].rule = new klass(value);
  }

  get ruleset() {
    if (!isPresent(this[_values].ruleset)) {
      const klass = require('./TestScript_Ruleset1');
      this[_values].ruleset = new klass();
    }
    return this[_values].ruleset;
  }

  set ruleset(value) {
    const klass = require('./TestScript_Ruleset1');
    return this[_values].ruleset = new klass(value);
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

  get validateProfileId() {
    return this[_values].validateProfileId;
  }

  set validateProfileId(value) {
    return this[_values].validateProfileId = value;
  }

  get _validateProfileId() {
    if (!isPresent(this[_values]._validateProfileId)) {
      const klass = require('./Element');
      this[_values]._validateProfileId = new klass();
    }
    return this[_values]._validateProfileId;
  }

  set _validateProfileId(value) {
    const klass = require('./Element');
    return this[_values]._validateProfileId = new klass(value);
  }

  get value() {
    return this[_values].value;
  }

  set value(value) {
    return this[_values].value = value;
  }

  get _value() {
    if (!isPresent(this[_values]._value)) {
      const klass = require('./Element');
      this[_values]._value = new klass();
    }
    return this[_values]._value;
  }

  set _value(value) {
    const klass = require('./Element');
    return this[_values]._value = new klass(value);
  }

  get warningOnly() {
    return this[_values].warningOnly;
  }

  set warningOnly(value) {
    return this[_values].warningOnly = value;
  }

  get _warningOnly() {
    if (!isPresent(this[_values]._warningOnly)) {
      const klass = require('./Element');
      this[_values]._warningOnly = new klass();
    }
    return this[_values]._warningOnly;
  }

  set _warningOnly(value) {
    const klass = require('./Element');
    return this[_values]._warningOnly = new klass(value);
  }
}

module.exports = TestScript_Assert;

