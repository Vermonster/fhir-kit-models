const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Measure extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Measure ||
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

  get url() {
    return this[_values].url;
  }

  set url(value) {
    return this[_values].url = value;
  }

  get _url() {
    if (!isPresent(this[_values]._url)) {
      const klass = require('./Element');
      this[_values]._url = new klass();
    }
    return this[_values]._url;
  }

  set _url(value) {
    const klass = require('./Element');
    return this[_values]._url = new klass(value);
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

  get version() {
    return this[_values].version;
  }

  set version(value) {
    return this[_values].version = value;
  }

  get _version() {
    if (!isPresent(this[_values]._version)) {
      const klass = require('./Element');
      this[_values]._version = new klass();
    }
    return this[_values]._version;
  }

  set _version(value) {
    const klass = require('./Element');
    return this[_values]._version = new klass(value);
  }

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
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

  get experimental() {
    return this[_values].experimental;
  }

  set experimental(value) {
    return this[_values].experimental = value;
  }

  get _experimental() {
    if (!isPresent(this[_values]._experimental)) {
      const klass = require('./Element');
      this[_values]._experimental = new klass();
    }
    return this[_values]._experimental;
  }

  set _experimental(value) {
    const klass = require('./Element');
    return this[_values]._experimental = new klass(value);
  }

  get date() {
    return this[_values].date;
  }

  set date(value) {
    return this[_values].date = value;
  }

  get _date() {
    if (!isPresent(this[_values]._date)) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }

  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }

  get publisher() {
    return this[_values].publisher;
  }

  set publisher(value) {
    return this[_values].publisher = value;
  }

  get _publisher() {
    if (!isPresent(this[_values]._publisher)) {
      const klass = require('./Element');
      this[_values]._publisher = new klass();
    }
    return this[_values]._publisher;
  }

  set _publisher(value) {
    const klass = require('./Element');
    return this[_values]._publisher = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get purpose() {
    return this[_values].purpose;
  }

  set purpose(value) {
    return this[_values].purpose = value;
  }

  get _purpose() {
    if (!isPresent(this[_values]._purpose)) {
      const klass = require('./Element');
      this[_values]._purpose = new klass();
    }
    return this[_values]._purpose;
  }

  set _purpose(value) {
    const klass = require('./Element');
    return this[_values]._purpose = new klass(value);
  }

  get usage() {
    return this[_values].usage;
  }

  set usage(value) {
    return this[_values].usage = value;
  }

  get _usage() {
    if (!isPresent(this[_values]._usage)) {
      const klass = require('./Element');
      this[_values]._usage = new klass();
    }
    return this[_values]._usage;
  }

  set _usage(value) {
    const klass = require('./Element');
    return this[_values]._usage = new klass(value);
  }

  get approvalDate() {
    return this[_values].approvalDate;
  }

  set approvalDate(value) {
    return this[_values].approvalDate = value;
  }

  get _approvalDate() {
    if (!isPresent(this[_values]._approvalDate)) {
      const klass = require('./Element');
      this[_values]._approvalDate = new klass();
    }
    return this[_values]._approvalDate;
  }

  set _approvalDate(value) {
    const klass = require('./Element');
    return this[_values]._approvalDate = new klass(value);
  }

  get lastReviewDate() {
    return this[_values].lastReviewDate;
  }

  set lastReviewDate(value) {
    return this[_values].lastReviewDate = value;
  }

  get _lastReviewDate() {
    if (!isPresent(this[_values]._lastReviewDate)) {
      const klass = require('./Element');
      this[_values]._lastReviewDate = new klass();
    }
    return this[_values]._lastReviewDate;
  }

  set _lastReviewDate(value) {
    const klass = require('./Element');
    return this[_values]._lastReviewDate = new klass(value);
  }

  get effectivePeriod() {
    if (!isPresent(this[_values].effectivePeriod)) {
      const klass = require('./Period');
      this[_values].effectivePeriod = new klass();
    }
    return this[_values].effectivePeriod;
  }

  set effectivePeriod(value) {
    const klass = require('./Period');
    return this[_values].effectivePeriod = new klass(value);
  }

  get useContext() {
    if (!isPresent(this[_values].useContext)) {
      const klass = require('./UsageContext');
      this[_values].useContext = ArrayProxy(klass);
    }
    return this[_values].useContext;
  }

  set useContext(value) {
    const klass = require('./UsageContext');
    this[_values].useContext = ArrayProxy(klass);
    value.forEach(entry => this[_values].useContext.push(entry));
    return this[_values].useContext;
  }

  get jurisdiction() {
    if (!isPresent(this[_values].jurisdiction)) {
      const klass = require('./CodeableConcept');
      this[_values].jurisdiction = ArrayProxy(klass);
    }
    return this[_values].jurisdiction;
  }

  set jurisdiction(value) {
    const klass = require('./CodeableConcept');
    this[_values].jurisdiction = ArrayProxy(klass);
    value.forEach(entry => this[_values].jurisdiction.push(entry));
    return this[_values].jurisdiction;
  }

  get topic() {
    if (!isPresent(this[_values].topic)) {
      const klass = require('./CodeableConcept');
      this[_values].topic = ArrayProxy(klass);
    }
    return this[_values].topic;
  }

  set topic(value) {
    const klass = require('./CodeableConcept');
    this[_values].topic = ArrayProxy(klass);
    value.forEach(entry => this[_values].topic.push(entry));
    return this[_values].topic;
  }

  get contributor() {
    if (!isPresent(this[_values].contributor)) {
      const klass = require('./Contributor');
      this[_values].contributor = ArrayProxy(klass);
    }
    return this[_values].contributor;
  }

  set contributor(value) {
    const klass = require('./Contributor');
    this[_values].contributor = ArrayProxy(klass);
    value.forEach(entry => this[_values].contributor.push(entry));
    return this[_values].contributor;
  }

  get contact() {
    if (!isPresent(this[_values].contact)) {
      const klass = require('./ContactDetail');
      this[_values].contact = ArrayProxy(klass);
    }
    return this[_values].contact;
  }

  set contact(value) {
    const klass = require('./ContactDetail');
    this[_values].contact = ArrayProxy(klass);
    value.forEach(entry => this[_values].contact.push(entry));
    return this[_values].contact;
  }

  get copyright() {
    return this[_values].copyright;
  }

  set copyright(value) {
    return this[_values].copyright = value;
  }

  get _copyright() {
    if (!isPresent(this[_values]._copyright)) {
      const klass = require('./Element');
      this[_values]._copyright = new klass();
    }
    return this[_values]._copyright;
  }

  set _copyright(value) {
    const klass = require('./Element');
    return this[_values]._copyright = new klass(value);
  }

  get relatedArtifact() {
    if (!isPresent(this[_values].relatedArtifact)) {
      const klass = require('./RelatedArtifact');
      this[_values].relatedArtifact = ArrayProxy(klass);
    }
    return this[_values].relatedArtifact;
  }

  set relatedArtifact(value) {
    const klass = require('./RelatedArtifact');
    this[_values].relatedArtifact = ArrayProxy(klass);
    value.forEach(entry => this[_values].relatedArtifact.push(entry));
    return this[_values].relatedArtifact;
  }

  get library() {
    if (!isPresent(this[_values].library)) {
      const klass = require('./Reference');
      this[_values].library = ArrayProxy(klass);
    }
    return this[_values].library;
  }

  set library(value) {
    const klass = require('./Reference');
    this[_values].library = ArrayProxy(klass);
    value.forEach(entry => this[_values].library.push(entry));
    return this[_values].library;
  }

  get disclaimer() {
    return this[_values].disclaimer;
  }

  set disclaimer(value) {
    return this[_values].disclaimer = value;
  }

  get _disclaimer() {
    if (!isPresent(this[_values]._disclaimer)) {
      const klass = require('./Element');
      this[_values]._disclaimer = new klass();
    }
    return this[_values]._disclaimer;
  }

  set _disclaimer(value) {
    const klass = require('./Element');
    return this[_values]._disclaimer = new klass(value);
  }

  get scoring() {
    if (!isPresent(this[_values].scoring)) {
      const klass = require('./CodeableConcept');
      this[_values].scoring = new klass();
    }
    return this[_values].scoring;
  }

  set scoring(value) {
    const klass = require('./CodeableConcept');
    return this[_values].scoring = new klass(value);
  }

  get compositeScoring() {
    if (!isPresent(this[_values].compositeScoring)) {
      const klass = require('./CodeableConcept');
      this[_values].compositeScoring = new klass();
    }
    return this[_values].compositeScoring;
  }

  set compositeScoring(value) {
    const klass = require('./CodeableConcept');
    return this[_values].compositeScoring = new klass(value);
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = ArrayProxy(klass);
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    this[_values].type = ArrayProxy(klass);
    value.forEach(entry => this[_values].type.push(entry));
    return this[_values].type;
  }

  get riskAdjustment() {
    return this[_values].riskAdjustment;
  }

  set riskAdjustment(value) {
    return this[_values].riskAdjustment = value;
  }

  get _riskAdjustment() {
    if (!isPresent(this[_values]._riskAdjustment)) {
      const klass = require('./Element');
      this[_values]._riskAdjustment = new klass();
    }
    return this[_values]._riskAdjustment;
  }

  set _riskAdjustment(value) {
    const klass = require('./Element');
    return this[_values]._riskAdjustment = new klass(value);
  }

  get rateAggregation() {
    return this[_values].rateAggregation;
  }

  set rateAggregation(value) {
    return this[_values].rateAggregation = value;
  }

  get _rateAggregation() {
    if (!isPresent(this[_values]._rateAggregation)) {
      const klass = require('./Element');
      this[_values]._rateAggregation = new klass();
    }
    return this[_values]._rateAggregation;
  }

  set _rateAggregation(value) {
    const klass = require('./Element');
    return this[_values]._rateAggregation = new klass(value);
  }

  get rationale() {
    return this[_values].rationale;
  }

  set rationale(value) {
    return this[_values].rationale = value;
  }

  get _rationale() {
    if (!isPresent(this[_values]._rationale)) {
      const klass = require('./Element');
      this[_values]._rationale = new klass();
    }
    return this[_values]._rationale;
  }

  set _rationale(value) {
    const klass = require('./Element');
    return this[_values]._rationale = new klass(value);
  }

  get clinicalRecommendationStatement() {
    return this[_values].clinicalRecommendationStatement;
  }

  set clinicalRecommendationStatement(value) {
    return this[_values].clinicalRecommendationStatement = value;
  }

  get _clinicalRecommendationStatement() {
    if (!isPresent(this[_values]._clinicalRecommendationStatement)) {
      const klass = require('./Element');
      this[_values]._clinicalRecommendationStatement = new klass();
    }
    return this[_values]._clinicalRecommendationStatement;
  }

  set _clinicalRecommendationStatement(value) {
    const klass = require('./Element');
    return this[_values]._clinicalRecommendationStatement = new klass(value);
  }

  get improvementNotation() {
    return this[_values].improvementNotation;
  }

  set improvementNotation(value) {
    return this[_values].improvementNotation = value;
  }

  get _improvementNotation() {
    if (!isPresent(this[_values]._improvementNotation)) {
      const klass = require('./Element');
      this[_values]._improvementNotation = new klass();
    }
    return this[_values]._improvementNotation;
  }

  set _improvementNotation(value) {
    const klass = require('./Element');
    return this[_values]._improvementNotation = new klass(value);
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
      this[_values]._definition = ArrayProxy(klass);
    }
    return this[_values]._definition;
  }

  set _definition(value) {
    const klass = require('./Element');
    this[_values]._definition = ArrayProxy(klass);
    value.forEach(entry => this[_values]._definition.push(entry));
    return this[_values]._definition;
  }

  get guidance() {
    return this[_values].guidance;
  }

  set guidance(value) {
    return this[_values].guidance = value;
  }

  get _guidance() {
    if (!isPresent(this[_values]._guidance)) {
      const klass = require('./Element');
      this[_values]._guidance = new klass();
    }
    return this[_values]._guidance;
  }

  set _guidance(value) {
    const klass = require('./Element');
    return this[_values]._guidance = new klass(value);
  }

  get set() {
    return this[_values].set;
  }

  set set(value) {
    return this[_values].set = value;
  }

  get _set() {
    if (!isPresent(this[_values]._set)) {
      const klass = require('./Element');
      this[_values]._set = new klass();
    }
    return this[_values]._set;
  }

  set _set(value) {
    const klass = require('./Element');
    return this[_values]._set = new klass(value);
  }

  get group() {
    if (!isPresent(this[_values].group)) {
      const klass = require('./MeasureGroup');
      this[_values].group = ArrayProxy(klass);
    }
    return this[_values].group;
  }

  set group(value) {
    const klass = require('./MeasureGroup');
    this[_values].group = ArrayProxy(klass);
    value.forEach(entry => this[_values].group.push(entry));
    return this[_values].group;
  }

  get supplementalData() {
    if (!isPresent(this[_values].supplementalData)) {
      const klass = require('./MeasureSupplementalData');
      this[_values].supplementalData = ArrayProxy(klass);
    }
    return this[_values].supplementalData;
  }

  set supplementalData(value) {
    const klass = require('./MeasureSupplementalData');
    this[_values].supplementalData = ArrayProxy(klass);
    value.forEach(entry => this[_values].supplementalData.push(entry));
    return this[_values].supplementalData;
  }
}

module.exports = Measure;

