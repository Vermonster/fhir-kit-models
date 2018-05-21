
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class DiagnosticReport_Image extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DiagnosticReport_Image || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get comment() {
    return this[_values].comment;
  }

  set comment(value) {
    return this[_values].comment = value;
  }

  get _comment() {
    if (!isPresent(this[_values]._comment)) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }

  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }

  get link() {
    if (!isPresent(this[_values].link)) {
      const klass = require('./Reference');
      this[_values].link = new klass();
    }
    return this[_values].link;
  }

  set link(value) {
    const klass = require('./Reference');
    return this[_values].link = new klass(value);
  }
}

module.exports = DiagnosticReport_Image;

