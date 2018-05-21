const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Address extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Address || values instanceof Element) {
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
    if (!isPresent(this[_values]._use)) {
      const klass = require('./Element');
      this[_values]._use = new klass();
    }
    return this[_values]._use;
  }

  set _use(value) {
    const klass = require('./Element');
    return this[_values]._use = new klass(value);
  }

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }

  get text() {
    return this[_values].text;
  }

  set text(value) {
    return this[_values].text = value;
  }

  get _text() {
    if (!isPresent(this[_values]._text)) {
      const klass = require('./Element');
      this[_values]._text = new klass();
    }
    return this[_values]._text;
  }

  set _text(value) {
    const klass = require('./Element');
    return this[_values]._text = new klass(value);
  }

  get line() {
    return this[_values].line;
  }

  set line(value) {
    return this[_values].line = value;
  }

  get _line() {
    if (!isPresent(this[_values]._line)) {
      const klass = require('./Element');
      this[_values]._line = ArrayProxy(klass);
    }
    return this[_values]._line;
  }

  set _line(value) {
    const klass = require('./Element');
    this[_values]._line = ArrayProxy(klass);
    value.forEach(entry => this[_values]._line.push(entry));
    return this[_values]._line;
  }

  get city() {
    return this[_values].city;
  }

  set city(value) {
    return this[_values].city = value;
  }

  get _city() {
    if (!isPresent(this[_values]._city)) {
      const klass = require('./Element');
      this[_values]._city = new klass();
    }
    return this[_values]._city;
  }

  set _city(value) {
    const klass = require('./Element');
    return this[_values]._city = new klass(value);
  }

  get district() {
    return this[_values].district;
  }

  set district(value) {
    return this[_values].district = value;
  }

  get _district() {
    if (!isPresent(this[_values]._district)) {
      const klass = require('./Element');
      this[_values]._district = new klass();
    }
    return this[_values]._district;
  }

  set _district(value) {
    const klass = require('./Element');
    return this[_values]._district = new klass(value);
  }

  get state() {
    return this[_values].state;
  }

  set state(value) {
    return this[_values].state = value;
  }

  get _state() {
    if (!isPresent(this[_values]._state)) {
      const klass = require('./Element');
      this[_values]._state = new klass();
    }
    return this[_values]._state;
  }

  set _state(value) {
    const klass = require('./Element');
    return this[_values]._state = new klass(value);
  }

  get postalCode() {
    return this[_values].postalCode;
  }

  set postalCode(value) {
    return this[_values].postalCode = value;
  }

  get _postalCode() {
    if (!isPresent(this[_values]._postalCode)) {
      const klass = require('./Element');
      this[_values]._postalCode = new klass();
    }
    return this[_values]._postalCode;
  }

  set _postalCode(value) {
    const klass = require('./Element');
    return this[_values]._postalCode = new klass(value);
  }

  get country() {
    return this[_values].country;
  }

  set country(value) {
    return this[_values].country = value;
  }

  get _country() {
    if (!isPresent(this[_values]._country)) {
      const klass = require('./Element');
      this[_values]._country = new klass();
    }
    return this[_values]._country;
  }

  set _country(value) {
    const klass = require('./Element');
    return this[_values]._country = new klass(value);
  }

  get period() {
    if (!isPresent(this[_values].period)) {
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

module.exports = Address;

