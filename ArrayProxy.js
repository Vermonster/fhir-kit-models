const defaultValue = require('./default-value');

module.exports = type => {
  return new Proxy(new Array(), {
    set(target, propKey, value, receiver) {
      if (propKey === 'length') {
        return target.length = value;
      }
      return target[propKey] = defaultValue(type, value);
    }
  });
};
