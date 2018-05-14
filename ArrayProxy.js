const defaultValue = require('./default-value');

module.exports = type => {
  return new Proxy(new Array(), {
    set(target, propKey, value, receiver) {
      if (propKey === 'length') {
        return target.length = value;
      }
      if (type[0] < 'A' || type[0] > 'Z') {
        return target[propKey] = value;
      } else {
        return target[propKey] = defaultValue(type, value);
      }
    }
  });
};
