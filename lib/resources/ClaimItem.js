const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ClaimItem extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ClaimItem || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get sequence() {
    return this[_values].sequence;
  }

  set sequence(value) {
    return this[_values].sequence = value;
  }

  get _sequence() {
    if (!isPresent(this[_values]._sequence)) {
      const klass = require('./Element');
      this[_values]._sequence = new klass();
    }
    return this[_values]._sequence;
  }

  set _sequence(value) {
    const klass = require('./Element');
    return this[_values]._sequence = new klass(value);
  }

  get careTeamLinkId() {
    return this[_values].careTeamLinkId;
  }

  set careTeamLinkId(value) {
    return this[_values].careTeamLinkId = value;
  }

  get _careTeamLinkId() {
    if (!isPresent(this[_values]._careTeamLinkId)) {
      const klass = require('./Element');
      this[_values]._careTeamLinkId = ArrayProxy(klass);
    }
    return this[_values]._careTeamLinkId;
  }

  set _careTeamLinkId(value) {
    const klass = require('./Element');
    this[_values]._careTeamLinkId = ArrayProxy(klass);
    value.forEach(entry => this[_values]._careTeamLinkId.push(entry));
    return this[_values]._careTeamLinkId;
  }

  get diagnosisLinkId() {
    return this[_values].diagnosisLinkId;
  }

  set diagnosisLinkId(value) {
    return this[_values].diagnosisLinkId = value;
  }

  get _diagnosisLinkId() {
    if (!isPresent(this[_values]._diagnosisLinkId)) {
      const klass = require('./Element');
      this[_values]._diagnosisLinkId = ArrayProxy(klass);
    }
    return this[_values]._diagnosisLinkId;
  }

  set _diagnosisLinkId(value) {
    const klass = require('./Element');
    this[_values]._diagnosisLinkId = ArrayProxy(klass);
    value.forEach(entry => this[_values]._diagnosisLinkId.push(entry));
    return this[_values]._diagnosisLinkId;
  }

  get procedureLinkId() {
    return this[_values].procedureLinkId;
  }

  set procedureLinkId(value) {
    return this[_values].procedureLinkId = value;
  }

  get _procedureLinkId() {
    if (!isPresent(this[_values]._procedureLinkId)) {
      const klass = require('./Element');
      this[_values]._procedureLinkId = ArrayProxy(klass);
    }
    return this[_values]._procedureLinkId;
  }

  set _procedureLinkId(value) {
    const klass = require('./Element');
    this[_values]._procedureLinkId = ArrayProxy(klass);
    value.forEach(entry => this[_values]._procedureLinkId.push(entry));
    return this[_values]._procedureLinkId;
  }

  get informationLinkId() {
    return this[_values].informationLinkId;
  }

  set informationLinkId(value) {
    return this[_values].informationLinkId = value;
  }

  get _informationLinkId() {
    if (!isPresent(this[_values]._informationLinkId)) {
      const klass = require('./Element');
      this[_values]._informationLinkId = ArrayProxy(klass);
    }
    return this[_values]._informationLinkId;
  }

  set _informationLinkId(value) {
    const klass = require('./Element');
    this[_values]._informationLinkId = ArrayProxy(klass);
    value.forEach(entry => this[_values]._informationLinkId.push(entry));
    return this[_values]._informationLinkId;
  }

  get revenue() {
    if (!isPresent(this[_values].revenue)) {
      const klass = require('./CodeableConcept');
      this[_values].revenue = new klass();
    }
    return this[_values].revenue;
  }

  set revenue(value) {
    const klass = require('./CodeableConcept');
    return this[_values].revenue = new klass(value);
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
  }

  get service() {
    if (!isPresent(this[_values].service)) {
      const klass = require('./CodeableConcept');
      this[_values].service = new klass();
    }
    return this[_values].service;
  }

  set service(value) {
    const klass = require('./CodeableConcept');
    return this[_values].service = new klass(value);
  }

  get modifier() {
    if (!isPresent(this[_values].modifier)) {
      const klass = require('./CodeableConcept');
      this[_values].modifier = ArrayProxy(klass);
    }
    return this[_values].modifier;
  }

  set modifier(value) {
    const klass = require('./CodeableConcept');
    this[_values].modifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].modifier.push(entry));
    return this[_values].modifier;
  }

  get programCode() {
    if (!isPresent(this[_values].programCode)) {
      const klass = require('./CodeableConcept');
      this[_values].programCode = ArrayProxy(klass);
    }
    return this[_values].programCode;
  }

  set programCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].programCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].programCode.push(entry));
    return this[_values].programCode;
  }

  get servicedDate() {
    return this[_values].servicedDate;
  }

  set servicedDate(value) {
    return this[_values].servicedDate = value;
  }

  get _servicedDate() {
    if (!isPresent(this[_values]._servicedDate)) {
      const klass = require('./Element');
      this[_values]._servicedDate = new klass();
    }
    return this[_values]._servicedDate;
  }

  set _servicedDate(value) {
    const klass = require('./Element');
    return this[_values]._servicedDate = new klass(value);
  }

  get servicedPeriod() {
    if (!isPresent(this[_values].servicedPeriod)) {
      const klass = require('./Period');
      this[_values].servicedPeriod = new klass();
    }
    return this[_values].servicedPeriod;
  }

  set servicedPeriod(value) {
    const klass = require('./Period');
    return this[_values].servicedPeriod = new klass(value);
  }

  get locationCodeableConcept() {
    if (!isPresent(this[_values].locationCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].locationCodeableConcept = new klass();
    }
    return this[_values].locationCodeableConcept;
  }

  set locationCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].locationCodeableConcept = new klass(value);
  }

  get locationAddress() {
    if (!isPresent(this[_values].locationAddress)) {
      const klass = require('./Address');
      this[_values].locationAddress = new klass();
    }
    return this[_values].locationAddress;
  }

  set locationAddress(value) {
    const klass = require('./Address');
    return this[_values].locationAddress = new klass(value);
  }

  get locationReference() {
    if (!isPresent(this[_values].locationReference)) {
      const klass = require('./Reference');
      this[_values].locationReference = new klass();
    }
    return this[_values].locationReference;
  }

  set locationReference(value) {
    const klass = require('./Reference');
    return this[_values].locationReference = new klass(value);
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }

  get unitPrice() {
    if (!isPresent(this[_values].unitPrice)) {
      const klass = require('./Money');
      this[_values].unitPrice = new klass();
    }
    return this[_values].unitPrice;
  }

  set unitPrice(value) {
    const klass = require('./Money');
    return this[_values].unitPrice = new klass(value);
  }

  get factor() {
    return this[_values].factor;
  }

  set factor(value) {
    return this[_values].factor = value;
  }

  get _factor() {
    if (!isPresent(this[_values]._factor)) {
      const klass = require('./Element');
      this[_values]._factor = new klass();
    }
    return this[_values]._factor;
  }

  set _factor(value) {
    const klass = require('./Element');
    return this[_values]._factor = new klass(value);
  }

  get net() {
    if (!isPresent(this[_values].net)) {
      const klass = require('./Money');
      this[_values].net = new klass();
    }
    return this[_values].net;
  }

  set net(value) {
    const klass = require('./Money');
    return this[_values].net = new klass(value);
  }

  get udi() {
    if (!isPresent(this[_values].udi)) {
      const klass = require('./Reference');
      this[_values].udi = ArrayProxy(klass);
    }
    return this[_values].udi;
  }

  set udi(value) {
    const klass = require('./Reference');
    this[_values].udi = ArrayProxy(klass);
    value.forEach(entry => this[_values].udi.push(entry));
    return this[_values].udi;
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

  get subSite() {
    if (!isPresent(this[_values].subSite)) {
      const klass = require('./CodeableConcept');
      this[_values].subSite = ArrayProxy(klass);
    }
    return this[_values].subSite;
  }

  set subSite(value) {
    const klass = require('./CodeableConcept');
    this[_values].subSite = ArrayProxy(klass);
    value.forEach(entry => this[_values].subSite.push(entry));
    return this[_values].subSite;
  }

  get encounter() {
    if (!isPresent(this[_values].encounter)) {
      const klass = require('./Reference');
      this[_values].encounter = ArrayProxy(klass);
    }
    return this[_values].encounter;
  }

  set encounter(value) {
    const klass = require('./Reference');
    this[_values].encounter = ArrayProxy(klass);
    value.forEach(entry => this[_values].encounter.push(entry));
    return this[_values].encounter;
  }

  get detail() {
    if (!isPresent(this[_values].detail)) {
      const klass = require('./ClaimDetail');
      this[_values].detail = ArrayProxy(klass);
    }
    return this[_values].detail;
  }

  set detail(value) {
    const klass = require('./ClaimDetail');
    this[_values].detail = ArrayProxy(klass);
    value.forEach(entry => this[_values].detail.push(entry));
    return this[_values].detail;
  }
}

module.exports = ClaimItem;

