module.exports = klass => {
  return new Proxy(new Array(), {
    set(target, propKey, value, receiver) {
      if (propKey === 'length') {
        target.length = value;
        return true;
      }
      target[propKey] = new klass(value);
      return true;
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
