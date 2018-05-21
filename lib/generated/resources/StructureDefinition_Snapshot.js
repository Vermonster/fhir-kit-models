const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class StructureDefinition_Snapshot extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureDefinition_Snapshot || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get element() {
    if (!isPresent(this[_values].element)) {
      const klass = require('./ElementDefinition');
      this[_values].element = ArrayProxy(klass);
    }
    return this[_values].element;
  }

  set element(value) {
    const klass = require('./ElementDefinition');
    this[_values].element = ArrayProxy(klass);
    value.forEach(entry => this[_values].element.push(entry));
    return this[_values].element;
  }
}

module.exports = StructureDefinition_Snapshot;

