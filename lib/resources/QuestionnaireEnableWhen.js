
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class QuestionnaireEnableWhen extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof QuestionnaireEnableWhen ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get question() {
    return this[_values].question;
  }

  set question(value) {
    return this[_values].question = value;
  }

  get _question() {
    if (!isPresent(this[_values]._question)) {
      const klass = require('./Element');
      this[_values]._question = new klass();
    }
    return this[_values]._question;
  }

  set _question(value) {
    const klass = require('./Element');
    return this[_values]._question = new klass(value);
  }

  get hasAnswer() {
    return this[_values].hasAnswer;
  }

  set hasAnswer(value) {
    return this[_values].hasAnswer = value;
  }

  get _hasAnswer() {
    if (!isPresent(this[_values]._hasAnswer)) {
      const klass = require('./Element');
      this[_values]._hasAnswer = new klass();
    }
    return this[_values]._hasAnswer;
  }

  set _hasAnswer(value) {
    const klass = require('./Element');
    return this[_values]._hasAnswer = new klass(value);
  }

  get answerBoolean() {
    return this[_values].answerBoolean;
  }

  set answerBoolean(value) {
    return this[_values].answerBoolean = value;
  }

  get _answerBoolean() {
    if (!isPresent(this[_values]._answerBoolean)) {
      const klass = require('./Element');
      this[_values]._answerBoolean = new klass();
    }
    return this[_values]._answerBoolean;
  }

  set _answerBoolean(value) {
    const klass = require('./Element');
    return this[_values]._answerBoolean = new klass(value);
  }

  get answerDecimal() {
    return this[_values].answerDecimal;
  }

  set answerDecimal(value) {
    return this[_values].answerDecimal = value;
  }

  get _answerDecimal() {
    if (!isPresent(this[_values]._answerDecimal)) {
      const klass = require('./Element');
      this[_values]._answerDecimal = new klass();
    }
    return this[_values]._answerDecimal;
  }

  set _answerDecimal(value) {
    const klass = require('./Element');
    return this[_values]._answerDecimal = new klass(value);
  }

  get answerInteger() {
    return this[_values].answerInteger;
  }

  set answerInteger(value) {
    return this[_values].answerInteger = value;
  }

  get _answerInteger() {
    if (!isPresent(this[_values]._answerInteger)) {
      const klass = require('./Element');
      this[_values]._answerInteger = new klass();
    }
    return this[_values]._answerInteger;
  }

  set _answerInteger(value) {
    const klass = require('./Element');
    return this[_values]._answerInteger = new klass(value);
  }

  get answerDate() {
    return this[_values].answerDate;
  }

  set answerDate(value) {
    return this[_values].answerDate = value;
  }

  get _answerDate() {
    if (!isPresent(this[_values]._answerDate)) {
      const klass = require('./Element');
      this[_values]._answerDate = new klass();
    }
    return this[_values]._answerDate;
  }

  set _answerDate(value) {
    const klass = require('./Element');
    return this[_values]._answerDate = new klass(value);
  }

  get answerDateTime() {
    return this[_values].answerDateTime;
  }

  set answerDateTime(value) {
    return this[_values].answerDateTime = value;
  }

  get _answerDateTime() {
    if (!isPresent(this[_values]._answerDateTime)) {
      const klass = require('./Element');
      this[_values]._answerDateTime = new klass();
    }
    return this[_values]._answerDateTime;
  }

  set _answerDateTime(value) {
    const klass = require('./Element');
    return this[_values]._answerDateTime = new klass(value);
  }

  get answerTime() {
    return this[_values].answerTime;
  }

  set answerTime(value) {
    return this[_values].answerTime = value;
  }

  get _answerTime() {
    if (!isPresent(this[_values]._answerTime)) {
      const klass = require('./Element');
      this[_values]._answerTime = new klass();
    }
    return this[_values]._answerTime;
  }

  set _answerTime(value) {
    const klass = require('./Element');
    return this[_values]._answerTime = new klass(value);
  }

  get answerString() {
    return this[_values].answerString;
  }

  set answerString(value) {
    return this[_values].answerString = value;
  }

  get _answerString() {
    if (!isPresent(this[_values]._answerString)) {
      const klass = require('./Element');
      this[_values]._answerString = new klass();
    }
    return this[_values]._answerString;
  }

  set _answerString(value) {
    const klass = require('./Element');
    return this[_values]._answerString = new klass(value);
  }

  get answerUri() {
    return this[_values].answerUri;
  }

  set answerUri(value) {
    return this[_values].answerUri = value;
  }

  get _answerUri() {
    if (!isPresent(this[_values]._answerUri)) {
      const klass = require('./Element');
      this[_values]._answerUri = new klass();
    }
    return this[_values]._answerUri;
  }

  set _answerUri(value) {
    const klass = require('./Element');
    return this[_values]._answerUri = new klass(value);
  }

  get answerAttachment() {
    if (!isPresent(this[_values].answerAttachment)) {
      const klass = require('./Attachment');
      this[_values].answerAttachment = new klass();
    }
    return this[_values].answerAttachment;
  }

  set answerAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].answerAttachment = new klass(value);
  }

  get answerCoding() {
    if (!isPresent(this[_values].answerCoding)) {
      const klass = require('./Coding');
      this[_values].answerCoding = new klass();
    }
    return this[_values].answerCoding;
  }

  set answerCoding(value) {
    const klass = require('./Coding');
    return this[_values].answerCoding = new klass(value);
  }

  get answerQuantity() {
    if (!isPresent(this[_values].answerQuantity)) {
      const klass = require('./Quantity');
      this[_values].answerQuantity = new klass();
    }
    return this[_values].answerQuantity;
  }

  set answerQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].answerQuantity = new klass(value);
  }

  get answerReference() {
    if (!isPresent(this[_values].answerReference)) {
      const klass = require('./Reference');
      this[_values].answerReference = new klass();
    }
    return this[_values].answerReference;
  }

  set answerReference(value) {
    const klass = require('./Reference');
    return this[_values].answerReference = new klass(value);
  }
}

module.exports = QuestionnaireEnableWhen;

