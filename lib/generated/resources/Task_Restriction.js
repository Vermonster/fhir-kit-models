const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Task_Restriction extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Task_Restriction || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get repetitions() {
    return this[_values].repetitions;
  }
  set repetitions(value) {
    return this[_values].repetitions = value;
  }
  get _repetitions() {
    if (!this[_values]._repetitions) {
      const klass = require('./Element');
      this[_values]._repetitions = new klass();
    }
    return this[_values]._repetitions;
  }
  set _repetitions(value) {
    const klass = require('./Element');
    return this[_values]._repetitions = new klass(value);
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
  get recipient() {
    if (!this[_values].recipient) {
      const klass = require('./Reference');
      this[_values].recipient = ArrayProxy(klass);
    }
    return this[_values].recipient;
  }
  set recipient(value) {
    const klass = require('./Reference');
    this[_values].recipient = ArrayProxy(klass);
    value.forEach(entry => this[_values].recipient.push(entry));
    return this[_values].recipient;
  }
}
module.exports = Task_Restriction;