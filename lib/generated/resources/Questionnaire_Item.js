const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class Questionnaire_Item extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Questionnaire_Item || values instanceof BackboneElement) {
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

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./Coding');
      this[_values].code = ArrayProxy(klass);
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./Coding');
    this[_values].code = ArrayProxy(klass);
    value.forEach(entry => this[_values].code.push(entry));
    return this[_values].code;
  }

  get prefix() {
    return this[_values].prefix;
  }

  set prefix(value) {
    return this[_values].prefix = value;
  }

  get _prefix() {
    if (!isPresent(this[_values]._prefix)) {
      const klass = require('./Element');
      this[_values]._prefix = new klass();
    }
    return this[_values]._prefix;
  }

  set _prefix(value) {
    const klass = require('./Element');
    return this[_values]._prefix = new klass(value);
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

  get enableWhen() {
    if (!isPresent(this[_values].enableWhen)) {
      const klass = require('./Questionnaire_EnableWhen');
      this[_values].enableWhen = ArrayProxy(klass);
    }
    return this[_values].enableWhen;
  }

  set enableWhen(value) {
    const klass = require('./Questionnaire_EnableWhen');
    this[_values].enableWhen = ArrayProxy(klass);
    value.forEach(entry => this[_values].enableWhen.push(entry));
    return this[_values].enableWhen;
  }

  get required() {
    return this[_values].required;
  }

  set required(value) {
    return this[_values].required = value;
  }

  get _required() {
    if (!isPresent(this[_values]._required)) {
      const klass = require('./Element');
      this[_values]._required = new klass();
    }
    return this[_values]._required;
  }

  set _required(value) {
    const klass = require('./Element');
    return this[_values]._required = new klass(value);
  }

  get repeats() {
    return this[_values].repeats;
  }

  set repeats(value) {
    return this[_values].repeats = value;
  }

  get _repeats() {
    if (!isPresent(this[_values]._repeats)) {
      const klass = require('./Element');
      this[_values]._repeats = new klass();
    }
    return this[_values]._repeats;
  }

  set _repeats(value) {
    const klass = require('./Element');
    return this[_values]._repeats = new klass(value);
  }

  get readOnly() {
    return this[_values].readOnly;
  }

  set readOnly(value) {
    return this[_values].readOnly = value;
  }

  get _readOnly() {
    if (!isPresent(this[_values]._readOnly)) {
      const klass = require('./Element');
      this[_values]._readOnly = new klass();
    }
    return this[_values]._readOnly;
  }

  set _readOnly(value) {
    const klass = require('./Element');
    return this[_values]._readOnly = new klass(value);
  }

  get maxLength() {
    return this[_values].maxLength;
  }

  set maxLength(value) {
    return this[_values].maxLength = value;
  }

  get _maxLength() {
    if (!isPresent(this[_values]._maxLength)) {
      const klass = require('./Element');
      this[_values]._maxLength = new klass();
    }
    return this[_values]._maxLength;
  }

  set _maxLength(value) {
    const klass = require('./Element');
    return this[_values]._maxLength = new klass(value);
  }

  get options() {
    if (!isPresent(this[_values].options)) {
      const klass = require('./Reference');
      this[_values].options = new klass();
    }
    return this[_values].options;
  }

  set options(value) {
    const klass = require('./Reference');
    return this[_values].options = new klass(value);
  }

  get option() {
    if (!isPresent(this[_values].option)) {
      const klass = require('./Questionnaire_Option');
      this[_values].option = ArrayProxy(klass);
    }
    return this[_values].option;
  }

  set option(value) {
    const klass = require('./Questionnaire_Option');
    this[_values].option = ArrayProxy(klass);
    value.forEach(entry => this[_values].option.push(entry));
    return this[_values].option;
  }

  get initialBoolean() {
    return this[_values].initialBoolean;
  }

  set initialBoolean(value) {
    return this[_values].initialBoolean = value;
  }

  get _initialBoolean() {
    if (!isPresent(this[_values]._initialBoolean)) {
      const klass = require('./Element');
      this[_values]._initialBoolean = new klass();
    }
    return this[_values]._initialBoolean;
  }

  set _initialBoolean(value) {
    const klass = require('./Element');
    return this[_values]._initialBoolean = new klass(value);
  }

  get initialDecimal() {
    return this[_values].initialDecimal;
  }

  set initialDecimal(value) {
    return this[_values].initialDecimal = value;
  }

  get _initialDecimal() {
    if (!isPresent(this[_values]._initialDecimal)) {
      const klass = require('./Element');
      this[_values]._initialDecimal = new klass();
    }
    return this[_values]._initialDecimal;
  }

  set _initialDecimal(value) {
    const klass = require('./Element');
    return this[_values]._initialDecimal = new klass(value);
  }

  get initialInteger() {
    return this[_values].initialInteger;
  }

  set initialInteger(value) {
    return this[_values].initialInteger = value;
  }

  get _initialInteger() {
    if (!isPresent(this[_values]._initialInteger)) {
      const klass = require('./Element');
      this[_values]._initialInteger = new klass();
    }
    return this[_values]._initialInteger;
  }

  set _initialInteger(value) {
    const klass = require('./Element');
    return this[_values]._initialInteger = new klass(value);
  }

  get initialDate() {
    return this[_values].initialDate;
  }

  set initialDate(value) {
    return this[_values].initialDate = value;
  }

  get _initialDate() {
    if (!isPresent(this[_values]._initialDate)) {
      const klass = require('./Element');
      this[_values]._initialDate = new klass();
    }
    return this[_values]._initialDate;
  }

  set _initialDate(value) {
    const klass = require('./Element');
    return this[_values]._initialDate = new klass(value);
  }

  get initialDateTime() {
    return this[_values].initialDateTime;
  }

  set initialDateTime(value) {
    return this[_values].initialDateTime = value;
  }

  get _initialDateTime() {
    if (!isPresent(this[_values]._initialDateTime)) {
      const klass = require('./Element');
      this[_values]._initialDateTime = new klass();
    }
    return this[_values]._initialDateTime;
  }

  set _initialDateTime(value) {
    const klass = require('./Element');
    return this[_values]._initialDateTime = new klass(value);
  }

  get initialTime() {
    return this[_values].initialTime;
  }

  set initialTime(value) {
    return this[_values].initialTime = value;
  }

  get _initialTime() {
    if (!isPresent(this[_values]._initialTime)) {
      const klass = require('./Element');
      this[_values]._initialTime = new klass();
    }
    return this[_values]._initialTime;
  }

  set _initialTime(value) {
    const klass = require('./Element');
    return this[_values]._initialTime = new klass(value);
  }

  get initialString() {
    return this[_values].initialString;
  }

  set initialString(value) {
    return this[_values].initialString = value;
  }

  get _initialString() {
    if (!isPresent(this[_values]._initialString)) {
      const klass = require('./Element');
      this[_values]._initialString = new klass();
    }
    return this[_values]._initialString;
  }

  set _initialString(value) {
    const klass = require('./Element');
    return this[_values]._initialString = new klass(value);
  }

  get initialUri() {
    return this[_values].initialUri;
  }

  set initialUri(value) {
    return this[_values].initialUri = value;
  }

  get _initialUri() {
    if (!isPresent(this[_values]._initialUri)) {
      const klass = require('./Element');
      this[_values]._initialUri = new klass();
    }
    return this[_values]._initialUri;
  }

  set _initialUri(value) {
    const klass = require('./Element');
    return this[_values]._initialUri = new klass(value);
  }

  get initialAttachment() {
    if (!isPresent(this[_values].initialAttachment)) {
      const klass = require('./Attachment');
      this[_values].initialAttachment = new klass();
    }
    return this[_values].initialAttachment;
  }

  set initialAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].initialAttachment = new klass(value);
  }

  get initialCoding() {
    if (!isPresent(this[_values].initialCoding)) {
      const klass = require('./Coding');
      this[_values].initialCoding = new klass();
    }
    return this[_values].initialCoding;
  }

  set initialCoding(value) {
    const klass = require('./Coding');
    return this[_values].initialCoding = new klass(value);
  }

  get initialQuantity() {
    if (!isPresent(this[_values].initialQuantity)) {
      const klass = require('./Quantity');
      this[_values].initialQuantity = new klass();
    }
    return this[_values].initialQuantity;
  }

  set initialQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].initialQuantity = new klass(value);
  }

  get initialReference() {
    if (!isPresent(this[_values].initialReference)) {
      const klass = require('./Reference');
      this[_values].initialReference = new klass();
    }
    return this[_values].initialReference;
  }

  set initialReference(value) {
    const klass = require('./Reference');
    return this[_values].initialReference = new klass(value);
  }

  get item() {
    if (!isPresent(this[_values].item)) {
      const klass = require('./Questionnaire_Item');
      this[_values].item = ArrayProxy(klass);
    }
    return this[_values].item;
  }

  set item(value) {
    const klass = require('./Questionnaire_Item');
    this[_values].item = ArrayProxy(klass);
    value.forEach(entry => this[_values].item.push(entry));
    return this[_values].item;
  }
}

module.exports = Questionnaire_Item;

