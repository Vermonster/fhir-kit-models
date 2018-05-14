module.exports.isPresent = value => {
  if (value && value.empty) {
    return !value.empty();
  }
  return !!value;
};
