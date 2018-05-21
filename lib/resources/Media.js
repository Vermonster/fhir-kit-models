const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Media extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Media ||
      values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = ArrayProxy(klass);
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    this[_values].identifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].identifier.push(entry));
    return this[_values].identifier;
  }

  get basedOn() {
    if (!isPresent(this[_values].basedOn)) {
      const klass = require('./Reference');
      this[_values].basedOn = ArrayProxy(klass);
    }
    return this[_values].basedOn;
  }

  set basedOn(value) {
    const klass = require('./Reference');
    this[_values].basedOn = ArrayProxy(klass);
    value.forEach(entry => this[_values].basedOn.push(entry));
    return this[_values].basedOn;
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
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }

  get subtype() {
    if (!isPresent(this[_values].subtype)) {
      const klass = require('./CodeableConcept');
      this[_values].subtype = new klass();
    }
    return this[_values].subtype;
  }

  set subtype(value) {
    const klass = require('./CodeableConcept');
    return this[_values].subtype = new klass(value);
  }

  get view() {
    if (!isPresent(this[_values].view)) {
      const klass = require('./CodeableConcept');
      this[_values].view = new klass();
    }
    return this[_values].view;
  }

  set view(value) {
    const klass = require('./CodeableConcept');
    return this[_values].view = new klass(value);
  }

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = new klass();
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    return this[_values].subject = new klass(value);
  }

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
  }

  get occurrenceDateTime() {
    return this[_values].occurrenceDateTime;
  }

  set occurrenceDateTime(value) {
    return this[_values].occurrenceDateTime = value;
  }

  get _occurrenceDateTime() {
    if (!isPresent(this[_values]._occurrenceDateTime)) {
      const klass = require('./Element');
      this[_values]._occurrenceDateTime = new klass();
    }
    return this[_values]._occurrenceDateTime;
  }

  set _occurrenceDateTime(value) {
    const klass = require('./Element');
    return this[_values]._occurrenceDateTime = new klass(value);
  }

  get occurrencePeriod() {
    if (!isPresent(this[_values].occurrencePeriod)) {
      const klass = require('./Period');
      this[_values].occurrencePeriod = new klass();
    }
    return this[_values].occurrencePeriod;
  }

  set occurrencePeriod(value) {
    const klass = require('./Period');
    return this[_values].occurrencePeriod = new klass(value);
  }

  get operator() {
    if (!isPresent(this[_values].operator)) {
      const klass = require('./Reference');
      this[_values].operator = new klass();
    }
    return this[_values].operator;
  }

  set operator(value) {
    const klass = require('./Reference');
    return this[_values].operator = new klass(value);
  }

  get reasonCode() {
    if (!isPresent(this[_values].reasonCode)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCode = ArrayProxy(klass);
    }
    return this[_values].reasonCode;
  }

  set reasonCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].reasonCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonCode.push(entry));
    return this[_values].reasonCode;
  }

  get bodySite() {
    if (!isPresent(this[_values].bodySite)) {
      const klass = require('./CodeableConcept');
      this[_values].bodySite = new klass();
    }
    return this[_values].bodySite;
  }

  set bodySite(value) {
    const klass = require('./CodeableConcept');
    return this[_values].bodySite = new klass(value);
  }

  get device() {
    if (!isPresent(this[_values].device)) {
      const klass = require('./Reference');
      this[_values].device = new klass();
    }
    return this[_values].device;
  }

  set device(value) {
    const klass = require('./Reference');
    return this[_values].device = new klass(value);
  }

  get height() {
    return this[_values].height;
  }

  set height(value) {
    return this[_values].height = value;
  }

  get _height() {
    if (!isPresent(this[_values]._height)) {
      const klass = require('./Element');
      this[_values]._height = new klass();
    }
    return this[_values]._height;
  }

  set _height(value) {
    const klass = require('./Element');
    return this[_values]._height = new klass(value);
  }

  get width() {
    return this[_values].width;
  }

  set width(value) {
    return this[_values].width = value;
  }

  get _width() {
    if (!isPresent(this[_values]._width)) {
      const klass = require('./Element');
      this[_values]._width = new klass();
    }
    return this[_values]._width;
  }

  set _width(value) {
    const klass = require('./Element');
    return this[_values]._width = new klass(value);
  }

  get frames() {
    return this[_values].frames;
  }

  set frames(value) {
    return this[_values].frames = value;
  }

  get _frames() {
    if (!isPresent(this[_values]._frames)) {
      const klass = require('./Element');
      this[_values]._frames = new klass();
    }
    return this[_values]._frames;
  }

  set _frames(value) {
    const klass = require('./Element');
    return this[_values]._frames = new klass(value);
  }

  get duration() {
    return this[_values].duration;
  }

  set duration(value) {
    return this[_values].duration = value;
  }

  get _duration() {
    if (!isPresent(this[_values]._duration)) {
      const klass = require('./Element');
      this[_values]._duration = new klass();
    }
    return this[_values]._duration;
  }

  set _duration(value) {
    const klass = require('./Element');
    return this[_values]._duration = new klass(value);
  }

  get content() {
    if (!isPresent(this[_values].content)) {
      const klass = require('./Attachment');
      this[_values].content = new klass();
    }
    return this[_values].content;
  }

  set content(value) {
    const klass = require('./Attachment');
    return this[_values].content = new klass(value);
  }

  get note() {
    if (!isPresent(this[_values].note)) {
      const klass = require('./Annotation');
      this[_values].note = ArrayProxy(klass);
    }
    return this[_values].note;
  }

  set note(value) {
    const klass = require('./Annotation');
    this[_values].note = ArrayProxy(klass);
    value.forEach(entry => this[_values].note.push(entry));
    return this[_values].note;
  }
}

module.exports = Media;

