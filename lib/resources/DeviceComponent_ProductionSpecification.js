const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class DeviceComponent_ProductionSpecification extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DeviceComponent_ProductionSpecification || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get specType() {
    if (!isPresent(this[_values].specType)) {
      const klass = require('./CodeableConcept');
      this[_values].specType = new klass();
    }
    return this[_values].specType;
  }

  set specType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].specType = new klass(value);
  }

  get componentId() {
    if (!isPresent(this[_values].componentId)) {
      const klass = require('./Identifier');
      this[_values].componentId = new klass();
    }
    return this[_values].componentId;
  }

  set componentId(value) {
    const klass = require('./Identifier');
    return this[_values].componentId = new klass(value);
  }

  get productionSpec() {
    return this[_values].productionSpec;
  }

  set productionSpec(value) {
    return this[_values].productionSpec = value;
  }

  get _productionSpec() {
    if (!isPresent(this[_values]._productionSpec)) {
      const klass = require('./Element');
      this[_values]._productionSpec = new klass();
    }
    return this[_values]._productionSpec;
  }

  set _productionSpec(value) {
    const klass = require('./Element');
    return this[_values]._productionSpec = new klass(value);
  }
}

module.exports = DeviceComponent_ProductionSpecification;

