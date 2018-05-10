module.exports = (type, props) => {
  if (type[0] < 'A' || type[0] > 'Z') {
    return;
  }
  return require(`./${type}`)(props);
};
