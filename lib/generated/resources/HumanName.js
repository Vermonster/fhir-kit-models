const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const Element = require('./Element');
class HumanName extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof HumanName || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get use() {
    return this[_values].use;
  }
  set use(value) {
    return this[_values].use = value;
  }
  get _use() {
    if (!this[_values]._use) {
      const klass = require('./Element');
      this[_values]._use = new klass();
    }
    return this[_values]._use;
  }
  set _use(value) {
    const klass = require('./Element');
    return this[_values]._use = new klass(value);
  }
  get text() {
    return this[_values].text;
  }
  set text(value) {
    return this[_values].text = value;
  }
  get _text() {
    if (!this[_values]._text) {
      const klass = require('./Element');
      this[_values]._text = new klass();
    }
    return this[_values]._text;
  }
  set _text(value) {
    const klass = require('./Element');
    return this[_values]._text = new klass(value);
  }
  get family() {
    return this[_values].family;
  }
  set family(value) {
    return this[_values].family = value;
  }
  get _family() {
    if (!this[_values]._family) {
      const klass = require('./Element');
      this[_values]._family = new klass();
    }
    return this[_values]._family;
  }
  set _family(value) {
    const klass = require('./Element');
    return this[_values]._family = new klass(value);
  }
  get given() {
    return this[_values].given;
  }
  set given(value) {
    return this[_values].given = value;
  }
  get _given() {
    if (!this[_values]._given) {
      const klass = require('./Element');
      this[_values]._given = ArrayProxy(klass);
    }
    return this[_values]._given;
  }
  set _given(value) {
    const klass = require('./Element');
    this[_values]._given = ArrayProxy(klass);
    value.forEach(entry => this[_values]._given.push(entry));
    return this[_values]._given;
  }
  get prefix() {
    return this[_values].prefix;
  }
  set prefix(value) {
    return this[_values].prefix = value;
  }
  get _prefix() {
    if (!this[_values]._prefix) {
      const klass = require('./Element');
      this[_values]._prefix = ArrayProxy(klass);
    }
    return this[_values]._prefix;
  }
  set _prefix(value) {
    const klass = require('./Element');
    this[_values]._prefix = ArrayProxy(klass);
    value.forEach(entry => this[_values]._prefix.push(entry));
    return this[_values]._prefix;
  }
  get suffix() {
    return this[_values].suffix;
  }
  set suffix(value) {
    return this[_values].suffix = value;
  }
  get _suffix() {
    if (!this[_values]._suffix) {
      const klass = require('./Element');
      this[_values]._suffix = ArrayProxy(klass);
    }
    return this[_values]._suffix;
  }
  set _suffix(value) {
    const klass = require('./Element');
    this[_values]._suffix = ArrayProxy(klass);
    value.forEach(entry => this[_values]._suffix.push(entry));
    return this[_values]._suffix;
  }
  get period() {
    if (!this[_values].period) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }
  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }
}
module.exports = HumanName;