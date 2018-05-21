const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ImplementationGuidePage extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImplementationGuidePage || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get source() {
    return this[_values].source;
  }

  set source(value) {
    return this[_values].source = value;
  }

  get _source() {
    if (!isPresent(this[_values]._source)) {
      const klass = require('./Element');
      this[_values]._source = new klass();
    }
    return this[_values]._source;
  }

  set _source(value) {
    const klass = require('./Element');
    return this[_values]._source = new klass(value);
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

  get kind() {
    return this[_values].kind;
  }

  set kind(value) {
    return this[_values].kind = value;
  }

  get _kind() {
    if (!isPresent(this[_values]._kind)) {
      const klass = require('./Element');
      this[_values]._kind = new klass();
    }
    return this[_values]._kind;
  }

  set _kind(value) {
    const klass = require('./Element');
    return this[_values]._kind = new klass(value);
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
      this[_values]._type = ArrayProxy(klass);
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    this[_values]._type = ArrayProxy(klass);
    value.forEach(entry => this[_values]._type.push(entry));
    return this[_values]._type;
  }

  get package() {
    return this[_values].package;
  }

  set package(value) {
    return this[_values].package = value;
  }

  get _package() {
    if (!isPresent(this[_values]._package)) {
      const klass = require('./Element');
      this[_values]._package = ArrayProxy(klass);
    }
    return this[_values]._package;
  }

  set _package(value) {
    const klass = require('./Element');
    this[_values]._package = ArrayProxy(klass);
    value.forEach(entry => this[_values]._package.push(entry));
    return this[_values]._package;
  }

  get format() {
    return this[_values].format;
  }

  set format(value) {
    return this[_values].format = value;
  }

  get _format() {
    if (!isPresent(this[_values]._format)) {
      const klass = require('./Element');
      this[_values]._format = new klass();
    }
    return this[_values]._format;
  }

  set _format(value) {
    const klass = require('./Element');
    return this[_values]._format = new klass(value);
  }

  get page() {
    if (!isPresent(this[_values].page)) {
      const klass = require('./ImplementationGuidePage');
      this[_values].page = ArrayProxy(klass);
    }
    return this[_values].page;
  }

  set page(value) {
    const klass = require('./ImplementationGuidePage');
    this[_values].page = ArrayProxy(klass);
    value.forEach(entry => this[_values].page.push(entry));
    return this[_values].page;
  }
}

module.exports = ImplementationGuidePage;

