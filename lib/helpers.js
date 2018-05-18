const isPresent = value => {
  if (value === undefined) {
    return false;
  }
  if (value !== null) {
    if (value.empty) {
      return !value.empty();
    }
    if (value.length === 0 || (Object.keys(value).length === 0 && value.constructor === Object)) {
      return false;
    }
    if (value instanceof Array) {
      return value.some(isPresent);
    }
    if (value instanceof Object) {
      for (const [_key, objectValue] of Object.entries(value)) {
        if (isPresent(objectValue)) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
};

module.exports = {
  isPresent,
  _values: Symbol.for('values'),
};
