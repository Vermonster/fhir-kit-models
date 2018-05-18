const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const Element = require('./Element');
class ElementDefinition extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ElementDefinition || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get path() {
    return this[_values].path;
  }
  set path(value) {
    return this[_values].path = value;
  }
  get _path() {
    if (!this[_values]._path) {
      const klass = require('./Element');
      this[_values]._path = new klass();
    }
    return this[_values]._path;
  }
  set _path(value) {
    const klass = require('./Element');
    return this[_values]._path = new klass(value);
  }
  get representation() {
    return this[_values].representation;
  }
  set representation(value) {
    return this[_values].representation = value;
  }
  get _representation() {
    if (!this[_values]._representation) {
      const klass = require('./Element');
      this[_values]._representation = ArrayProxy(klass);
    }
    return this[_values]._representation;
  }
  set _representation(value) {
    const klass = require('./Element');
    this[_values]._representation = ArrayProxy(klass);
    value.forEach(entry => this[_values]._representation.push(entry));
    return this[_values]._representation;
  }
  get sliceName() {
    return this[_values].sliceName;
  }
  set sliceName(value) {
    return this[_values].sliceName = value;
  }
  get _sliceName() {
    if (!this[_values]._sliceName) {
      const klass = require('./Element');
      this[_values]._sliceName = new klass();
    }
    return this[_values]._sliceName;
  }
  set _sliceName(value) {
    const klass = require('./Element');
    return this[_values]._sliceName = new klass(value);
  }
  get label() {
    return this[_values].label;
  }
  set label(value) {
    return this[_values].label = value;
  }
  get _label() {
    if (!this[_values]._label) {
      const klass = require('./Element');
      this[_values]._label = new klass();
    }
    return this[_values]._label;
  }
  set _label(value) {
    const klass = require('./Element');
    return this[_values]._label = new klass(value);
  }
  get code() {
    if (!this[_values].code) {
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
  get slicing() {
    if (!this[_values].slicing) {
      const klass = require('./ElementDefinition_Slicing');
      this[_values].slicing = new klass();
    }
    return this[_values].slicing;
  }
  set slicing(value) {
    const klass = require('./ElementDefinition_Slicing');
    return this[_values].slicing = new klass(value);
  }
  get short() {
    return this[_values].short;
  }
  set short(value) {
    return this[_values].short = value;
  }
  get _short() {
    if (!this[_values]._short) {
      const klass = require('./Element');
      this[_values]._short = new klass();
    }
    return this[_values]._short;
  }
  set _short(value) {
    const klass = require('./Element');
    return this[_values]._short = new klass(value);
  }
  get definition() {
    return this[_values].definition;
  }
  set definition(value) {
    return this[_values].definition = value;
  }
  get _definition() {
    if (!this[_values]._definition) {
      const klass = require('./Element');
      this[_values]._definition = new klass();
    }
    return this[_values]._definition;
  }
  set _definition(value) {
    const klass = require('./Element');
    return this[_values]._definition = new klass(value);
  }
  get comment() {
    return this[_values].comment;
  }
  set comment(value) {
    return this[_values].comment = value;
  }
  get _comment() {
    if (!this[_values]._comment) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }
  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }
  get requirements() {
    return this[_values].requirements;
  }
  set requirements(value) {
    return this[_values].requirements = value;
  }
  get _requirements() {
    if (!this[_values]._requirements) {
      const klass = require('./Element');
      this[_values]._requirements = new klass();
    }
    return this[_values]._requirements;
  }
  set _requirements(value) {
    const klass = require('./Element');
    return this[_values]._requirements = new klass(value);
  }
  get alias() {
    return this[_values].alias;
  }
  set alias(value) {
    return this[_values].alias = value;
  }
  get _alias() {
    if (!this[_values]._alias) {
      const klass = require('./Element');
      this[_values]._alias = ArrayProxy(klass);
    }
    return this[_values]._alias;
  }
  set _alias(value) {
    const klass = require('./Element');
    this[_values]._alias = ArrayProxy(klass);
    value.forEach(entry => this[_values]._alias.push(entry));
    return this[_values]._alias;
  }
  get min() {
    return this[_values].min;
  }
  set min(value) {
    return this[_values].min = value;
  }
  get _min() {
    if (!this[_values]._min) {
      const klass = require('./Element');
      this[_values]._min = new klass();
    }
    return this[_values]._min;
  }
  set _min(value) {
    const klass = require('./Element');
    return this[_values]._min = new klass(value);
  }
  get max() {
    return this[_values].max;
  }
  set max(value) {
    return this[_values].max = value;
  }
  get _max() {
    if (!this[_values]._max) {
      const klass = require('./Element');
      this[_values]._max = new klass();
    }
    return this[_values]._max;
  }
  set _max(value) {
    const klass = require('./Element');
    return this[_values]._max = new klass(value);
  }
  get base() {
    if (!this[_values].base) {
      const klass = require('./ElementDefinition_Base');
      this[_values].base = new klass();
    }
    return this[_values].base;
  }
  set base(value) {
    const klass = require('./ElementDefinition_Base');
    return this[_values].base = new klass(value);
  }
  get contentReference() {
    return this[_values].contentReference;
  }
  set contentReference(value) {
    return this[_values].contentReference = value;
  }
  get _contentReference() {
    if (!this[_values]._contentReference) {
      const klass = require('./Element');
      this[_values]._contentReference = new klass();
    }
    return this[_values]._contentReference;
  }
  set _contentReference(value) {
    const klass = require('./Element');
    return this[_values]._contentReference = new klass(value);
  }
  get type() {
    if (!this[_values].type) {
      const klass = require('./ElementDefinition_Type');
      this[_values].type = ArrayProxy(klass);
    }
    return this[_values].type;
  }
  set type(value) {
    const klass = require('./ElementDefinition_Type');
    this[_values].type = ArrayProxy(klass);
    value.forEach(entry => this[_values].type.push(entry));
    return this[_values].type;
  }
  get defaultValueBoolean() {
    return this[_values].defaultValueBoolean;
  }
  set defaultValueBoolean(value) {
    return this[_values].defaultValueBoolean = value;
  }
  get _defaultValueBoolean() {
    if (!this[_values]._defaultValueBoolean) {
      const klass = require('./Element');
      this[_values]._defaultValueBoolean = new klass();
    }
    return this[_values]._defaultValueBoolean;
  }
  set _defaultValueBoolean(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueBoolean = new klass(value);
  }
  get defaultValueInteger() {
    return this[_values].defaultValueInteger;
  }
  set defaultValueInteger(value) {
    return this[_values].defaultValueInteger = value;
  }
  get _defaultValueInteger() {
    if (!this[_values]._defaultValueInteger) {
      const klass = require('./Element');
      this[_values]._defaultValueInteger = new klass();
    }
    return this[_values]._defaultValueInteger;
  }
  set _defaultValueInteger(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueInteger = new klass(value);
  }
  get defaultValueDecimal() {
    return this[_values].defaultValueDecimal;
  }
  set defaultValueDecimal(value) {
    return this[_values].defaultValueDecimal = value;
  }
  get _defaultValueDecimal() {
    if (!this[_values]._defaultValueDecimal) {
      const klass = require('./Element');
      this[_values]._defaultValueDecimal = new klass();
    }
    return this[_values]._defaultValueDecimal;
  }
  set _defaultValueDecimal(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueDecimal = new klass(value);
  }
  get defaultValueBase64Binary() {
    return this[_values].defaultValueBase64Binary;
  }
  set defaultValueBase64Binary(value) {
    return this[_values].defaultValueBase64Binary = value;
  }
  get _defaultValueBase64Binary() {
    if (!this[_values]._defaultValueBase64Binary) {
      const klass = require('./Element');
      this[_values]._defaultValueBase64Binary = new klass();
    }
    return this[_values]._defaultValueBase64Binary;
  }
  set _defaultValueBase64Binary(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueBase64Binary = new klass(value);
  }
  get defaultValueInstant() {
    return this[_values].defaultValueInstant;
  }
  set defaultValueInstant(value) {
    return this[_values].defaultValueInstant = value;
  }
  get _defaultValueInstant() {
    if (!this[_values]._defaultValueInstant) {
      const klass = require('./Element');
      this[_values]._defaultValueInstant = new klass();
    }
    return this[_values]._defaultValueInstant;
  }
  set _defaultValueInstant(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueInstant = new klass(value);
  }
  get defaultValueString() {
    return this[_values].defaultValueString;
  }
  set defaultValueString(value) {
    return this[_values].defaultValueString = value;
  }
  get _defaultValueString() {
    if (!this[_values]._defaultValueString) {
      const klass = require('./Element');
      this[_values]._defaultValueString = new klass();
    }
    return this[_values]._defaultValueString;
  }
  set _defaultValueString(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueString = new klass(value);
  }
  get defaultValueUri() {
    return this[_values].defaultValueUri;
  }
  set defaultValueUri(value) {
    return this[_values].defaultValueUri = value;
  }
  get _defaultValueUri() {
    if (!this[_values]._defaultValueUri) {
      const klass = require('./Element');
      this[_values]._defaultValueUri = new klass();
    }
    return this[_values]._defaultValueUri;
  }
  set _defaultValueUri(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueUri = new klass(value);
  }
  get defaultValueDate() {
    return this[_values].defaultValueDate;
  }
  set defaultValueDate(value) {
    return this[_values].defaultValueDate = value;
  }
  get _defaultValueDate() {
    if (!this[_values]._defaultValueDate) {
      const klass = require('./Element');
      this[_values]._defaultValueDate = new klass();
    }
    return this[_values]._defaultValueDate;
  }
  set _defaultValueDate(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueDate = new klass(value);
  }
  get defaultValueDateTime() {
    return this[_values].defaultValueDateTime;
  }
  set defaultValueDateTime(value) {
    return this[_values].defaultValueDateTime = value;
  }
  get _defaultValueDateTime() {
    if (!this[_values]._defaultValueDateTime) {
      const klass = require('./Element');
      this[_values]._defaultValueDateTime = new klass();
    }
    return this[_values]._defaultValueDateTime;
  }
  set _defaultValueDateTime(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueDateTime = new klass(value);
  }
  get defaultValueTime() {
    return this[_values].defaultValueTime;
  }
  set defaultValueTime(value) {
    return this[_values].defaultValueTime = value;
  }
  get _defaultValueTime() {
    if (!this[_values]._defaultValueTime) {
      const klass = require('./Element');
      this[_values]._defaultValueTime = new klass();
    }
    return this[_values]._defaultValueTime;
  }
  set _defaultValueTime(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueTime = new klass(value);
  }
  get defaultValueCode() {
    return this[_values].defaultValueCode;
  }
  set defaultValueCode(value) {
    return this[_values].defaultValueCode = value;
  }
  get _defaultValueCode() {
    if (!this[_values]._defaultValueCode) {
      const klass = require('./Element');
      this[_values]._defaultValueCode = new klass();
    }
    return this[_values]._defaultValueCode;
  }
  set _defaultValueCode(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueCode = new klass(value);
  }
  get defaultValueOid() {
    return this[_values].defaultValueOid;
  }
  set defaultValueOid(value) {
    return this[_values].defaultValueOid = value;
  }
  get _defaultValueOid() {
    if (!this[_values]._defaultValueOid) {
      const klass = require('./Element');
      this[_values]._defaultValueOid = new klass();
    }
    return this[_values]._defaultValueOid;
  }
  set _defaultValueOid(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueOid = new klass(value);
  }
  get defaultValueUuid() {
    return this[_values].defaultValueUuid;
  }
  set defaultValueUuid(value) {
    return this[_values].defaultValueUuid = value;
  }
  get _defaultValueUuid() {
    if (!this[_values]._defaultValueUuid) {
      const klass = require('./Element');
      this[_values]._defaultValueUuid = new klass();
    }
    return this[_values]._defaultValueUuid;
  }
  set _defaultValueUuid(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueUuid = new klass(value);
  }
  get defaultValueId() {
    return this[_values].defaultValueId;
  }
  set defaultValueId(value) {
    return this[_values].defaultValueId = value;
  }
  get _defaultValueId() {
    if (!this[_values]._defaultValueId) {
      const klass = require('./Element');
      this[_values]._defaultValueId = new klass();
    }
    return this[_values]._defaultValueId;
  }
  set _defaultValueId(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueId = new klass(value);
  }
  get defaultValueUnsignedInt() {
    return this[_values].defaultValueUnsignedInt;
  }
  set defaultValueUnsignedInt(value) {
    return this[_values].defaultValueUnsignedInt = value;
  }
  get _defaultValueUnsignedInt() {
    if (!this[_values]._defaultValueUnsignedInt) {
      const klass = require('./Element');
      this[_values]._defaultValueUnsignedInt = new klass();
    }
    return this[_values]._defaultValueUnsignedInt;
  }
  set _defaultValueUnsignedInt(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueUnsignedInt = new klass(value);
  }
  get defaultValuePositiveInt() {
    return this[_values].defaultValuePositiveInt;
  }
  set defaultValuePositiveInt(value) {
    return this[_values].defaultValuePositiveInt = value;
  }
  get _defaultValuePositiveInt() {
    if (!this[_values]._defaultValuePositiveInt) {
      const klass = require('./Element');
      this[_values]._defaultValuePositiveInt = new klass();
    }
    return this[_values]._defaultValuePositiveInt;
  }
  set _defaultValuePositiveInt(value) {
    const klass = require('./Element');
    return this[_values]._defaultValuePositiveInt = new klass(value);
  }
  get defaultValueMarkdown() {
    return this[_values].defaultValueMarkdown;
  }
  set defaultValueMarkdown(value) {
    return this[_values].defaultValueMarkdown = value;
  }
  get _defaultValueMarkdown() {
    if (!this[_values]._defaultValueMarkdown) {
      const klass = require('./Element');
      this[_values]._defaultValueMarkdown = new klass();
    }
    return this[_values]._defaultValueMarkdown;
  }
  set _defaultValueMarkdown(value) {
    const klass = require('./Element');
    return this[_values]._defaultValueMarkdown = new klass(value);
  }
  get defaultValueElement() {
    if (!this[_values].defaultValueElement) {
      const klass = require('./Element');
      this[_values].defaultValueElement = new klass();
    }
    return this[_values].defaultValueElement;
  }
  set defaultValueElement(value) {
    const klass = require('./Element');
    return this[_values].defaultValueElement = new klass(value);
  }
  get defaultValueExtension() {
    if (!this[_values].defaultValueExtension) {
      const klass = require('./Extension');
      this[_values].defaultValueExtension = new klass();
    }
    return this[_values].defaultValueExtension;
  }
  set defaultValueExtension(value) {
    const klass = require('./Extension');
    return this[_values].defaultValueExtension = new klass(value);
  }
  get defaultValueBackboneElement() {
    if (!this[_values].defaultValueBackboneElement) {
      const klass = require('./BackboneElement');
      this[_values].defaultValueBackboneElement = new klass();
    }
    return this[_values].defaultValueBackboneElement;
  }
  set defaultValueBackboneElement(value) {
    const klass = require('./BackboneElement');
    return this[_values].defaultValueBackboneElement = new klass(value);
  }
  get defaultValueNarrative() {
    if (!this[_values].defaultValueNarrative) {
      const klass = require('./Narrative');
      this[_values].defaultValueNarrative = new klass();
    }
    return this[_values].defaultValueNarrative;
  }
  set defaultValueNarrative(value) {
    const klass = require('./Narrative');
    return this[_values].defaultValueNarrative = new klass(value);
  }
  get defaultValueAnnotation() {
    if (!this[_values].defaultValueAnnotation) {
      const klass = require('./Annotation');
      this[_values].defaultValueAnnotation = new klass();
    }
    return this[_values].defaultValueAnnotation;
  }
  set defaultValueAnnotation(value) {
    const klass = require('./Annotation');
    return this[_values].defaultValueAnnotation = new klass(value);
  }
  get defaultValueAttachment() {
    if (!this[_values].defaultValueAttachment) {
      const klass = require('./Attachment');
      this[_values].defaultValueAttachment = new klass();
    }
    return this[_values].defaultValueAttachment;
  }
  set defaultValueAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].defaultValueAttachment = new klass(value);
  }
  get defaultValueIdentifier() {
    if (!this[_values].defaultValueIdentifier) {
      const klass = require('./Identifier');
      this[_values].defaultValueIdentifier = new klass();
    }
    return this[_values].defaultValueIdentifier;
  }
  set defaultValueIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].defaultValueIdentifier = new klass(value);
  }
  get defaultValueCodeableConcept() {
    if (!this[_values].defaultValueCodeableConcept) {
      const klass = require('./CodeableConcept');
      this[_values].defaultValueCodeableConcept = new klass();
    }
    return this[_values].defaultValueCodeableConcept;
  }
  set defaultValueCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].defaultValueCodeableConcept = new klass(value);
  }
  get defaultValueCoding() {
    if (!this[_values].defaultValueCoding) {
      const klass = require('./Coding');
      this[_values].defaultValueCoding = new klass();
    }
    return this[_values].defaultValueCoding;
  }
  set defaultValueCoding(value) {
    const klass = require('./Coding');
    return this[_values].defaultValueCoding = new klass(value);
  }
  get defaultValueQuantity() {
    if (!this[_values].defaultValueQuantity) {
      const klass = require('./Quantity');
      this[_values].defaultValueQuantity = new klass();
    }
    return this[_values].defaultValueQuantity;
  }
  set defaultValueQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].defaultValueQuantity = new klass(value);
  }
  get defaultValueDuration() {
    if (!this[_values].defaultValueDuration) {
      const klass = require('./Duration');
      this[_values].defaultValueDuration = new klass();
    }
    return this[_values].defaultValueDuration;
  }
  set defaultValueDuration(value) {
    const klass = require('./Duration');
    return this[_values].defaultValueDuration = new klass(value);
  }
  get defaultValueSimpleQuantity() {
    if (!this[_values].defaultValueSimpleQuantity) {
      const klass = require('./Quantity');
      this[_values].defaultValueSimpleQuantity = new klass();
    }
    return this[_values].defaultValueSimpleQuantity;
  }
  set defaultValueSimpleQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].defaultValueSimpleQuantity = new klass(value);
  }
  get defaultValueDistance() {
    if (!this[_values].defaultValueDistance) {
      const klass = require('./Distance');
      this[_values].defaultValueDistance = new klass();
    }
    return this[_values].defaultValueDistance;
  }
  set defaultValueDistance(value) {
    const klass = require('./Distance');
    return this[_values].defaultValueDistance = new klass(value);
  }
  get defaultValueCount() {
    if (!this[_values].defaultValueCount) {
      const klass = require('./Count');
      this[_values].defaultValueCount = new klass();
    }
    return this[_values].defaultValueCount;
  }
  set defaultValueCount(value) {
    const klass = require('./Count');
    return this[_values].defaultValueCount = new klass(value);
  }
  get defaultValueMoney() {
    if (!this[_values].defaultValueMoney) {
      const klass = require('./Money');
      this[_values].defaultValueMoney = new klass();
    }
    return this[_values].defaultValueMoney;
  }
  set defaultValueMoney(value) {
    const klass = require('./Money');
    return this[_values].defaultValueMoney = new klass(value);
  }
  get defaultValueAge() {
    if (!this[_values].defaultValueAge) {
      const klass = require('./Age');
      this[_values].defaultValueAge = new klass();
    }
    return this[_values].defaultValueAge;
  }
  set defaultValueAge(value) {
    const klass = require('./Age');
    return this[_values].defaultValueAge = new klass(value);
  }
  get defaultValueRange() {
    if (!this[_values].defaultValueRange) {
      const klass = require('./Range');
      this[_values].defaultValueRange = new klass();
    }
    return this[_values].defaultValueRange;
  }
  set defaultValueRange(value) {
    const klass = require('./Range');
    return this[_values].defaultValueRange = new klass(value);
  }
  get defaultValuePeriod() {
    if (!this[_values].defaultValuePeriod) {
      const klass = require('./Period');
      this[_values].defaultValuePeriod = new klass();
    }
    return this[_values].defaultValuePeriod;
  }
  set defaultValuePeriod(value) {
    const klass = require('./Period');
    return this[_values].defaultValuePeriod = new klass(value);
  }
  get defaultValueRatio() {
    if (!this[_values].defaultValueRatio) {
      const klass = require('./Ratio');
      this[_values].defaultValueRatio = new klass();
    }
    return this[_values].defaultValueRatio;
  }
  set defaultValueRatio(value) {
    const klass = require('./Ratio');
    return this[_values].defaultValueRatio = new klass(value);
  }
  get defaultValueReference() {
    if (!this[_values].defaultValueReference) {
      const klass = require('./Reference');
      this[_values].defaultValueReference = new klass();
    }
    return this[_values].defaultValueReference;
  }
  set defaultValueReference(value) {
    const klass = require('./Reference');
    return this[_values].defaultValueReference = new klass(value);
  }
  get defaultValueSampledData() {
    if (!this[_values].defaultValueSampledData) {
      const klass = require('./SampledData');
      this[_values].defaultValueSampledData = new klass();
    }
    return this[_values].defaultValueSampledData;
  }
  set defaultValueSampledData(value) {
    const klass = require('./SampledData');
    return this[_values].defaultValueSampledData = new klass(value);
  }
  get defaultValueSignature() {
    if (!this[_values].defaultValueSignature) {
      const klass = require('./Signature');
      this[_values].defaultValueSignature = new klass();
    }
    return this[_values].defaultValueSignature;
  }
  set defaultValueSignature(value) {
    const klass = require('./Signature');
    return this[_values].defaultValueSignature = new klass(value);
  }
  get defaultValueHumanName() {
    if (!this[_values].defaultValueHumanName) {
      const klass = require('./HumanName');
      this[_values].defaultValueHumanName = new klass();
    }
    return this[_values].defaultValueHumanName;
  }
  set defaultValueHumanName(value) {
    const klass = require('./HumanName');
    return this[_values].defaultValueHumanName = new klass(value);
  }
  get defaultValueAddress() {
    if (!this[_values].defaultValueAddress) {
      const klass = require('./Address');
      this[_values].defaultValueAddress = new klass();
    }
    return this[_values].defaultValueAddress;
  }
  set defaultValueAddress(value) {
    const klass = require('./Address');
    return this[_values].defaultValueAddress = new klass(value);
  }
  get defaultValueContactPoint() {
    if (!this[_values].defaultValueContactPoint) {
      const klass = require('./ContactPoint');
      this[_values].defaultValueContactPoint = new klass();
    }
    return this[_values].defaultValueContactPoint;
  }
  set defaultValueContactPoint(value) {
    const klass = require('./ContactPoint');
    return this[_values].defaultValueContactPoint = new klass(value);
  }
  get defaultValueTiming() {
    if (!this[_values].defaultValueTiming) {
      const klass = require('./Timing');
      this[_values].defaultValueTiming = new klass();
    }
    return this[_values].defaultValueTiming;
  }
  set defaultValueTiming(value) {
    const klass = require('./Timing');
    return this[_values].defaultValueTiming = new klass(value);
  }
  get defaultValueMeta() {
    if (!this[_values].defaultValueMeta) {
      const klass = require('./Meta');
      this[_values].defaultValueMeta = new klass();
    }
    return this[_values].defaultValueMeta;
  }
  set defaultValueMeta(value) {
    const klass = require('./Meta');
    return this[_values].defaultValueMeta = new klass(value);
  }
  get defaultValueElementDefinition() {
    if (!this[_values].defaultValueElementDefinition) {
      const klass = require('./ElementDefinition');
      this[_values].defaultValueElementDefinition = new klass();
    }
    return this[_values].defaultValueElementDefinition;
  }
  set defaultValueElementDefinition(value) {
    const klass = require('./ElementDefinition');
    return this[_values].defaultValueElementDefinition = new klass(value);
  }
  get defaultValueContactDetail() {
    if (!this[_values].defaultValueContactDetail) {
      const klass = require('./ContactDetail');
      this[_values].defaultValueContactDetail = new klass();
    }
    return this[_values].defaultValueContactDetail;
  }
  set defaultValueContactDetail(value) {
    const klass = require('./ContactDetail');
    return this[_values].defaultValueContactDetail = new klass(value);
  }
  get defaultValueContributor() {
    if (!this[_values].defaultValueContributor) {
      const klass = require('./Contributor');
      this[_values].defaultValueContributor = new klass();
    }
    return this[_values].defaultValueContributor;
  }
  set defaultValueContributor(value) {
    const klass = require('./Contributor');
    return this[_values].defaultValueContributor = new klass(value);
  }
  get defaultValueDosage() {
    if (!this[_values].defaultValueDosage) {
      const klass = require('./Dosage');
      this[_values].defaultValueDosage = new klass();
    }
    return this[_values].defaultValueDosage;
  }
  set defaultValueDosage(value) {
    const klass = require('./Dosage');
    return this[_values].defaultValueDosage = new klass(value);
  }
  get defaultValueRelatedArtifact() {
    if (!this[_values].defaultValueRelatedArtifact) {
      const klass = require('./RelatedArtifact');
      this[_values].defaultValueRelatedArtifact = new klass();
    }
    return this[_values].defaultValueRelatedArtifact;
  }
  set defaultValueRelatedArtifact(value) {
    const klass = require('./RelatedArtifact');
    return this[_values].defaultValueRelatedArtifact = new klass(value);
  }
  get defaultValueUsageContext() {
    if (!this[_values].defaultValueUsageContext) {
      const klass = require('./UsageContext');
      this[_values].defaultValueUsageContext = new klass();
    }
    return this[_values].defaultValueUsageContext;
  }
  set defaultValueUsageContext(value) {
    const klass = require('./UsageContext');
    return this[_values].defaultValueUsageContext = new klass(value);
  }
  get defaultValueDataRequirement() {
    if (!this[_values].defaultValueDataRequirement) {
      const klass = require('./DataRequirement');
      this[_values].defaultValueDataRequirement = new klass();
    }
    return this[_values].defaultValueDataRequirement;
  }
  set defaultValueDataRequirement(value) {
    const klass = require('./DataRequirement');
    return this[_values].defaultValueDataRequirement = new klass(value);
  }
  get defaultValueParameterDefinition() {
    if (!this[_values].defaultValueParameterDefinition) {
      const klass = require('./ParameterDefinition');
      this[_values].defaultValueParameterDefinition = new klass();
    }
    return this[_values].defaultValueParameterDefinition;
  }
  set defaultValueParameterDefinition(value) {
    const klass = require('./ParameterDefinition');
    return this[_values].defaultValueParameterDefinition = new klass(value);
  }
  get defaultValueTriggerDefinition() {
    if (!this[_values].defaultValueTriggerDefinition) {
      const klass = require('./TriggerDefinition');
      this[_values].defaultValueTriggerDefinition = new klass();
    }
    return this[_values].defaultValueTriggerDefinition;
  }
  set defaultValueTriggerDefinition(value) {
    const klass = require('./TriggerDefinition');
    return this[_values].defaultValueTriggerDefinition = new klass(value);
  }
  get meaningWhenMissing() {
    return this[_values].meaningWhenMissing;
  }
  set meaningWhenMissing(value) {
    return this[_values].meaningWhenMissing = value;
  }
  get _meaningWhenMissing() {
    if (!this[_values]._meaningWhenMissing) {
      const klass = require('./Element');
      this[_values]._meaningWhenMissing = new klass();
    }
    return this[_values]._meaningWhenMissing;
  }
  set _meaningWhenMissing(value) {
    const klass = require('./Element');
    return this[_values]._meaningWhenMissing = new klass(value);
  }
  get orderMeaning() {
    return this[_values].orderMeaning;
  }
  set orderMeaning(value) {
    return this[_values].orderMeaning = value;
  }
  get _orderMeaning() {
    if (!this[_values]._orderMeaning) {
      const klass = require('./Element');
      this[_values]._orderMeaning = new klass();
    }
    return this[_values]._orderMeaning;
  }
  set _orderMeaning(value) {
    const klass = require('./Element');
    return this[_values]._orderMeaning = new klass(value);
  }
  get fixedBoolean() {
    return this[_values].fixedBoolean;
  }
  set fixedBoolean(value) {
    return this[_values].fixedBoolean = value;
  }
  get _fixedBoolean() {
    if (!this[_values]._fixedBoolean) {
      const klass = require('./Element');
      this[_values]._fixedBoolean = new klass();
    }
    return this[_values]._fixedBoolean;
  }
  set _fixedBoolean(value) {
    const klass = require('./Element');
    return this[_values]._fixedBoolean = new klass(value);
  }
  get fixedInteger() {
    return this[_values].fixedInteger;
  }
  set fixedInteger(value) {
    return this[_values].fixedInteger = value;
  }
  get _fixedInteger() {
    if (!this[_values]._fixedInteger) {
      const klass = require('./Element');
      this[_values]._fixedInteger = new klass();
    }
    return this[_values]._fixedInteger;
  }
  set _fixedInteger(value) {
    const klass = require('./Element');
    return this[_values]._fixedInteger = new klass(value);
  }
  get fixedDecimal() {
    return this[_values].fixedDecimal;
  }
  set fixedDecimal(value) {
    return this[_values].fixedDecimal = value;
  }
  get _fixedDecimal() {
    if (!this[_values]._fixedDecimal) {
      const klass = require('./Element');
      this[_values]._fixedDecimal = new klass();
    }
    return this[_values]._fixedDecimal;
  }
  set _fixedDecimal(value) {
    const klass = require('./Element');
    return this[_values]._fixedDecimal = new klass(value);
  }
  get fixedBase64Binary() {
    return this[_values].fixedBase64Binary;
  }
  set fixedBase64Binary(value) {
    return this[_values].fixedBase64Binary = value;
  }
  get _fixedBase64Binary() {
    if (!this[_values]._fixedBase64Binary) {
      const klass = require('./Element');
      this[_values]._fixedBase64Binary = new klass();
    }
    return this[_values]._fixedBase64Binary;
  }
  set _fixedBase64Binary(value) {
    const klass = require('./Element');
    return this[_values]._fixedBase64Binary = new klass(value);
  }
  get fixedInstant() {
    return this[_values].fixedInstant;
  }
  set fixedInstant(value) {
    return this[_values].fixedInstant = value;
  }
  get _fixedInstant() {
    if (!this[_values]._fixedInstant) {
      const klass = require('./Element');
      this[_values]._fixedInstant = new klass();
    }
    return this[_values]._fixedInstant;
  }
  set _fixedInstant(value) {
    const klass = require('./Element');
    return this[_values]._fixedInstant = new klass(value);
  }
  get fixedString() {
    return this[_values].fixedString;
  }
  set fixedString(value) {
    return this[_values].fixedString = value;
  }
  get _fixedString() {
    if (!this[_values]._fixedString) {
      const klass = require('./Element');
      this[_values]._fixedString = new klass();
    }
    return this[_values]._fixedString;
  }
  set _fixedString(value) {
    const klass = require('./Element');
    return this[_values]._fixedString = new klass(value);
  }
  get fixedUri() {
    return this[_values].fixedUri;
  }
  set fixedUri(value) {
    return this[_values].fixedUri = value;
  }
  get _fixedUri() {
    if (!this[_values]._fixedUri) {
      const klass = require('./Element');
      this[_values]._fixedUri = new klass();
    }
    return this[_values]._fixedUri;
  }
  set _fixedUri(value) {
    const klass = require('./Element');
    return this[_values]._fixedUri = new klass(value);
  }
  get fixedDate() {
    return this[_values].fixedDate;
  }
  set fixedDate(value) {
    return this[_values].fixedDate = value;
  }
  get _fixedDate() {
    if (!this[_values]._fixedDate) {
      const klass = require('./Element');
      this[_values]._fixedDate = new klass();
    }
    return this[_values]._fixedDate;
  }
  set _fixedDate(value) {
    const klass = require('./Element');
    return this[_values]._fixedDate = new klass(value);
  }
  get fixedDateTime() {
    return this[_values].fixedDateTime;
  }
  set fixedDateTime(value) {
    return this[_values].fixedDateTime = value;
  }
  get _fixedDateTime() {
    if (!this[_values]._fixedDateTime) {
      const klass = require('./Element');
      this[_values]._fixedDateTime = new klass();
    }
    return this[_values]._fixedDateTime;
  }
  set _fixedDateTime(value) {
    const klass = require('./Element');
    return this[_values]._fixedDateTime = new klass(value);
  }
  get fixedTime() {
    return this[_values].fixedTime;
  }
  set fixedTime(value) {
    return this[_values].fixedTime = value;
  }
  get _fixedTime() {
    if (!this[_values]._fixedTime) {
      const klass = require('./Element');
      this[_values]._fixedTime = new klass();
    }
    return this[_values]._fixedTime;
  }
  set _fixedTime(value) {
    const klass = require('./Element');
    return this[_values]._fixedTime = new klass(value);
  }
  get fixedCode() {
    return this[_values].fixedCode;
  }
  set fixedCode(value) {
    return this[_values].fixedCode = value;
  }
  get _fixedCode() {
    if (!this[_values]._fixedCode) {
      const klass = require('./Element');
      this[_values]._fixedCode = new klass();
    }
    return this[_values]._fixedCode;
  }
  set _fixedCode(value) {
    const klass = require('./Element');
    return this[_values]._fixedCode = new klass(value);
  }
  get fixedOid() {
    return this[_values].fixedOid;
  }
  set fixedOid(value) {
    return this[_values].fixedOid = value;
  }
  get _fixedOid() {
    if (!this[_values]._fixedOid) {
      const klass = require('./Element');
      this[_values]._fixedOid = new klass();
    }
    return this[_values]._fixedOid;
  }
  set _fixedOid(value) {
    const klass = require('./Element');
    return this[_values]._fixedOid = new klass(value);
  }
  get fixedUuid() {
    return this[_values].fixedUuid;
  }
  set fixedUuid(value) {
    return this[_values].fixedUuid = value;
  }
  get _fixedUuid() {
    if (!this[_values]._fixedUuid) {
      const klass = require('./Element');
      this[_values]._fixedUuid = new klass();
    }
    return this[_values]._fixedUuid;
  }
  set _fixedUuid(value) {
    const klass = require('./Element');
    return this[_values]._fixedUuid = new klass(value);
  }
  get fixedId() {
    return this[_values].fixedId;
  }
  set fixedId(value) {
    return this[_values].fixedId = value;
  }
  get _fixedId() {
    if (!this[_values]._fixedId) {
      const klass = require('./Element');
      this[_values]._fixedId = new klass();
    }
    return this[_values]._fixedId;
  }
  set _fixedId(value) {
    const klass = require('./Element');
    return this[_values]._fixedId = new klass(value);
  }
  get fixedUnsignedInt() {
    return this[_values].fixedUnsignedInt;
  }
  set fixedUnsignedInt(value) {
    return this[_values].fixedUnsignedInt = value;
  }
  get _fixedUnsignedInt() {
    if (!this[_values]._fixedUnsignedInt) {
      const klass = require('./Element');
      this[_values]._fixedUnsignedInt = new klass();
    }
    return this[_values]._fixedUnsignedInt;
  }
  set _fixedUnsignedInt(value) {
    const klass = require('./Element');
    return this[_values]._fixedUnsignedInt = new klass(value);
  }
  get fixedPositiveInt() {
    return this[_values].fixedPositiveInt;
  }
  set fixedPositiveInt(value) {
    return this[_values].fixedPositiveInt = value;
  }
  get _fixedPositiveInt() {
    if (!this[_values]._fixedPositiveInt) {
      const klass = require('./Element');
      this[_values]._fixedPositiveInt = new klass();
    }
    return this[_values]._fixedPositiveInt;
  }
  set _fixedPositiveInt(value) {
    const klass = require('./Element');
    return this[_values]._fixedPositiveInt = new klass(value);
  }
  get fixedMarkdown() {
    return this[_values].fixedMarkdown;
  }
  set fixedMarkdown(value) {
    return this[_values].fixedMarkdown = value;
  }
  get _fixedMarkdown() {
    if (!this[_values]._fixedMarkdown) {
      const klass = require('./Element');
      this[_values]._fixedMarkdown = new klass();
    }
    return this[_values]._fixedMarkdown;
  }
  set _fixedMarkdown(value) {
    const klass = require('./Element');
    return this[_values]._fixedMarkdown = new klass(value);
  }
  get fixedElement() {
    if (!this[_values].fixedElement) {
      const klass = require('./Element');
      this[_values].fixedElement = new klass();
    }
    return this[_values].fixedElement;
  }
  set fixedElement(value) {
    const klass = require('./Element');
    return this[_values].fixedElement = new klass(value);
  }
  get fixedExtension() {
    if (!this[_values].fixedExtension) {
      const klass = require('./Extension');
      this[_values].fixedExtension = new klass();
    }
    return this[_values].fixedExtension;
  }
  set fixedExtension(value) {
    const klass = require('./Extension');
    return this[_values].fixedExtension = new klass(value);
  }
  get fixedBackboneElement() {
    if (!this[_values].fixedBackboneElement) {
      const klass = require('./BackboneElement');
      this[_values].fixedBackboneElement = new klass();
    }
    return this[_values].fixedBackboneElement;
  }
  set fixedBackboneElement(value) {
    const klass = require('./BackboneElement');
    return this[_values].fixedBackboneElement = new klass(value);
  }
  get fixedNarrative() {
    if (!this[_values].fixedNarrative) {
      const klass = require('./Narrative');
      this[_values].fixedNarrative = new klass();
    }
    return this[_values].fixedNarrative;
  }
  set fixedNarrative(value) {
    const klass = require('./Narrative');
    return this[_values].fixedNarrative = new klass(value);
  }
  get fixedAnnotation() {
    if (!this[_values].fixedAnnotation) {
      const klass = require('./Annotation');
      this[_values].fixedAnnotation = new klass();
    }
    return this[_values].fixedAnnotation;
  }
  set fixedAnnotation(value) {
    const klass = require('./Annotation');
    return this[_values].fixedAnnotation = new klass(value);
  }
  get fixedAttachment() {
    if (!this[_values].fixedAttachment) {
      const klass = require('./Attachment');
      this[_values].fixedAttachment = new klass();
    }
    return this[_values].fixedAttachment;
  }
  set fixedAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].fixedAttachment = new klass(value);
  }
  get fixedIdentifier() {
    if (!this[_values].fixedIdentifier) {
      const klass = require('./Identifier');
      this[_values].fixedIdentifier = new klass();
    }
    return this[_values].fixedIdentifier;
  }
  set fixedIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].fixedIdentifier = new klass(value);
  }
  get fixedCodeableConcept() {
    if (!this[_values].fixedCodeableConcept) {
      const klass = require('./CodeableConcept');
      this[_values].fixedCodeableConcept = new klass();
    }
    return this[_values].fixedCodeableConcept;
  }
  set fixedCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].fixedCodeableConcept = new klass(value);
  }
  get fixedCoding() {
    if (!this[_values].fixedCoding) {
      const klass = require('./Coding');
      this[_values].fixedCoding = new klass();
    }
    return this[_values].fixedCoding;
  }
  set fixedCoding(value) {
    const klass = require('./Coding');
    return this[_values].fixedCoding = new klass(value);
  }
  get fixedQuantity() {
    if (!this[_values].fixedQuantity) {
      const klass = require('./Quantity');
      this[_values].fixedQuantity = new klass();
    }
    return this[_values].fixedQuantity;
  }
  set fixedQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].fixedQuantity = new klass(value);
  }
  get fixedDuration() {
    if (!this[_values].fixedDuration) {
      const klass = require('./Duration');
      this[_values].fixedDuration = new klass();
    }
    return this[_values].fixedDuration;
  }
  set fixedDuration(value) {
    const klass = require('./Duration');
    return this[_values].fixedDuration = new klass(value);
  }
  get fixedSimpleQuantity() {
    if (!this[_values].fixedSimpleQuantity) {
      const klass = require('./Quantity');
      this[_values].fixedSimpleQuantity = new klass();
    }
    return this[_values].fixedSimpleQuantity;
  }
  set fixedSimpleQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].fixedSimpleQuantity = new klass(value);
  }
  get fixedDistance() {
    if (!this[_values].fixedDistance) {
      const klass = require('./Distance');
      this[_values].fixedDistance = new klass();
    }
    return this[_values].fixedDistance;
  }
  set fixedDistance(value) {
    const klass = require('./Distance');
    return this[_values].fixedDistance = new klass(value);
  }
  get fixedCount() {
    if (!this[_values].fixedCount) {
      const klass = require('./Count');
      this[_values].fixedCount = new klass();
    }
    return this[_values].fixedCount;
  }
  set fixedCount(value) {
    const klass = require('./Count');
    return this[_values].fixedCount = new klass(value);
  }
  get fixedMoney() {
    if (!this[_values].fixedMoney) {
      const klass = require('./Money');
      this[_values].fixedMoney = new klass();
    }
    return this[_values].fixedMoney;
  }
  set fixedMoney(value) {
    const klass = require('./Money');
    return this[_values].fixedMoney = new klass(value);
  }
  get fixedAge() {
    if (!this[_values].fixedAge) {
      const klass = require('./Age');
      this[_values].fixedAge = new klass();
    }
    return this[_values].fixedAge;
  }
  set fixedAge(value) {
    const klass = require('./Age');
    return this[_values].fixedAge = new klass(value);
  }
  get fixedRange() {
    if (!this[_values].fixedRange) {
      const klass = require('./Range');
      this[_values].fixedRange = new klass();
    }
    return this[_values].fixedRange;
  }
  set fixedRange(value) {
    const klass = require('./Range');
    return this[_values].fixedRange = new klass(value);
  }
  get fixedPeriod() {
    if (!this[_values].fixedPeriod) {
      const klass = require('./Period');
      this[_values].fixedPeriod = new klass();
    }
    return this[_values].fixedPeriod;
  }
  set fixedPeriod(value) {
    const klass = require('./Period');
    return this[_values].fixedPeriod = new klass(value);
  }
  get fixedRatio() {
    if (!this[_values].fixedRatio) {
      const klass = require('./Ratio');
      this[_values].fixedRatio = new klass();
    }
    return this[_values].fixedRatio;
  }
  set fixedRatio(value) {
    const klass = require('./Ratio');
    return this[_values].fixedRatio = new klass(value);
  }
  get fixedReference() {
    if (!this[_values].fixedReference) {
      const klass = require('./Reference');
      this[_values].fixedReference = new klass();
    }
    return this[_values].fixedReference;
  }
  set fixedReference(value) {
    const klass = require('./Reference');
    return this[_values].fixedReference = new klass(value);
  }
  get fixedSampledData() {
    if (!this[_values].fixedSampledData) {
      const klass = require('./SampledData');
      this[_values].fixedSampledData = new klass();
    }
    return this[_values].fixedSampledData;
  }
  set fixedSampledData(value) {
    const klass = require('./SampledData');
    return this[_values].fixedSampledData = new klass(value);
  }
  get fixedSignature() {
    if (!this[_values].fixedSignature) {
      const klass = require('./Signature');
      this[_values].fixedSignature = new klass();
    }
    return this[_values].fixedSignature;
  }
  set fixedSignature(value) {
    const klass = require('./Signature');
    return this[_values].fixedSignature = new klass(value);
  }
  get fixedHumanName() {
    if (!this[_values].fixedHumanName) {
      const klass = require('./HumanName');
      this[_values].fixedHumanName = new klass();
    }
    return this[_values].fixedHumanName;
  }
  set fixedHumanName(value) {
    const klass = require('./HumanName');
    return this[_values].fixedHumanName = new klass(value);
  }
  get fixedAddress() {
    if (!this[_values].fixedAddress) {
      const klass = require('./Address');
      this[_values].fixedAddress = new klass();
    }
    return this[_values].fixedAddress;
  }
  set fixedAddress(value) {
    const klass = require('./Address');
    return this[_values].fixedAddress = new klass(value);
  }
  get fixedContactPoint() {
    if (!this[_values].fixedContactPoint) {
      const klass = require('./ContactPoint');
      this[_values].fixedContactPoint = new klass();
    }
    return this[_values].fixedContactPoint;
  }
  set fixedContactPoint(value) {
    const klass = require('./ContactPoint');
    return this[_values].fixedContactPoint = new klass(value);
  }
  get fixedTiming() {
    if (!this[_values].fixedTiming) {
      const klass = require('./Timing');
      this[_values].fixedTiming = new klass();
    }
    return this[_values].fixedTiming;
  }
  set fixedTiming(value) {
    const klass = require('./Timing');
    return this[_values].fixedTiming = new klass(value);
  }
  get fixedMeta() {
    if (!this[_values].fixedMeta) {
      const klass = require('./Meta');
      this[_values].fixedMeta = new klass();
    }
    return this[_values].fixedMeta;
  }
  set fixedMeta(value) {
    const klass = require('./Meta');
    return this[_values].fixedMeta = new klass(value);
  }
  get fixedElementDefinition() {
    if (!this[_values].fixedElementDefinition) {
      const klass = require('./ElementDefinition');
      this[_values].fixedElementDefinition = new klass();
    }
    return this[_values].fixedElementDefinition;
  }
  set fixedElementDefinition(value) {
    const klass = require('./ElementDefinition');
    return this[_values].fixedElementDefinition = new klass(value);
  }
  get fixedContactDetail() {
    if (!this[_values].fixedContactDetail) {
      const klass = require('./ContactDetail');
      this[_values].fixedContactDetail = new klass();
    }
    return this[_values].fixedContactDetail;
  }
  set fixedContactDetail(value) {
    const klass = require('./ContactDetail');
    return this[_values].fixedContactDetail = new klass(value);
  }
  get fixedContributor() {
    if (!this[_values].fixedContributor) {
      const klass = require('./Contributor');
      this[_values].fixedContributor = new klass();
    }
    return this[_values].fixedContributor;
  }
  set fixedContributor(value) {
    const klass = require('./Contributor');
    return this[_values].fixedContributor = new klass(value);
  }
  get fixedDosage() {
    if (!this[_values].fixedDosage) {
      const klass = require('./Dosage');
      this[_values].fixedDosage = new klass();
    }
    return this[_values].fixedDosage;
  }
  set fixedDosage(value) {
    const klass = require('./Dosage');
    return this[_values].fixedDosage = new klass(value);
  }
  get fixedRelatedArtifact() {
    if (!this[_values].fixedRelatedArtifact) {
      const klass = require('./RelatedArtifact');
      this[_values].fixedRelatedArtifact = new klass();
    }
    return this[_values].fixedRelatedArtifact;
  }
  set fixedRelatedArtifact(value) {
    const klass = require('./RelatedArtifact');
    return this[_values].fixedRelatedArtifact = new klass(value);
  }
  get fixedUsageContext() {
    if (!this[_values].fixedUsageContext) {
      const klass = require('./UsageContext');
      this[_values].fixedUsageContext = new klass();
    }
    return this[_values].fixedUsageContext;
  }
  set fixedUsageContext(value) {
    const klass = require('./UsageContext');
    return this[_values].fixedUsageContext = new klass(value);
  }
  get fixedDataRequirement() {
    if (!this[_values].fixedDataRequirement) {
      const klass = require('./DataRequirement');
      this[_values].fixedDataRequirement = new klass();
    }
    return this[_values].fixedDataRequirement;
  }
  set fixedDataRequirement(value) {
    const klass = require('./DataRequirement');
    return this[_values].fixedDataRequirement = new klass(value);
  }
  get fixedParameterDefinition() {
    if (!this[_values].fixedParameterDefinition) {
      const klass = require('./ParameterDefinition');
      this[_values].fixedParameterDefinition = new klass();
    }
    return this[_values].fixedParameterDefinition;
  }
  set fixedParameterDefinition(value) {
    const klass = require('./ParameterDefinition');
    return this[_values].fixedParameterDefinition = new klass(value);
  }
  get fixedTriggerDefinition() {
    if (!this[_values].fixedTriggerDefinition) {
      const klass = require('./TriggerDefinition');
      this[_values].fixedTriggerDefinition = new klass();
    }
    return this[_values].fixedTriggerDefinition;
  }
  set fixedTriggerDefinition(value) {
    const klass = require('./TriggerDefinition');
    return this[_values].fixedTriggerDefinition = new klass(value);
  }
  get patternBoolean() {
    return this[_values].patternBoolean;
  }
  set patternBoolean(value) {
    return this[_values].patternBoolean = value;
  }
  get _patternBoolean() {
    if (!this[_values]._patternBoolean) {
      const klass = require('./Element');
      this[_values]._patternBoolean = new klass();
    }
    return this[_values]._patternBoolean;
  }
  set _patternBoolean(value) {
    const klass = require('./Element');
    return this[_values]._patternBoolean = new klass(value);
  }
  get patternInteger() {
    return this[_values].patternInteger;
  }
  set patternInteger(value) {
    return this[_values].patternInteger = value;
  }
  get _patternInteger() {
    if (!this[_values]._patternInteger) {
      const klass = require('./Element');
      this[_values]._patternInteger = new klass();
    }
    return this[_values]._patternInteger;
  }
  set _patternInteger(value) {
    const klass = require('./Element');
    return this[_values]._patternInteger = new klass(value);
  }
  get patternDecimal() {
    return this[_values].patternDecimal;
  }
  set patternDecimal(value) {
    return this[_values].patternDecimal = value;
  }
  get _patternDecimal() {
    if (!this[_values]._patternDecimal) {
      const klass = require('./Element');
      this[_values]._patternDecimal = new klass();
    }
    return this[_values]._patternDecimal;
  }
  set _patternDecimal(value) {
    const klass = require('./Element');
    return this[_values]._patternDecimal = new klass(value);
  }
  get patternBase64Binary() {
    return this[_values].patternBase64Binary;
  }
  set patternBase64Binary(value) {
    return this[_values].patternBase64Binary = value;
  }
  get _patternBase64Binary() {
    if (!this[_values]._patternBase64Binary) {
      const klass = require('./Element');
      this[_values]._patternBase64Binary = new klass();
    }
    return this[_values]._patternBase64Binary;
  }
  set _patternBase64Binary(value) {
    const klass = require('./Element');
    return this[_values]._patternBase64Binary = new klass(value);
  }
  get patternInstant() {
    return this[_values].patternInstant;
  }
  set patternInstant(value) {
    return this[_values].patternInstant = value;
  }
  get _patternInstant() {
    if (!this[_values]._patternInstant) {
      const klass = require('./Element');
      this[_values]._patternInstant = new klass();
    }
    return this[_values]._patternInstant;
  }
  set _patternInstant(value) {
    const klass = require('./Element');
    return this[_values]._patternInstant = new klass(value);
  }
  get patternString() {
    return this[_values].patternString;
  }
  set patternString(value) {
    return this[_values].patternString = value;
  }
  get _patternString() {
    if (!this[_values]._patternString) {
      const klass = require('./Element');
      this[_values]._patternString = new klass();
    }
    return this[_values]._patternString;
  }
  set _patternString(value) {
    const klass = require('./Element');
    return this[_values]._patternString = new klass(value);
  }
  get patternUri() {
    return this[_values].patternUri;
  }
  set patternUri(value) {
    return this[_values].patternUri = value;
  }
  get _patternUri() {
    if (!this[_values]._patternUri) {
      const klass = require('./Element');
      this[_values]._patternUri = new klass();
    }
    return this[_values]._patternUri;
  }
  set _patternUri(value) {
    const klass = require('./Element');
    return this[_values]._patternUri = new klass(value);
  }
  get patternDate() {
    return this[_values].patternDate;
  }
  set patternDate(value) {
    return this[_values].patternDate = value;
  }
  get _patternDate() {
    if (!this[_values]._patternDate) {
      const klass = require('./Element');
      this[_values]._patternDate = new klass();
    }
    return this[_values]._patternDate;
  }
  set _patternDate(value) {
    const klass = require('./Element');
    return this[_values]._patternDate = new klass(value);
  }
  get patternDateTime() {
    return this[_values].patternDateTime;
  }
  set patternDateTime(value) {
    return this[_values].patternDateTime = value;
  }
  get _patternDateTime() {
    if (!this[_values]._patternDateTime) {
      const klass = require('./Element');
      this[_values]._patternDateTime = new klass();
    }
    return this[_values]._patternDateTime;
  }
  set _patternDateTime(value) {
    const klass = require('./Element');
    return this[_values]._patternDateTime = new klass(value);
  }
  get patternTime() {
    return this[_values].patternTime;
  }
  set patternTime(value) {
    return this[_values].patternTime = value;
  }
  get _patternTime() {
    if (!this[_values]._patternTime) {
      const klass = require('./Element');
      this[_values]._patternTime = new klass();
    }
    return this[_values]._patternTime;
  }
  set _patternTime(value) {
    const klass = require('./Element');
    return this[_values]._patternTime = new klass(value);
  }
  get patternCode() {
    return this[_values].patternCode;
  }
  set patternCode(value) {
    return this[_values].patternCode = value;
  }
  get _patternCode() {
    if (!this[_values]._patternCode) {
      const klass = require('./Element');
      this[_values]._patternCode = new klass();
    }
    return this[_values]._patternCode;
  }
  set _patternCode(value) {
    const klass = require('./Element');
    return this[_values]._patternCode = new klass(value);
  }
  get patternOid() {
    return this[_values].patternOid;
  }
  set patternOid(value) {
    return this[_values].patternOid = value;
  }
  get _patternOid() {
    if (!this[_values]._patternOid) {
      const klass = require('./Element');
      this[_values]._patternOid = new klass();
    }
    return this[_values]._patternOid;
  }
  set _patternOid(value) {
    const klass = require('./Element');
    return this[_values]._patternOid = new klass(value);
  }
  get patternUuid() {
    return this[_values].patternUuid;
  }
  set patternUuid(value) {
    return this[_values].patternUuid = value;
  }
  get _patternUuid() {
    if (!this[_values]._patternUuid) {
      const klass = require('./Element');
      this[_values]._patternUuid = new klass();
    }
    return this[_values]._patternUuid;
  }
  set _patternUuid(value) {
    const klass = require('./Element');
    return this[_values]._patternUuid = new klass(value);
  }
  get patternId() {
    return this[_values].patternId;
  }
  set patternId(value) {
    return this[_values].patternId = value;
  }
  get _patternId() {
    if (!this[_values]._patternId) {
      const klass = require('./Element');
      this[_values]._patternId = new klass();
    }
    return this[_values]._patternId;
  }
  set _patternId(value) {
    const klass = require('./Element');
    return this[_values]._patternId = new klass(value);
  }
  get patternUnsignedInt() {
    return this[_values].patternUnsignedInt;
  }
  set patternUnsignedInt(value) {
    return this[_values].patternUnsignedInt = value;
  }
  get _patternUnsignedInt() {
    if (!this[_values]._patternUnsignedInt) {
      const klass = require('./Element');
      this[_values]._patternUnsignedInt = new klass();
    }
    return this[_values]._patternUnsignedInt;
  }
  set _patternUnsignedInt(value) {
    const klass = require('./Element');
    return this[_values]._patternUnsignedInt = new klass(value);
  }
  get patternPositiveInt() {
    return this[_values].patternPositiveInt;
  }
  set patternPositiveInt(value) {
    return this[_values].patternPositiveInt = value;
  }
  get _patternPositiveInt() {
    if (!this[_values]._patternPositiveInt) {
      const klass = require('./Element');
      this[_values]._patternPositiveInt = new klass();
    }
    return this[_values]._patternPositiveInt;
  }
  set _patternPositiveInt(value) {
    const klass = require('./Element');
    return this[_values]._patternPositiveInt = new klass(value);
  }
  get patternMarkdown() {
    return this[_values].patternMarkdown;
  }
  set patternMarkdown(value) {
    return this[_values].patternMarkdown = value;
  }
  get _patternMarkdown() {
    if (!this[_values]._patternMarkdown) {
      const klass = require('./Element');
      this[_values]._patternMarkdown = new klass();
    }
    return this[_values]._patternMarkdown;
  }
  set _patternMarkdown(value) {
    const klass = require('./Element');
    return this[_values]._patternMarkdown = new klass(value);
  }
  get patternElement() {
    if (!this[_values].patternElement) {
      const klass = require('./Element');
      this[_values].patternElement = new klass();
    }
    return this[_values].patternElement;
  }
  set patternElement(value) {
    const klass = require('./Element');
    return this[_values].patternElement = new klass(value);
  }
  get patternExtension() {
    if (!this[_values].patternExtension) {
      const klass = require('./Extension');
      this[_values].patternExtension = new klass();
    }
    return this[_values].patternExtension;
  }
  set patternExtension(value) {
    const klass = require('./Extension');
    return this[_values].patternExtension = new klass(value);
  }
  get patternBackboneElement() {
    if (!this[_values].patternBackboneElement) {
      const klass = require('./BackboneElement');
      this[_values].patternBackboneElement = new klass();
    }
    return this[_values].patternBackboneElement;
  }
  set patternBackboneElement(value) {
    const klass = require('./BackboneElement');
    return this[_values].patternBackboneElement = new klass(value);
  }
  get patternNarrative() {
    if (!this[_values].patternNarrative) {
      const klass = require('./Narrative');
      this[_values].patternNarrative = new klass();
    }
    return this[_values].patternNarrative;
  }
  set patternNarrative(value) {
    const klass = require('./Narrative');
    return this[_values].patternNarrative = new klass(value);
  }
  get patternAnnotation() {
    if (!this[_values].patternAnnotation) {
      const klass = require('./Annotation');
      this[_values].patternAnnotation = new klass();
    }
    return this[_values].patternAnnotation;
  }
  set patternAnnotation(value) {
    const klass = require('./Annotation');
    return this[_values].patternAnnotation = new klass(value);
  }
  get patternAttachment() {
    if (!this[_values].patternAttachment) {
      const klass = require('./Attachment');
      this[_values].patternAttachment = new klass();
    }
    return this[_values].patternAttachment;
  }
  set patternAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].patternAttachment = new klass(value);
  }
  get patternIdentifier() {
    if (!this[_values].patternIdentifier) {
      const klass = require('./Identifier');
      this[_values].patternIdentifier = new klass();
    }
    return this[_values].patternIdentifier;
  }
  set patternIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].patternIdentifier = new klass(value);
  }
  get patternCodeableConcept() {
    if (!this[_values].patternCodeableConcept) {
      const klass = require('./CodeableConcept');
      this[_values].patternCodeableConcept = new klass();
    }
    return this[_values].patternCodeableConcept;
  }
  set patternCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].patternCodeableConcept = new klass(value);
  }
  get patternCoding() {
    if (!this[_values].patternCoding) {
      const klass = require('./Coding');
      this[_values].patternCoding = new klass();
    }
    return this[_values].patternCoding;
  }
  set patternCoding(value) {
    const klass = require('./Coding');
    return this[_values].patternCoding = new klass(value);
  }
  get patternQuantity() {
    if (!this[_values].patternQuantity) {
      const klass = require('./Quantity');
      this[_values].patternQuantity = new klass();
    }
    return this[_values].patternQuantity;
  }
  set patternQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].patternQuantity = new klass(value);
  }
  get patternDuration() {
    if (!this[_values].patternDuration) {
      const klass = require('./Duration');
      this[_values].patternDuration = new klass();
    }
    return this[_values].patternDuration;
  }
  set patternDuration(value) {
    const klass = require('./Duration');
    return this[_values].patternDuration = new klass(value);
  }
  get patternSimpleQuantity() {
    if (!this[_values].patternSimpleQuantity) {
      const klass = require('./Quantity');
      this[_values].patternSimpleQuantity = new klass();
    }
    return this[_values].patternSimpleQuantity;
  }
  set patternSimpleQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].patternSimpleQuantity = new klass(value);
  }
  get patternDistance() {
    if (!this[_values].patternDistance) {
      const klass = require('./Distance');
      this[_values].patternDistance = new klass();
    }
    return this[_values].patternDistance;
  }
  set patternDistance(value) {
    const klass = require('./Distance');
    return this[_values].patternDistance = new klass(value);
  }
  get patternCount() {
    if (!this[_values].patternCount) {
      const klass = require('./Count');
      this[_values].patternCount = new klass();
    }
    return this[_values].patternCount;
  }
  set patternCount(value) {
    const klass = require('./Count');
    return this[_values].patternCount = new klass(value);
  }
  get patternMoney() {
    if (!this[_values].patternMoney) {
      const klass = require('./Money');
      this[_values].patternMoney = new klass();
    }
    return this[_values].patternMoney;
  }
  set patternMoney(value) {
    const klass = require('./Money');
    return this[_values].patternMoney = new klass(value);
  }
  get patternAge() {
    if (!this[_values].patternAge) {
      const klass = require('./Age');
      this[_values].patternAge = new klass();
    }
    return this[_values].patternAge;
  }
  set patternAge(value) {
    const klass = require('./Age');
    return this[_values].patternAge = new klass(value);
  }
  get patternRange() {
    if (!this[_values].patternRange) {
      const klass = require('./Range');
      this[_values].patternRange = new klass();
    }
    return this[_values].patternRange;
  }
  set patternRange(value) {
    const klass = require('./Range');
    return this[_values].patternRange = new klass(value);
  }
  get patternPeriod() {
    if (!this[_values].patternPeriod) {
      const klass = require('./Period');
      this[_values].patternPeriod = new klass();
    }
    return this[_values].patternPeriod;
  }
  set patternPeriod(value) {
    const klass = require('./Period');
    return this[_values].patternPeriod = new klass(value);
  }
  get patternRatio() {
    if (!this[_values].patternRatio) {
      const klass = require('./Ratio');
      this[_values].patternRatio = new klass();
    }
    return this[_values].patternRatio;
  }
  set patternRatio(value) {
    const klass = require('./Ratio');
    return this[_values].patternRatio = new klass(value);
  }
  get patternReference() {
    if (!this[_values].patternReference) {
      const klass = require('./Reference');
      this[_values].patternReference = new klass();
    }
    return this[_values].patternReference;
  }
  set patternReference(value) {
    const klass = require('./Reference');
    return this[_values].patternReference = new klass(value);
  }
  get patternSampledData() {
    if (!this[_values].patternSampledData) {
      const klass = require('./SampledData');
      this[_values].patternSampledData = new klass();
    }
    return this[_values].patternSampledData;
  }
  set patternSampledData(value) {
    const klass = require('./SampledData');
    return this[_values].patternSampledData = new klass(value);
  }
  get patternSignature() {
    if (!this[_values].patternSignature) {
      const klass = require('./Signature');
      this[_values].patternSignature = new klass();
    }
    return this[_values].patternSignature;
  }
  set patternSignature(value) {
    const klass = require('./Signature');
    return this[_values].patternSignature = new klass(value);
  }
  get patternHumanName() {
    if (!this[_values].patternHumanName) {
      const klass = require('./HumanName');
      this[_values].patternHumanName = new klass();
    }
    return this[_values].patternHumanName;
  }
  set patternHumanName(value) {
    const klass = require('./HumanName');
    return this[_values].patternHumanName = new klass(value);
  }
  get patternAddress() {
    if (!this[_values].patternAddress) {
      const klass = require('./Address');
      this[_values].patternAddress = new klass();
    }
    return this[_values].patternAddress;
  }
  set patternAddress(value) {
    const klass = require('./Address');
    return this[_values].patternAddress = new klass(value);
  }
  get patternContactPoint() {
    if (!this[_values].patternContactPoint) {
      const klass = require('./ContactPoint');
      this[_values].patternContactPoint = new klass();
    }
    return this[_values].patternContactPoint;
  }
  set patternContactPoint(value) {
    const klass = require('./ContactPoint');
    return this[_values].patternContactPoint = new klass(value);
  }
  get patternTiming() {
    if (!this[_values].patternTiming) {
      const klass = require('./Timing');
      this[_values].patternTiming = new klass();
    }
    return this[_values].patternTiming;
  }
  set patternTiming(value) {
    const klass = require('./Timing');
    return this[_values].patternTiming = new klass(value);
  }
  get patternMeta() {
    if (!this[_values].patternMeta) {
      const klass = require('./Meta');
      this[_values].patternMeta = new klass();
    }
    return this[_values].patternMeta;
  }
  set patternMeta(value) {
    const klass = require('./Meta');
    return this[_values].patternMeta = new klass(value);
  }
  get patternElementDefinition() {
    if (!this[_values].patternElementDefinition) {
      const klass = require('./ElementDefinition');
      this[_values].patternElementDefinition = new klass();
    }
    return this[_values].patternElementDefinition;
  }
  set patternElementDefinition(value) {
    const klass = require('./ElementDefinition');
    return this[_values].patternElementDefinition = new klass(value);
  }
  get patternContactDetail() {
    if (!this[_values].patternContactDetail) {
      const klass = require('./ContactDetail');
      this[_values].patternContactDetail = new klass();
    }
    return this[_values].patternContactDetail;
  }
  set patternContactDetail(value) {
    const klass = require('./ContactDetail');
    return this[_values].patternContactDetail = new klass(value);
  }
  get patternContributor() {
    if (!this[_values].patternContributor) {
      const klass = require('./Contributor');
      this[_values].patternContributor = new klass();
    }
    return this[_values].patternContributor;
  }
  set patternContributor(value) {
    const klass = require('./Contributor');
    return this[_values].patternContributor = new klass(value);
  }
  get patternDosage() {
    if (!this[_values].patternDosage) {
      const klass = require('./Dosage');
      this[_values].patternDosage = new klass();
    }
    return this[_values].patternDosage;
  }
  set patternDosage(value) {
    const klass = require('./Dosage');
    return this[_values].patternDosage = new klass(value);
  }
  get patternRelatedArtifact() {
    if (!this[_values].patternRelatedArtifact) {
      const klass = require('./RelatedArtifact');
      this[_values].patternRelatedArtifact = new klass();
    }
    return this[_values].patternRelatedArtifact;
  }
  set patternRelatedArtifact(value) {
    const klass = require('./RelatedArtifact');
    return this[_values].patternRelatedArtifact = new klass(value);
  }
  get patternUsageContext() {
    if (!this[_values].patternUsageContext) {
      const klass = require('./UsageContext');
      this[_values].patternUsageContext = new klass();
    }
    return this[_values].patternUsageContext;
  }
  set patternUsageContext(value) {
    const klass = require('./UsageContext');
    return this[_values].patternUsageContext = new klass(value);
  }
  get patternDataRequirement() {
    if (!this[_values].patternDataRequirement) {
      const klass = require('./DataRequirement');
      this[_values].patternDataRequirement = new klass();
    }
    return this[_values].patternDataRequirement;
  }
  set patternDataRequirement(value) {
    const klass = require('./DataRequirement');
    return this[_values].patternDataRequirement = new klass(value);
  }
  get patternParameterDefinition() {
    if (!this[_values].patternParameterDefinition) {
      const klass = require('./ParameterDefinition');
      this[_values].patternParameterDefinition = new klass();
    }
    return this[_values].patternParameterDefinition;
  }
  set patternParameterDefinition(value) {
    const klass = require('./ParameterDefinition');
    return this[_values].patternParameterDefinition = new klass(value);
  }
  get patternTriggerDefinition() {
    if (!this[_values].patternTriggerDefinition) {
      const klass = require('./TriggerDefinition');
      this[_values].patternTriggerDefinition = new klass();
    }
    return this[_values].patternTriggerDefinition;
  }
  set patternTriggerDefinition(value) {
    const klass = require('./TriggerDefinition');
    return this[_values].patternTriggerDefinition = new klass(value);
  }
  get example() {
    if (!this[_values].example) {
      const klass = require('./ElementDefinition_Example');
      this[_values].example = ArrayProxy(klass);
    }
    return this[_values].example;
  }
  set example(value) {
    const klass = require('./ElementDefinition_Example');
    this[_values].example = ArrayProxy(klass);
    value.forEach(entry => this[_values].example.push(entry));
    return this[_values].example;
  }
  get minValueDate() {
    return this[_values].minValueDate;
  }
  set minValueDate(value) {
    return this[_values].minValueDate = value;
  }
  get _minValueDate() {
    if (!this[_values]._minValueDate) {
      const klass = require('./Element');
      this[_values]._minValueDate = new klass();
    }
    return this[_values]._minValueDate;
  }
  set _minValueDate(value) {
    const klass = require('./Element');
    return this[_values]._minValueDate = new klass(value);
  }
  get minValueDateTime() {
    return this[_values].minValueDateTime;
  }
  set minValueDateTime(value) {
    return this[_values].minValueDateTime = value;
  }
  get _minValueDateTime() {
    if (!this[_values]._minValueDateTime) {
      const klass = require('./Element');
      this[_values]._minValueDateTime = new klass();
    }
    return this[_values]._minValueDateTime;
  }
  set _minValueDateTime(value) {
    const klass = require('./Element');
    return this[_values]._minValueDateTime = new klass(value);
  }
  get minValueInstant() {
    return this[_values].minValueInstant;
  }
  set minValueInstant(value) {
    return this[_values].minValueInstant = value;
  }
  get _minValueInstant() {
    if (!this[_values]._minValueInstant) {
      const klass = require('./Element');
      this[_values]._minValueInstant = new klass();
    }
    return this[_values]._minValueInstant;
  }
  set _minValueInstant(value) {
    const klass = require('./Element');
    return this[_values]._minValueInstant = new klass(value);
  }
  get minValueTime() {
    return this[_values].minValueTime;
  }
  set minValueTime(value) {
    return this[_values].minValueTime = value;
  }
  get _minValueTime() {
    if (!this[_values]._minValueTime) {
      const klass = require('./Element');
      this[_values]._minValueTime = new klass();
    }
    return this[_values]._minValueTime;
  }
  set _minValueTime(value) {
    const klass = require('./Element');
    return this[_values]._minValueTime = new klass(value);
  }
  get minValueDecimal() {
    return this[_values].minValueDecimal;
  }
  set minValueDecimal(value) {
    return this[_values].minValueDecimal = value;
  }
  get _minValueDecimal() {
    if (!this[_values]._minValueDecimal) {
      const klass = require('./Element');
      this[_values]._minValueDecimal = new klass();
    }
    return this[_values]._minValueDecimal;
  }
  set _minValueDecimal(value) {
    const klass = require('./Element');
    return this[_values]._minValueDecimal = new klass(value);
  }
  get minValueInteger() {
    return this[_values].minValueInteger;
  }
  set minValueInteger(value) {
    return this[_values].minValueInteger = value;
  }
  get _minValueInteger() {
    if (!this[_values]._minValueInteger) {
      const klass = require('./Element');
      this[_values]._minValueInteger = new klass();
    }
    return this[_values]._minValueInteger;
  }
  set _minValueInteger(value) {
    const klass = require('./Element');
    return this[_values]._minValueInteger = new klass(value);
  }
  get minValuePositiveInt() {
    return this[_values].minValuePositiveInt;
  }
  set minValuePositiveInt(value) {
    return this[_values].minValuePositiveInt = value;
  }
  get _minValuePositiveInt() {
    if (!this[_values]._minValuePositiveInt) {
      const klass = require('./Element');
      this[_values]._minValuePositiveInt = new klass();
    }
    return this[_values]._minValuePositiveInt;
  }
  set _minValuePositiveInt(value) {
    const klass = require('./Element');
    return this[_values]._minValuePositiveInt = new klass(value);
  }
  get minValueUnsignedInt() {
    return this[_values].minValueUnsignedInt;
  }
  set minValueUnsignedInt(value) {
    return this[_values].minValueUnsignedInt = value;
  }
  get _minValueUnsignedInt() {
    if (!this[_values]._minValueUnsignedInt) {
      const klass = require('./Element');
      this[_values]._minValueUnsignedInt = new klass();
    }
    return this[_values]._minValueUnsignedInt;
  }
  set _minValueUnsignedInt(value) {
    const klass = require('./Element');
    return this[_values]._minValueUnsignedInt = new klass(value);
  }
  get minValueQuantity() {
    if (!this[_values].minValueQuantity) {
      const klass = require('./Quantity');
      this[_values].minValueQuantity = new klass();
    }
    return this[_values].minValueQuantity;
  }
  set minValueQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].minValueQuantity = new klass(value);
  }
  get maxValueDate() {
    return this[_values].maxValueDate;
  }
  set maxValueDate(value) {
    return this[_values].maxValueDate = value;
  }
  get _maxValueDate() {
    if (!this[_values]._maxValueDate) {
      const klass = require('./Element');
      this[_values]._maxValueDate = new klass();
    }
    return this[_values]._maxValueDate;
  }
  set _maxValueDate(value) {
    const klass = require('./Element');
    return this[_values]._maxValueDate = new klass(value);
  }
  get maxValueDateTime() {
    return this[_values].maxValueDateTime;
  }
  set maxValueDateTime(value) {
    return this[_values].maxValueDateTime = value;
  }
  get _maxValueDateTime() {
    if (!this[_values]._maxValueDateTime) {
      const klass = require('./Element');
      this[_values]._maxValueDateTime = new klass();
    }
    return this[_values]._maxValueDateTime;
  }
  set _maxValueDateTime(value) {
    const klass = require('./Element');
    return this[_values]._maxValueDateTime = new klass(value);
  }
  get maxValueInstant() {
    return this[_values].maxValueInstant;
  }
  set maxValueInstant(value) {
    return this[_values].maxValueInstant = value;
  }
  get _maxValueInstant() {
    if (!this[_values]._maxValueInstant) {
      const klass = require('./Element');
      this[_values]._maxValueInstant = new klass();
    }
    return this[_values]._maxValueInstant;
  }
  set _maxValueInstant(value) {
    const klass = require('./Element');
    return this[_values]._maxValueInstant = new klass(value);
  }
  get maxValueTime() {
    return this[_values].maxValueTime;
  }
  set maxValueTime(value) {
    return this[_values].maxValueTime = value;
  }
  get _maxValueTime() {
    if (!this[_values]._maxValueTime) {
      const klass = require('./Element');
      this[_values]._maxValueTime = new klass();
    }
    return this[_values]._maxValueTime;
  }
  set _maxValueTime(value) {
    const klass = require('./Element');
    return this[_values]._maxValueTime = new klass(value);
  }
  get maxValueDecimal() {
    return this[_values].maxValueDecimal;
  }
  set maxValueDecimal(value) {
    return this[_values].maxValueDecimal = value;
  }
  get _maxValueDecimal() {
    if (!this[_values]._maxValueDecimal) {
      const klass = require('./Element');
      this[_values]._maxValueDecimal = new klass();
    }
    return this[_values]._maxValueDecimal;
  }
  set _maxValueDecimal(value) {
    const klass = require('./Element');
    return this[_values]._maxValueDecimal = new klass(value);
  }
  get maxValueInteger() {
    return this[_values].maxValueInteger;
  }
  set maxValueInteger(value) {
    return this[_values].maxValueInteger = value;
  }
  get _maxValueInteger() {
    if (!this[_values]._maxValueInteger) {
      const klass = require('./Element');
      this[_values]._maxValueInteger = new klass();
    }
    return this[_values]._maxValueInteger;
  }
  set _maxValueInteger(value) {
    const klass = require('./Element');
    return this[_values]._maxValueInteger = new klass(value);
  }
  get maxValuePositiveInt() {
    return this[_values].maxValuePositiveInt;
  }
  set maxValuePositiveInt(value) {
    return this[_values].maxValuePositiveInt = value;
  }
  get _maxValuePositiveInt() {
    if (!this[_values]._maxValuePositiveInt) {
      const klass = require('./Element');
      this[_values]._maxValuePositiveInt = new klass();
    }
    return this[_values]._maxValuePositiveInt;
  }
  set _maxValuePositiveInt(value) {
    const klass = require('./Element');
    return this[_values]._maxValuePositiveInt = new klass(value);
  }
  get maxValueUnsignedInt() {
    return this[_values].maxValueUnsignedInt;
  }
  set maxValueUnsignedInt(value) {
    return this[_values].maxValueUnsignedInt = value;
  }
  get _maxValueUnsignedInt() {
    if (!this[_values]._maxValueUnsignedInt) {
      const klass = require('./Element');
      this[_values]._maxValueUnsignedInt = new klass();
    }
    return this[_values]._maxValueUnsignedInt;
  }
  set _maxValueUnsignedInt(value) {
    const klass = require('./Element');
    return this[_values]._maxValueUnsignedInt = new klass(value);
  }
  get maxValueQuantity() {
    if (!this[_values].maxValueQuantity) {
      const klass = require('./Quantity');
      this[_values].maxValueQuantity = new klass();
    }
    return this[_values].maxValueQuantity;
  }
  set maxValueQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].maxValueQuantity = new klass(value);
  }
  get maxLength() {
    return this[_values].maxLength;
  }
  set maxLength(value) {
    return this[_values].maxLength = value;
  }
  get _maxLength() {
    if (!this[_values]._maxLength) {
      const klass = require('./Element');
      this[_values]._maxLength = new klass();
    }
    return this[_values]._maxLength;
  }
  set _maxLength(value) {
    const klass = require('./Element');
    return this[_values]._maxLength = new klass(value);
  }
  get condition() {
    return this[_values].condition;
  }
  set condition(value) {
    return this[_values].condition = value;
  }
  get _condition() {
    if (!this[_values]._condition) {
      const klass = require('./Element');
      this[_values]._condition = ArrayProxy(klass);
    }
    return this[_values]._condition;
  }
  set _condition(value) {
    const klass = require('./Element');
    this[_values]._condition = ArrayProxy(klass);
    value.forEach(entry => this[_values]._condition.push(entry));
    return this[_values]._condition;
  }
  get constraint() {
    if (!this[_values].constraint) {
      const klass = require('./ElementDefinition_Constraint');
      this[_values].constraint = ArrayProxy(klass);
    }
    return this[_values].constraint;
  }
  set constraint(value) {
    const klass = require('./ElementDefinition_Constraint');
    this[_values].constraint = ArrayProxy(klass);
    value.forEach(entry => this[_values].constraint.push(entry));
    return this[_values].constraint;
  }
  get mustSupport() {
    return this[_values].mustSupport;
  }
  set mustSupport(value) {
    return this[_values].mustSupport = value;
  }
  get _mustSupport() {
    if (!this[_values]._mustSupport) {
      const klass = require('./Element');
      this[_values]._mustSupport = new klass();
    }
    return this[_values]._mustSupport;
  }
  set _mustSupport(value) {
    const klass = require('./Element');
    return this[_values]._mustSupport = new klass(value);
  }
  get isModifier() {
    return this[_values].isModifier;
  }
  set isModifier(value) {
    return this[_values].isModifier = value;
  }
  get _isModifier() {
    if (!this[_values]._isModifier) {
      const klass = require('./Element');
      this[_values]._isModifier = new klass();
    }
    return this[_values]._isModifier;
  }
  set _isModifier(value) {
    const klass = require('./Element');
    return this[_values]._isModifier = new klass(value);
  }
  get isSummary() {
    return this[_values].isSummary;
  }
  set isSummary(value) {
    return this[_values].isSummary = value;
  }
  get _isSummary() {
    if (!this[_values]._isSummary) {
      const klass = require('./Element');
      this[_values]._isSummary = new klass();
    }
    return this[_values]._isSummary;
  }
  set _isSummary(value) {
    const klass = require('./Element');
    return this[_values]._isSummary = new klass(value);
  }
  get binding() {
    if (!this[_values].binding) {
      const klass = require('./ElementDefinition_Binding');
      this[_values].binding = new klass();
    }
    return this[_values].binding;
  }
  set binding(value) {
    const klass = require('./ElementDefinition_Binding');
    return this[_values].binding = new klass(value);
  }
  get mapping() {
    if (!this[_values].mapping) {
      const klass = require('./ElementDefinition_Mapping');
      this[_values].mapping = ArrayProxy(klass);
    }
    return this[_values].mapping;
  }
  set mapping(value) {
    const klass = require('./ElementDefinition_Mapping');
    this[_values].mapping = ArrayProxy(klass);
    value.forEach(entry => this[_values].mapping.push(entry));
    return this[_values].mapping;
  }
}
module.exports = ElementDefinition;