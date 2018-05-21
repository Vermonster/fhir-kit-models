
const { isPresent, _values } = require('../helpers');

const Element = require('./Element');

class Attachment extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Attachment ||
      values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get contentType() {
    return this[_values].contentType;
  }

  set contentType(value) {
    return this[_values].contentType = value;
  }

  get _contentType() {
    if (!isPresent(this[_values]._contentType)) {
      const klass = require('./Element');
      this[_values]._contentType = new klass();
    }
    return this[_values]._contentType;
  }

  set _contentType(value) {
    const klass = require('./Element');
    return this[_values]._contentType = new klass(value);
  }

  get language() {
    return this[_values].language;
  }

  set language(value) {
    return this[_values].language = value;
  }

  get _language() {
    if (!isPresent(this[_values]._language)) {
      const klass = require('./Element');
      this[_values]._language = new klass();
    }
    return this[_values]._language;
  }

  set _language(value) {
    const klass = require('./Element');
    return this[_values]._language = new klass(value);
  }

  get data() {
    return this[_values].data;
  }

  set data(value) {
    return this[_values].data = value;
  }

  get _data() {
    if (!isPresent(this[_values]._data)) {
      const klass = require('./Element');
      this[_values]._data = new klass();
    }
    return this[_values]._data;
  }

  set _data(value) {
    const klass = require('./Element');
    return this[_values]._data = new klass(value);
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

  get size() {
    return this[_values].size;
  }

  set size(value) {
    return this[_values].size = value;
  }

  get _size() {
    if (!isPresent(this[_values]._size)) {
      const klass = require('./Element');
      this[_values]._size = new klass();
    }
    return this[_values]._size;
  }

  set _size(value) {
    const klass = require('./Element');
    return this[_values]._size = new klass(value);
  }

  get hash() {
    return this[_values].hash;
  }

  set hash(value) {
    return this[_values].hash = value;
  }

  get _hash() {
    if (!isPresent(this[_values]._hash)) {
      const klass = require('./Element');
      this[_values]._hash = new klass();
    }
    return this[_values]._hash;
  }

  set _hash(value) {
    const klass = require('./Element');
    return this[_values]._hash = new klass(value);
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

  get creation() {
    return this[_values].creation;
  }

  set creation(value) {
    return this[_values].creation = value;
  }

  get _creation() {
    if (!isPresent(this[_values]._creation)) {
      const klass = require('./Element');
      this[_values]._creation = new klass();
    }
    return this[_values]._creation;
  }

  set _creation(value) {
    const klass = require('./Element');
    return this[_values]._creation = new klass(value);
  }
}

module.exports = Attachment;

