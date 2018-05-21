const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class QuestionnaireResponse extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'QuestionnaireResponse';
    if (values instanceof QuestionnaireResponse ||
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
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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

  get parent() {
    if (!isPresent(this[_values].parent)) {
      const klass = require('./Reference');
      this[_values].parent = ArrayProxy(klass);
    }
    return this[_values].parent;
  }

  set parent(value) {
    const klass = require('./Reference');
    this[_values].parent = ArrayProxy(klass);
    value.forEach(entry => this[_values].parent.push(entry));
    return this[_values].parent;
  }

  get questionnaire() {
    if (!isPresent(this[_values].questionnaire)) {
      const klass = require('./Reference');
      this[_values].questionnaire = new klass();
    }
    return this[_values].questionnaire;
  }

  set questionnaire(value) {
    const klass = require('./Reference');
    return this[_values].questionnaire = new klass(value);
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
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

  get authored() {
    return this[_values].authored;
  }

  set authored(value) {
    return this[_values].authored = value;
  }

  get _authored() {
    if (!isPresent(this[_values]._authored)) {
      const klass = require('./Element');
      this[_values]._authored = new klass();
    }
    return this[_values]._authored;
  }

  set _authored(value) {
    const klass = require('./Element');
    return this[_values]._authored = new klass(value);
  }

  get author() {
    if (!isPresent(this[_values].author)) {
      const klass = require('./Reference');
      this[_values].author = new klass();
    }
    return this[_values].author;
  }

  set author(value) {
    const klass = require('./Reference');
    return this[_values].author = new klass(value);
  }

  get source() {
    if (!isPresent(this[_values].source)) {
      const klass = require('./Reference');
      this[_values].source = new klass();
    }
    return this[_values].source;
  }

  set source(value) {
    const klass = require('./Reference');
    return this[_values].source = new klass(value);
  }

  get item() {
    if (!isPresent(this[_values].item)) {
      const klass = require('./QuestionnaireResponseItem');
      this[_values].item = ArrayProxy(klass);
    }
    return this[_values].item;
  }

  set item(value) {
    const klass = require('./QuestionnaireResponseItem');
    this[_values].item = ArrayProxy(klass);
    value.forEach(entry => this[_values].item.push(entry));
    return this[_values].item;
  }
}

module.exports = QuestionnaireResponse;

