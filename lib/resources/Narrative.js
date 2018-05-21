
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Narrative extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Narrative || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get div() {
    return this[_values].div;
  }

  set div(value) {
    return this[_values].div = value;
  }
}

module.exports = Narrative;

