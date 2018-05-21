const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const Resource = require('./Resource');

class Parameters extends Resource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Parameters || values instanceof Resource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get parameter() {
    if (!isPresent(this[_values].parameter)) {
      const klass = require('./Parameters_Parameter');
      this[_values].parameter = ArrayProxy(klass);
    }
    return this[_values].parameter;
  }

  set parameter(value) {
    const klass = require('./Parameters_Parameter');
    this[_values].parameter = ArrayProxy(klass);
    value.forEach(entry => this[_values].parameter.push(entry));
    return this[_values].parameter;
  }
}

module.exports = Parameters;

