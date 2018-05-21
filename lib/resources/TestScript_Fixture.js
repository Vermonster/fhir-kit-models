const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScript_Fixture extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScript_Fixture || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get autocreate() {
    return this[_values].autocreate;
  }

  set autocreate(value) {
    return this[_values].autocreate = value;
  }

  get _autocreate() {
    if (!isPresent(this[_values]._autocreate)) {
      const klass = require('./Element');
      this[_values]._autocreate = new klass();
    }
    return this[_values]._autocreate;
  }

  set _autocreate(value) {
    const klass = require('./Element');
    return this[_values]._autocreate = new klass(value);
  }

  get autodelete() {
    return this[_values].autodelete;
  }

  set autodelete(value) {
    return this[_values].autodelete = value;
  }

  get _autodelete() {
    if (!isPresent(this[_values]._autodelete)) {
      const klass = require('./Element');
      this[_values]._autodelete = new klass();
    }
    return this[_values]._autodelete;
  }

  set _autodelete(value) {
    const klass = require('./Element');
    return this[_values]._autodelete = new klass(value);
  }

  get resource() {
    if (!isPresent(this[_values].resource)) {
      const klass = require('./Reference');
      this[_values].resource = new klass();
    }
    return this[_values].resource;
  }

  set resource(value) {
    const klass = require('./Reference');
    return this[_values].resource = new klass(value);
  }
}

module.exports = TestScript_Fixture;

