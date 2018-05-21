/* eslint-disable no-param-reassign, no-confusing-arrow */

module.exports = klass =>
  new Proxy([], {
    set(target, propKey, value) {
      if (propKey === 'length') {
        target.length = value;
        return true;
      }
      target[propKey] = new klass(value);
      return true;
    },

    get(target, propKey) {
      switch (propKey) {
        case 'toObject':
          return function toObject() {
            return target.map(element => element.toObject ? element.toObject() : element);
          };
        default:
          return target[propKey];
      }
    },
  });

