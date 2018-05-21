
const { isPresent, _values } = require('../helpers');

const Resource = require('./Resource');

class Binary extends Resource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'Binary';
    if (values instanceof Binary ||
      values instanceof Resource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
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

  get securityContext() {
    if (!isPresent(this[_values].securityContext)) {
      const klass = require('./Reference');
      this[_values].securityContext = new klass();
    }
    return this[_values].securityContext;
  }

  set securityContext(value) {
    const klass = require('./Reference');
    return this[_values].securityContext = new klass(value);
  }

  get content() {
    return this[_values].content;
  }

  set content(value) {
    return this[_values].content = value;
  }

  get _content() {
    if (!isPresent(this[_values]._content)) {
      const klass = require('./Element');
      this[_values]._content = new klass();
    }
    return this[_values]._content;
  }

  set _content(value) {
    const klass = require('./Element');
    return this[_values]._content = new klass(value);
  }
}

module.exports = Binary;

