module.exports = (type, value) => {
  if (type[0] < 'A' || type[0] > 'Z') {
    return value;
  }
  const klass = require(`./lib/${type}`);
  return new klass(value);
};
