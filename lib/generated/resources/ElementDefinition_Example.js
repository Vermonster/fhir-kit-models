const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ElementDefinition_Example extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ElementDefinition_Example || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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
  get valueBoolean() {
    return this[_values].valueBoolean;
  }
  set valueBoolean(value) {
    return this[_values].valueBoolean = value;
  }
  get _valueBoolean() {
    if (!this[_values]._valueBoolean) {
      const klass = require('./Element');
      this[_values]._valueBoolean = new klass();
    }
    return this[_values]._valueBoolean;
  }
  set _valueBoolean(value) {
    const klass = require('./Element');
    return this[_values]._valueBoolean = new klass(value);
  }
  get valueInteger() {
    return this[_values].valueInteger;
  }
  set valueInteger(value) {
    return this[_values].valueInteger = value;
  }
  get _valueInteger() {
    if (!this[_values]._valueInteger) {
      const klass = require('./Element');
      this[_values]._valueInteger = new klass();
    }
    return this[_values]._valueInteger;
  }
  set _valueInteger(value) {
    const klass = require('./Element');
    return this[_values]._valueInteger = new klass(value);
  }
  get valueDecimal() {
    return this[_values].valueDecimal;
  }
  set valueDecimal(value) {
    return this[_values].valueDecimal = value;
  }
  get _valueDecimal() {
    if (!this[_values]._valueDecimal) {
      const klass = require('./Element');
      this[_values]._valueDecimal = new klass();
    }
    return this[_values]._valueDecimal;
  }
  set _valueDecimal(value) {
    const klass = require('./Element');
    return this[_values]._valueDecimal = new klass(value);
  }
  get valueBase64Binary() {
    return this[_values].valueBase64Binary;
  }
  set valueBase64Binary(value) {
    return this[_values].valueBase64Binary = value;
  }
  get _valueBase64Binary() {
    if (!this[_values]._valueBase64Binary) {
      const klass = require('./Element');
      this[_values]._valueBase64Binary = new klass();
    }
    return this[_values]._valueBase64Binary;
  }
  set _valueBase64Binary(value) {
    const klass = require('./Element');
    return this[_values]._valueBase64Binary = new klass(value);
  }
  get valueInstant() {
    return this[_values].valueInstant;
  }
  set valueInstant(value) {
    return this[_values].valueInstant = value;
  }
  get _valueInstant() {
    if (!this[_values]._valueInstant) {
      const klass = require('./Element');
      this[_values]._valueInstant = new klass();
    }
    return this[_values]._valueInstant;
  }
  set _valueInstant(value) {
    const klass = require('./Element');
    return this[_values]._valueInstant = new klass(value);
  }
  get valueString() {
    return this[_values].valueString;
  }
  set valueString(value) {
    return this[_values].valueString = value;
  }
  get _valueString() {
    if (!this[_values]._valueString) {
      const klass = require('./Element');
      this[_values]._valueString = new klass();
    }
    return this[_values]._valueString;
  }
  set _valueString(value) {
    const klass = require('./Element');
    return this[_values]._valueString = new klass(value);
  }
  get valueUri() {
    return this[_values].valueUri;
  }
  set valueUri(value) {
    return this[_values].valueUri = value;
  }
  get _valueUri() {
    if (!this[_values]._valueUri) {
      const klass = require('./Element');
      this[_values]._valueUri = new klass();
    }
    return this[_values]._valueUri;
  }
  set _valueUri(value) {
    const klass = require('./Element');
    return this[_values]._valueUri = new klass(value);
  }
  get valueDate() {
    return this[_values].valueDate;
  }
  set valueDate(value) {
    return this[_values].valueDate = value;
  }
  get _valueDate() {
    if (!this[_values]._valueDate) {
      const klass = require('./Element');
      this[_values]._valueDate = new klass();
    }
    return this[_values]._valueDate;
  }
  set _valueDate(value) {
    const klass = require('./Element');
    return this[_values]._valueDate = new klass(value);
  }
  get valueDateTime() {
    return this[_values].valueDateTime;
  }
  set valueDateTime(value) {
    return this[_values].valueDateTime = value;
  }
  get _valueDateTime() {
    if (!this[_values]._valueDateTime) {
      const klass = require('./Element');
      this[_values]._valueDateTime = new klass();
    }
    return this[_values]._valueDateTime;
  }
  set _valueDateTime(value) {
    const klass = require('./Element');
    return this[_values]._valueDateTime = new klass(value);
  }
  get valueTime() {
    return this[_values].valueTime;
  }
  set valueTime(value) {
    return this[_values].valueTime = value;
  }
  get _valueTime() {
    if (!this[_values]._valueTime) {
      const klass = require('./Element');
      this[_values]._valueTime = new klass();
    }
    return this[_values]._valueTime;
  }
  set _valueTime(value) {
    const klass = require('./Element');
    return this[_values]._valueTime = new klass(value);
  }
  get valueCode() {
    return this[_values].valueCode;
  }
  set valueCode(value) {
    return this[_values].valueCode = value;
  }
  get _valueCode() {
    if (!this[_values]._valueCode) {
      const klass = require('./Element');
      this[_values]._valueCode = new klass();
    }
    return this[_values]._valueCode;
  }
  set _valueCode(value) {
    const klass = require('./Element');
    return this[_values]._valueCode = new klass(value);
  }
  get valueOid() {
    return this[_values].valueOid;
  }
  set valueOid(value) {
    return this[_values].valueOid = value;
  }
  get _valueOid() {
    if (!this[_values]._valueOid) {
      const klass = require('./Element');
      this[_values]._valueOid = new klass();
    }
    return this[_values]._valueOid;
  }
  set _valueOid(value) {
    const klass = require('./Element');
    return this[_values]._valueOid = new klass(value);
  }
  get valueUuid() {
    return this[_values].valueUuid;
  }
  set valueUuid(value) {
    return this[_values].valueUuid = value;
  }
  get _valueUuid() {
    if (!this[_values]._valueUuid) {
      const klass = require('./Element');
      this[_values]._valueUuid = new klass();
    }
    return this[_values]._valueUuid;
  }
  set _valueUuid(value) {
    const klass = require('./Element');
    return this[_values]._valueUuid = new klass(value);
  }
  get valueId() {
    return this[_values].valueId;
  }
  set valueId(value) {
    return this[_values].valueId = value;
  }
  get _valueId() {
    if (!this[_values]._valueId) {
      const klass = require('./Element');
      this[_values]._valueId = new klass();
    }
    return this[_values]._valueId;
  }
  set _valueId(value) {
    const klass = require('./Element');
    return this[_values]._valueId = new klass(value);
  }
  get valueUnsignedInt() {
    return this[_values].valueUnsignedInt;
  }
  set valueUnsignedInt(value) {
    return this[_values].valueUnsignedInt = value;
  }
  get _valueUnsignedInt() {
    if (!this[_values]._valueUnsignedInt) {
      const klass = require('./Element');
      this[_values]._valueUnsignedInt = new klass();
    }
    return this[_values]._valueUnsignedInt;
  }
  set _valueUnsignedInt(value) {
    const klass = require('./Element');
    return this[_values]._valueUnsignedInt = new klass(value);
  }
  get valuePositiveInt() {
    return this[_values].valuePositiveInt;
  }
  set valuePositiveInt(value) {
    return this[_values].valuePositiveInt = value;
  }
  get _valuePositiveInt() {
    if (!this[_values]._valuePositiveInt) {
      const klass = require('./Element');
      this[_values]._valuePositiveInt = new klass();
    }
    return this[_values]._valuePositiveInt;
  }
  set _valuePositiveInt(value) {
    const klass = require('./Element');
    return this[_values]._valuePositiveInt = new klass(value);
  }
  get valueMarkdown() {
    return this[_values].valueMarkdown;
  }
  set valueMarkdown(value) {
    return this[_values].valueMarkdown = value;
  }
  get _valueMarkdown() {
    if (!this[_values]._valueMarkdown) {
      const klass = require('./Element');
      this[_values]._valueMarkdown = new klass();
    }
    return this[_values]._valueMarkdown;
  }
  set _valueMarkdown(value) {
    const klass = require('./Element');
    return this[_values]._valueMarkdown = new klass(value);
  }
  get valueElement() {
    if (!this[_values].valueElement) {
      const klass = require('./Element');
      this[_values].valueElement = new klass();
    }
    return this[_values].valueElement;
  }
  set valueElement(value) {
    const klass = require('./Element');
    return this[_values].valueElement = new klass(value);
  }
  get valueExtension() {
    if (!this[_values].valueExtension) {
      const klass = require('./Extension');
      this[_values].valueExtension = new klass();
    }
    return this[_values].valueExtension;
  }
  set valueExtension(value) {
    const klass = require('./Extension');
    return this[_values].valueExtension = new klass(value);
  }
  get valueBackboneElement() {
    if (!this[_values].valueBackboneElement) {
      const klass = require('./BackboneElement');
      this[_values].valueBackboneElement = new klass();
    }
    return this[_values].valueBackboneElement;
  }
  set valueBackboneElement(value) {
    const klass = require('./BackboneElement');
    return this[_values].valueBackboneElement = new klass(value);
  }
  get valueNarrative() {
    if (!this[_values].valueNarrative) {
      const klass = require('./Narrative');
      this[_values].valueNarrative = new klass();
    }
    return this[_values].valueNarrative;
  }
  set valueNarrative(value) {
    const klass = require('./Narrative');
    return this[_values].valueNarrative = new klass(value);
  }
  get valueAnnotation() {
    if (!this[_values].valueAnnotation) {
      const klass = require('./Annotation');
      this[_values].valueAnnotation = new klass();
    }
    return this[_values].valueAnnotation;
  }
  set valueAnnotation(value) {
    const klass = require('./Annotation');
    return this[_values].valueAnnotation = new klass(value);
  }
  get valueAttachment() {
    if (!this[_values].valueAttachment) {
      const klass = require('./Attachment');
      this[_values].valueAttachment = new klass();
    }
    return this[_values].valueAttachment;
  }
  set valueAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].valueAttachment = new klass(value);
  }
  get valueIdentifier() {
    if (!this[_values].valueIdentifier) {
      const klass = require('./Identifier');
      this[_values].valueIdentifier = new klass();
    }
    return this[_values].valueIdentifier;
  }
  set valueIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].valueIdentifier = new klass(value);
  }
  get valueCodeableConcept() {
    if (!this[_values].valueCodeableConcept) {
      const klass = require('./CodeableConcept');
      this[_values].valueCodeableConcept = new klass();
    }
    return this[_values].valueCodeableConcept;
  }
  set valueCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].valueCodeableConcept = new klass(value);
  }
  get valueCoding() {
    if (!this[_values].valueCoding) {
      const klass = require('./Coding');
      this[_values].valueCoding = new klass();
    }
    return this[_values].valueCoding;
  }
  set valueCoding(value) {
    const klass = require('./Coding');
    return this[_values].valueCoding = new klass(value);
  }
  get valueQuantity() {
    if (!this[_values].valueQuantity) {
      const klass = require('./Quantity');
      this[_values].valueQuantity = new klass();
    }
    return this[_values].valueQuantity;
  }
  set valueQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].valueQuantity = new klass(value);
  }
  get valueDuration() {
    if (!this[_values].valueDuration) {
      const klass = require('./Duration');
      this[_values].valueDuration = new klass();
    }
    return this[_values].valueDuration;
  }
  set valueDuration(value) {
    const klass = require('./Duration');
    return this[_values].valueDuration = new klass(value);
  }
  get valueSimpleQuantity() {
    if (!this[_values].valueSimpleQuantity) {
      const klass = require('./Quantity');
      this[_values].valueSimpleQuantity = new klass();
    }
    return this[_values].valueSimpleQuantity;
  }
  set valueSimpleQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].valueSimpleQuantity = new klass(value);
  }
  get valueDistance() {
    if (!this[_values].valueDistance) {
      const klass = require('./Distance');
      this[_values].valueDistance = new klass();
    }
    return this[_values].valueDistance;
  }
  set valueDistance(value) {
    const klass = require('./Distance');
    return this[_values].valueDistance = new klass(value);
  }
  get valueCount() {
    if (!this[_values].valueCount) {
      const klass = require('./Count');
      this[_values].valueCount = new klass();
    }
    return this[_values].valueCount;
  }
  set valueCount(value) {
    const klass = require('./Count');
    return this[_values].valueCount = new klass(value);
  }
  get valueMoney() {
    if (!this[_values].valueMoney) {
      const klass = require('./Money');
      this[_values].valueMoney = new klass();
    }
    return this[_values].valueMoney;
  }
  set valueMoney(value) {
    const klass = require('./Money');
    return this[_values].valueMoney = new klass(value);
  }
  get valueAge() {
    if (!this[_values].valueAge) {
      const klass = require('./Age');
      this[_values].valueAge = new klass();
    }
    return this[_values].valueAge;
  }
  set valueAge(value) {
    const klass = require('./Age');
    return this[_values].valueAge = new klass(value);
  }
  get valueRange() {
    if (!this[_values].valueRange) {
      const klass = require('./Range');
      this[_values].valueRange = new klass();
    }
    return this[_values].valueRange;
  }
  set valueRange(value) {
    const klass = require('./Range');
    return this[_values].valueRange = new klass(value);
  }
  get valuePeriod() {
    if (!this[_values].valuePeriod) {
      const klass = require('./Period');
      this[_values].valuePeriod = new klass();
    }
    return this[_values].valuePeriod;
  }
  set valuePeriod(value) {
    const klass = require('./Period');
    return this[_values].valuePeriod = new klass(value);
  }
  get valueRatio() {
    if (!this[_values].valueRatio) {
      const klass = require('./Ratio');
      this[_values].valueRatio = new klass();
    }
    return this[_values].valueRatio;
  }
  set valueRatio(value) {
    const klass = require('./Ratio');
    return this[_values].valueRatio = new klass(value);
  }
  get valueReference() {
    if (!this[_values].valueReference) {
      const klass = require('./Reference');
      this[_values].valueReference = new klass();
    }
    return this[_values].valueReference;
  }
  set valueReference(value) {
    const klass = require('./Reference');
    return this[_values].valueReference = new klass(value);
  }
  get valueSampledData() {
    if (!this[_values].valueSampledData) {
      const klass = require('./SampledData');
      this[_values].valueSampledData = new klass();
    }
    return this[_values].valueSampledData;
  }
  set valueSampledData(value) {
    const klass = require('./SampledData');
    return this[_values].valueSampledData = new klass(value);
  }
  get valueSignature() {
    if (!this[_values].valueSignature) {
      const klass = require('./Signature');
      this[_values].valueSignature = new klass();
    }
    return this[_values].valueSignature;
  }
  set valueSignature(value) {
    const klass = require('./Signature');
    return this[_values].valueSignature = new klass(value);
  }
  get valueHumanName() {
    if (!this[_values].valueHumanName) {
      const klass = require('./HumanName');
      this[_values].valueHumanName = new klass();
    }
    return this[_values].valueHumanName;
  }
  set valueHumanName(value) {
    const klass = require('./HumanName');
    return this[_values].valueHumanName = new klass(value);
  }
  get valueAddress() {
    if (!this[_values].valueAddress) {
      const klass = require('./Address');
      this[_values].valueAddress = new klass();
    }
    return this[_values].valueAddress;
  }
  set valueAddress(value) {
    const klass = require('./Address');
    return this[_values].valueAddress = new klass(value);
  }
  get valueContactPoint() {
    if (!this[_values].valueContactPoint) {
      const klass = require('./ContactPoint');
      this[_values].valueContactPoint = new klass();
    }
    return this[_values].valueContactPoint;
  }
  set valueContactPoint(value) {
    const klass = require('./ContactPoint');
    return this[_values].valueContactPoint = new klass(value);
  }
  get valueTiming() {
    if (!this[_values].valueTiming) {
      const klass = require('./Timing');
      this[_values].valueTiming = new klass();
    }
    return this[_values].valueTiming;
  }
  set valueTiming(value) {
    const klass = require('./Timing');
    return this[_values].valueTiming = new klass(value);
  }
  get valueMeta() {
    if (!this[_values].valueMeta) {
      const klass = require('./Meta');
      this[_values].valueMeta = new klass();
    }
    return this[_values].valueMeta;
  }
  set valueMeta(value) {
    const klass = require('./Meta');
    return this[_values].valueMeta = new klass(value);
  }
  get valueElementDefinition() {
    if (!this[_values].valueElementDefinition) {
      const klass = require('./ElementDefinition');
      this[_values].valueElementDefinition = new klass();
    }
    return this[_values].valueElementDefinition;
  }
  set valueElementDefinition(value) {
    const klass = require('./ElementDefinition');
    return this[_values].valueElementDefinition = new klass(value);
  }
  get valueContactDetail() {
    if (!this[_values].valueContactDetail) {
      const klass = require('./ContactDetail');
      this[_values].valueContactDetail = new klass();
    }
    return this[_values].valueContactDetail;
  }
  set valueContactDetail(value) {
    const klass = require('./ContactDetail');
    return this[_values].valueContactDetail = new klass(value);
  }
  get valueContributor() {
    if (!this[_values].valueContributor) {
      const klass = require('./Contributor');
      this[_values].valueContributor = new klass();
    }
    return this[_values].valueContributor;
  }
  set valueContributor(value) {
    const klass = require('./Contributor');
    return this[_values].valueContributor = new klass(value);
  }
  get valueDosage() {
    if (!this[_values].valueDosage) {
      const klass = require('./Dosage');
      this[_values].valueDosage = new klass();
    }
    return this[_values].valueDosage;
  }
  set valueDosage(value) {
    const klass = require('./Dosage');
    return this[_values].valueDosage = new klass(value);
  }
  get valueRelatedArtifact() {
    if (!this[_values].valueRelatedArtifact) {
      const klass = require('./RelatedArtifact');
      this[_values].valueRelatedArtifact = new klass();
    }
    return this[_values].valueRelatedArtifact;
  }
  set valueRelatedArtifact(value) {
    const klass = require('./RelatedArtifact');
    return this[_values].valueRelatedArtifact = new klass(value);
  }
  get valueUsageContext() {
    if (!this[_values].valueUsageContext) {
      const klass = require('./UsageContext');
      this[_values].valueUsageContext = new klass();
    }
    return this[_values].valueUsageContext;
  }
  set valueUsageContext(value) {
    const klass = require('./UsageContext');
    return this[_values].valueUsageContext = new klass(value);
  }
  get valueDataRequirement() {
    if (!this[_values].valueDataRequirement) {
      const klass = require('./DataRequirement');
      this[_values].valueDataRequirement = new klass();
    }
    return this[_values].valueDataRequirement;
  }
  set valueDataRequirement(value) {
    const klass = require('./DataRequirement');
    return this[_values].valueDataRequirement = new klass(value);
  }
  get valueParameterDefinition() {
    if (!this[_values].valueParameterDefinition) {
      const klass = require('./ParameterDefinition');
      this[_values].valueParameterDefinition = new klass();
    }
    return this[_values].valueParameterDefinition;
  }
  set valueParameterDefinition(value) {
    const klass = require('./ParameterDefinition');
    return this[_values].valueParameterDefinition = new klass(value);
  }
  get valueTriggerDefinition() {
    if (!this[_values].valueTriggerDefinition) {
      const klass = require('./TriggerDefinition');
      this[_values].valueTriggerDefinition = new klass();
    }
    return this[_values].valueTriggerDefinition;
  }
  set valueTriggerDefinition(value) {
    const klass = require('./TriggerDefinition');
    return this[_values].valueTriggerDefinition = new klass(value);
  }
}
module.exports = ElementDefinition_Example;