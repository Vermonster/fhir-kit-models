const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Composition_Section extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Composition_Section || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
  }

  get text() {
    if (!isPresent(this[_values].text)) {
      const klass = require('./Narrative');
      this[_values].text = new klass();
    }
    return this[_values].text;
  }

  set text(value) {
    const klass = require('./Narrative');
    return this[_values].text = new klass(value);
  }

  get mode() {
    return this[_values].mode;
  }

  set mode(value) {
    return this[_values].mode = value;
  }

  get _mode() {
    if (!isPresent(this[_values]._mode)) {
      const klass = require('./Element');
      this[_values]._mode = new klass();
    }
    return this[_values]._mode;
  }

  set _mode(value) {
    const klass = require('./Element');
    return this[_values]._mode = new klass(value);
  }

  get orderedBy() {
    if (!isPresent(this[_values].orderedBy)) {
      const klass = require('./CodeableConcept');
      this[_values].orderedBy = new klass();
    }
    return this[_values].orderedBy;
  }

  set orderedBy(value) {
    const klass = require('./CodeableConcept');
    return this[_values].orderedBy = new klass(value);
  }

  get entry() {
    if (!isPresent(this[_values].entry)) {
      const klass = require('./Reference');
      this[_values].entry = ArrayProxy(klass);
    }
    return this[_values].entry;
  }

  set entry(value) {
    const klass = require('./Reference');
    this[_values].entry = ArrayProxy(klass);
    value.forEach(entry => this[_values].entry.push(entry));
    return this[_values].entry;
  }

  get emptyReason() {
    if (!isPresent(this[_values].emptyReason)) {
      const klass = require('./CodeableConcept');
      this[_values].emptyReason = new klass();
    }
    return this[_values].emptyReason;
  }

  set emptyReason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].emptyReason = new klass(value);
  }

  get section() {
    if (!isPresent(this[_values].section)) {
      const klass = require('./Composition_Section');
      this[_values].section = ArrayProxy(klass);
    }
    return this[_values].section;
  }

  set section(value) {
    const klass = require('./Composition_Section');
    this[_values].section = ArrayProxy(klass);
    value.forEach(entry => this[_values].section.push(entry));
    return this[_values].section;
  }
}

module.exports = Composition_Section;

