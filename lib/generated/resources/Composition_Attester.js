const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Composition_Attester extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Composition_Attester || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get mode() {
    return this[_values].mode;
  }
  set mode(value) {
    return this[_values].mode = value;
  }
  get _mode() {
    if (!this[_values]._mode) {
      const klass = require('./Element');
      this[_values]._mode = ArrayProxy(klass);
    }
    return this[_values]._mode;
  }
  set _mode(value) {
    const klass = require('./Element');
    this[_values]._mode = ArrayProxy(klass);
    value.forEach(entry => this[_values]._mode.push(entry));
    return this[_values]._mode;
  }
  get time() {
    return this[_values].time;
  }
  set time(value) {
    return this[_values].time = value;
  }
  get _time() {
    if (!this[_values]._time) {
      const klass = require('./Element');
      this[_values]._time = new klass();
    }
    return this[_values]._time;
  }
  set _time(value) {
    const klass = require('./Element');
    return this[_values]._time = new klass(value);
  }
  get party() {
    if (!this[_values].party) {
      const klass = require('./Reference');
      this[_values].party = new klass();
    }
    return this[_values].party;
  }
  set party(value) {
    const klass = require('./Reference');
    return this[_values].party = new klass(value);
  }
}
module.exports = Composition_Attester;