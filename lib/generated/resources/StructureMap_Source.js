const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class StructureMap_Source extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureMap_Source || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get context() {
    return this[_values].context;
  }
  set context(value) {
    return this[_values].context = value;
  }
  get _context() {
    if (!this[_values]._context) {
      const klass = require('./Element');
      this[_values]._context = new klass();
    }
    return this[_values]._context;
  }
  set _context(value) {
    const klass = require('./Element');
    return this[_values]._context = new klass(value);
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
  get type() {
    return this[_values].type;
  }
  set type(value) {
    return this[_values].type = value;
  }
  get _type() {
    if (!this[_values]._type) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }
  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
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
  get element() {
    return this[_values].element;
  }
  set element(value) {
    return this[_values].element = value;
  }
  get _element() {
    if (!this[_values]._element) {
      const klass = require('./Element');
      this[_values]._element = new klass();
    }
    return this[_values]._element;
  }
  set _element(value) {
    const klass = require('./Element');
    return this[_values]._element = new klass(value);
  }
  get listMode() {
    return this[_values].listMode;
  }
  set listMode(value) {
    return this[_values].listMode = value;
  }
  get _listMode() {
    if (!this[_values]._listMode) {
      const klass = require('./Element');
      this[_values]._listMode = new klass();
    }
    return this[_values]._listMode;
  }
  set _listMode(value) {
    const klass = require('./Element');
    return this[_values]._listMode = new klass(value);
  }
  get variable() {
    return this[_values].variable;
  }
  set variable(value) {
    return this[_values].variable = value;
  }
  get _variable() {
    if (!this[_values]._variable) {
      const klass = require('./Element');
      this[_values]._variable = new klass();
    }
    return this[_values]._variable;
  }
  set _variable(value) {
    const klass = require('./Element');
    return this[_values]._variable = new klass(value);
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
      this[_values]._condition = new klass();
    }
    return this[_values]._condition;
  }
  set _condition(value) {
    const klass = require('./Element');
    return this[_values]._condition = new klass(value);
  }
  get check() {
    return this[_values].check;
  }
  set check(value) {
    return this[_values].check = value;
  }
  get _check() {
    if (!this[_values]._check) {
      const klass = require('./Element');
      this[_values]._check = new klass();
    }
    return this[_values]._check;
  }
  set _check(value) {
    const klass = require('./Element');
    return this[_values]._check = new klass(value);
  }
}
module.exports = StructureMap_Source;