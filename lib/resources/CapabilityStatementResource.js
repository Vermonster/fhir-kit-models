const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CapabilityStatementResource extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatementResource || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get profile() {
    if (!isPresent(this[_values].profile)) {
      const klass = require('./Reference');
      this[_values].profile = new klass();
    }
    return this[_values].profile;
  }

  set profile(value) {
    const klass = require('./Reference');
    return this[_values].profile = new klass(value);
  }

  get documentation() {
    return this[_values].documentation;
  }

  set documentation(value) {
    return this[_values].documentation = value;
  }

  get _documentation() {
    if (!isPresent(this[_values]._documentation)) {
      const klass = require('./Element');
      this[_values]._documentation = new klass();
    }
    return this[_values]._documentation;
  }

  set _documentation(value) {
    const klass = require('./Element');
    return this[_values]._documentation = new klass(value);
  }

  get interaction() {
    if (!isPresent(this[_values].interaction)) {
      const klass = require('./CapabilityStatementInteraction');
      this[_values].interaction = ArrayProxy(klass);
    }
    return this[_values].interaction;
  }

  set interaction(value) {
    const klass = require('./CapabilityStatementInteraction');
    this[_values].interaction = ArrayProxy(klass);
    value.forEach(entry => this[_values].interaction.push(entry));
    return this[_values].interaction;
  }

  get versioning() {
    return this[_values].versioning;
  }

  set versioning(value) {
    return this[_values].versioning = value;
  }

  get _versioning() {
    if (!isPresent(this[_values]._versioning)) {
      const klass = require('./Element');
      this[_values]._versioning = new klass();
    }
    return this[_values]._versioning;
  }

  set _versioning(value) {
    const klass = require('./Element');
    return this[_values]._versioning = new klass(value);
  }

  get readHistory() {
    return this[_values].readHistory;
  }

  set readHistory(value) {
    return this[_values].readHistory = value;
  }

  get _readHistory() {
    if (!isPresent(this[_values]._readHistory)) {
      const klass = require('./Element');
      this[_values]._readHistory = new klass();
    }
    return this[_values]._readHistory;
  }

  set _readHistory(value) {
    const klass = require('./Element');
    return this[_values]._readHistory = new klass(value);
  }

  get updateCreate() {
    return this[_values].updateCreate;
  }

  set updateCreate(value) {
    return this[_values].updateCreate = value;
  }

  get _updateCreate() {
    if (!isPresent(this[_values]._updateCreate)) {
      const klass = require('./Element');
      this[_values]._updateCreate = new klass();
    }
    return this[_values]._updateCreate;
  }

  set _updateCreate(value) {
    const klass = require('./Element');
    return this[_values]._updateCreate = new klass(value);
  }

  get conditionalCreate() {
    return this[_values].conditionalCreate;
  }

  set conditionalCreate(value) {
    return this[_values].conditionalCreate = value;
  }

  get _conditionalCreate() {
    if (!isPresent(this[_values]._conditionalCreate)) {
      const klass = require('./Element');
      this[_values]._conditionalCreate = new klass();
    }
    return this[_values]._conditionalCreate;
  }

  set _conditionalCreate(value) {
    const klass = require('./Element');
    return this[_values]._conditionalCreate = new klass(value);
  }

  get conditionalRead() {
    return this[_values].conditionalRead;
  }

  set conditionalRead(value) {
    return this[_values].conditionalRead = value;
  }

  get _conditionalRead() {
    if (!isPresent(this[_values]._conditionalRead)) {
      const klass = require('./Element');
      this[_values]._conditionalRead = new klass();
    }
    return this[_values]._conditionalRead;
  }

  set _conditionalRead(value) {
    const klass = require('./Element');
    return this[_values]._conditionalRead = new klass(value);
  }

  get conditionalUpdate() {
    return this[_values].conditionalUpdate;
  }

  set conditionalUpdate(value) {
    return this[_values].conditionalUpdate = value;
  }

  get _conditionalUpdate() {
    if (!isPresent(this[_values]._conditionalUpdate)) {
      const klass = require('./Element');
      this[_values]._conditionalUpdate = new klass();
    }
    return this[_values]._conditionalUpdate;
  }

  set _conditionalUpdate(value) {
    const klass = require('./Element');
    return this[_values]._conditionalUpdate = new klass(value);
  }

  get conditionalDelete() {
    return this[_values].conditionalDelete;
  }

  set conditionalDelete(value) {
    return this[_values].conditionalDelete = value;
  }

  get _conditionalDelete() {
    if (!isPresent(this[_values]._conditionalDelete)) {
      const klass = require('./Element');
      this[_values]._conditionalDelete = new klass();
    }
    return this[_values]._conditionalDelete;
  }

  set _conditionalDelete(value) {
    const klass = require('./Element');
    return this[_values]._conditionalDelete = new klass(value);
  }

  get referencePolicy() {
    return this[_values].referencePolicy;
  }

  set referencePolicy(value) {
    return this[_values].referencePolicy = value;
  }

  get _referencePolicy() {
    if (!isPresent(this[_values]._referencePolicy)) {
      const klass = require('./Element');
      this[_values]._referencePolicy = ArrayProxy(klass);
    }
    return this[_values]._referencePolicy;
  }

  set _referencePolicy(value) {
    const klass = require('./Element');
    this[_values]._referencePolicy = ArrayProxy(klass);
    value.forEach(entry => this[_values]._referencePolicy.push(entry));
    return this[_values]._referencePolicy;
  }

  get searchInclude() {
    return this[_values].searchInclude;
  }

  set searchInclude(value) {
    return this[_values].searchInclude = value;
  }

  get _searchInclude() {
    if (!isPresent(this[_values]._searchInclude)) {
      const klass = require('./Element');
      this[_values]._searchInclude = ArrayProxy(klass);
    }
    return this[_values]._searchInclude;
  }

  set _searchInclude(value) {
    const klass = require('./Element');
    this[_values]._searchInclude = ArrayProxy(klass);
    value.forEach(entry => this[_values]._searchInclude.push(entry));
    return this[_values]._searchInclude;
  }

  get searchRevInclude() {
    return this[_values].searchRevInclude;
  }

  set searchRevInclude(value) {
    return this[_values].searchRevInclude = value;
  }

  get _searchRevInclude() {
    if (!isPresent(this[_values]._searchRevInclude)) {
      const klass = require('./Element');
      this[_values]._searchRevInclude = ArrayProxy(klass);
    }
    return this[_values]._searchRevInclude;
  }

  set _searchRevInclude(value) {
    const klass = require('./Element');
    this[_values]._searchRevInclude = ArrayProxy(klass);
    value.forEach(entry => this[_values]._searchRevInclude.push(entry));
    return this[_values]._searchRevInclude;
  }

  get searchParam() {
    if (!isPresent(this[_values].searchParam)) {
      const klass = require('./CapabilityStatementSearchParam');
      this[_values].searchParam = ArrayProxy(klass);
    }
    return this[_values].searchParam;
  }

  set searchParam(value) {
    const klass = require('./CapabilityStatementSearchParam');
    this[_values].searchParam = ArrayProxy(klass);
    value.forEach(entry => this[_values].searchParam.push(entry));
    return this[_values].searchParam;
  }
}

module.exports = CapabilityStatementResource;

