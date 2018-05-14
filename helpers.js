module.exports.isPresent = value => {
  if (value && value.empty) {
    return !value.empty();
  }
  return !!value;
};

module.exports._values = Symbol.for('values');
module.exports._structure = Symbol.for('structure');
