module.exports = (type, props) => {
  if (type[0] < 'A' || type[0] > 'Z') {
    return;
  }
  const klass = require(`./${type}`);
  return new klass(props);
};
