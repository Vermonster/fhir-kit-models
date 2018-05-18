const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const Element = require('./Element');
class Period extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Period || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get start() {
    return this[_values].start;
  }
  set start(value) {
    return this[_values].start = value;
  }
  get _start() {
    if (!this[_values]._start) {
      const klass = require('./Element');
      this[_values]._start = new klass();
    }
    return this[_values]._start;
  }
  set _start(value) {
    const klass = require('./Element');
    return this[_values]._start = new klass(value);
  }
  get end() {
    return this[_values].end;
  }
  set end(value) {
    return this[_values].end = value;
  }
  get _end() {
    if (!this[_values]._end) {
      const klass = require('./Element');
      this[_values]._end = new klass();
    }
    return this[_values]._end;
  }
  set _end(value) {
    const klass = require('./Element');
    return this[_values]._end = new klass(value);
  }
}
module.exports = Period;