
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CapabilityStatementEvent extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatementEvent ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./Coding');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./Coding');
    return this[_values].code = new klass(value);
  }

  get category() {
    return this[_values].category;
  }

  set category(value) {
    return this[_values].category = value;
  }

  get _category() {
    if (!isPresent(this[_values]._category)) {
      const klass = require('./Element');
      this[_values]._category = new klass();
    }
    return this[_values]._category;
  }

  set _category(value) {
    const klass = require('./Element');
    return this[_values]._category = new klass(value);
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

  get focus() {
    return this[_values].focus;
  }

  set focus(value) {
    return this[_values].focus = value;
  }

  get _focus() {
    if (!isPresent(this[_values]._focus)) {
      const klass = require('./Element');
      this[_values]._focus = new klass();
    }
    return this[_values]._focus;
  }

  set _focus(value) {
    const klass = require('./Element');
    return this[_values]._focus = new klass(value);
  }

  get request() {
    if (!isPresent(this[_values].request)) {
      const klass = require('./Reference');
      this[_values].request = new klass();
    }
    return this[_values].request;
  }

  set request(value) {
    const klass = require('./Reference');
    return this[_values].request = new klass(value);
  }

  get response() {
    if (!isPresent(this[_values].response)) {
      const klass = require('./Reference');
      this[_values].response = new klass();
    }
    return this[_values].response;
  }

  set response(value) {
    const klass = require('./Reference');
    return this[_values].response = new klass(value);
  }

  get documentation() {
    return this[_values].documentation;
  }

  set documentation(value) {
    return this[_values].documentation = value;
  }

  get _documentation() {
    if (!isPresent(this[_values]._documentation)) {
      const klass = require('./Element');
      this[_values]._documentation = new klass();
    }
    return this[_values]._documentation;
  }

  set _documentation(value) {
    const klass = require('./Element');
    return this[_values]._documentation = new klass(value);
  }
}

module.exports = CapabilityStatementEvent;

