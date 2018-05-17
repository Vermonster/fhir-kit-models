module.exports.isPresent = value => {
  if (value === undefined || value === null) {
    return false;
  }
  if (value.empty) {
    return !value.empty();
  }
  if (value.length === 0 || (Object.keys(value).length === 0 && value.constructor === Object)) {
    return false;
  }
  return true;
};

module.exports._values = Symbol.for('values');
