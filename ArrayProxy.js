const defaultValue = require('./default-value');

module.exports = type => {
  return new Proxy(new Array(), {
    set(target, propKey, value, receiver) {
      if (propKey === 'length') {
        return target.length = value;
      }
      return target[propKey] = defaultValue(type, value);
    },

    get(target, propKey, receiver) {
      switch(propKey) {
      case 'toObject':
        return function() {
          return target.map(element => element.toObject ? element.toObject() : element);
        };
      }
      return target[propKey];
    },
  });
};
