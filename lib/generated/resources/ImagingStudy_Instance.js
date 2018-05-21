const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ImagingStudy_Instance extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImagingStudy_Instance || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get uid() {
    return this[_values].uid;
  }

  set uid(value) {
    return this[_values].uid = value;
  }

  get _uid() {
    if (!isPresent(this[_values]._uid)) {
      const klass = require('./Element');
      this[_values]._uid = new klass();
    }
    return this[_values]._uid;
  }

  set _uid(value) {
    const klass = require('./Element');
    return this[_values]._uid = new klass(value);
  }

  get number() {
    return this[_values].number;
  }

  set number(value) {
    return this[_values].number = value;
  }

  get _number() {
    if (!isPresent(this[_values]._number)) {
      const klass = require('./Element');
      this[_values]._number = new klass();
    }
    return this[_values]._number;
  }

  set _number(value) {
    const klass = require('./Element');
    return this[_values]._number = new klass(value);
  }

  get sopClass() {
    return this[_values].sopClass;
  }

  set sopClass(value) {
    return this[_values].sopClass = value;
  }

  get _sopClass() {
    if (!isPresent(this[_values]._sopClass)) {
      const klass = require('./Element');
      this[_values]._sopClass = new klass();
    }
    return this[_values]._sopClass;
  }

  set _sopClass(value) {
    const klass = require('./Element');
    return this[_values]._sopClass = new klass(value);
  }

  get title() {
    return this[_values].title;
  }

  set title(value) {
    return this[_values].title = value;
  }

  get _title() {
    if (!isPresent(this[_values]._title)) {
      const klass = require('./Element');
      this[_values]._title = new klass();
    }
    return this[_values]._title;
  }

  set _title(value) {
    const klass = require('./Element');
    return this[_values]._title = new klass(value);
  }
}

module.exports = ImagingStudy_Instance;

