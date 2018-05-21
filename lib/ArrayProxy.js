module.exports = klass =>
  new Proxy(new Array(), {
    set(target, propKey, value, _receiver) {
      if (propKey === 'length') {
        target.length = value;
        return true;
      }
      target[propKey] = new klass(value);
      return true;
    },

    get(target, propKey, _receiver) {
      switch (propKey) {
        case 'toObject':
          return function () {
            return target.map(element => element.toObject ? element.toObject() : element);
          };
        default:
          return target[propKey];
      }
    },
  });

