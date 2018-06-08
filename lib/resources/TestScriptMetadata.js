const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScriptMetadata extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScriptMetadata ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get link() {
    if (!isPresent(this[_values].link)) {
      const klass = require('./TestScriptLink');
      this[_values].link = ArrayProxy(klass);
    }
    return this[_values].link;
  }

  set link(value) {
    const klass = require('./TestScriptLink');
    this[_values].link = ArrayProxy(klass);
    value.forEach(entry => this[_values].link.push(entry));
    return this[_values].link;
  }

  get capability() {
    if (!isPresent(this[_values].capability)) {
      const klass = require('./TestScriptCapability');
      this[_values].capability = ArrayProxy(klass);
    }
    return this[_values].capability;
  }

  set capability(value) {
    const klass = require('./TestScriptCapability');
    this[_values].capability = ArrayProxy(klass);
    value.forEach(entry => this[_values].capability.push(entry));
    return this[_values].capability;
  }
}

module.exports = TestScriptMetadata;

