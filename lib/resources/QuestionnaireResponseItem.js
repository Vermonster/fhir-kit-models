const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class QuestionnaireResponseItem extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof QuestionnaireResponseItem || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get linkId() {
    return this[_values].linkId;
  }

  set linkId(value) {
    return this[_values].linkId = value;
  }

  get _linkId() {
    if (!isPresent(this[_values]._linkId)) {
      const klass = require('./Element');
      this[_values]._linkId = new klass();
    }
    return this[_values]._linkId;
  }

  set _linkId(value) {
    const klass = require('./Element');
    return this[_values]._linkId = new klass(value);
  }

  get definition() {
    return this[_values].definition;
  }

  set definition(value) {
    return this[_values].definition = value;
  }

  get _definition() {
    if (!isPresent(this[_values]._definition)) {
      const klass = require('./Element');
      this[_values]._definition = new klass();
    }
    return this[_values]._definition;
  }

  set _definition(value) {
    const klass = require('./Element');
    return this[_values]._definition = new klass(value);
  }

  get text() {
    return this[_values].text;
  }

  set text(value) {
    return this[_values].text = value;
  }

  get _text() {
    if (!isPresent(this[_values]._text)) {
      const klass = require('./Element');
      this[_values]._text = new klass();
    }
    return this[_values]._text;
  }

  set _text(value) {
    const klass = require('./Element');
    return this[_values]._text = new klass(value);
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

  get answer() {
    if (!isPresent(this[_values].answer)) {
      const klass = require('./QuestionnaireResponseAnswer');
      this[_values].answer = ArrayProxy(klass);
    }
    return this[_values].answer;
  }

  set answer(value) {
    const klass = require('./QuestionnaireResponseAnswer');
    this[_values].answer = ArrayProxy(klass);
    value.forEach(entry => this[_values].answer.push(entry));
    return this[_values].answer;
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

module.exports = QuestionnaireResponseItem;

