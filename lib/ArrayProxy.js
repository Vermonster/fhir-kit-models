/* eslint-disable no-param-reassign, no-confusing-arrow */

const { loadResource } = require('./helpers');

module.exports = klass =>
  new Proxy([], {
    set(target, propKey, value, receiver) {
      if (propKey === 'length') {
        return Reflect.set(target, propKey, value, receiver);
      }
      if (!klass) {
        const { resourceType } = value;
        const Resource = loadResource(resourceType);
        return Reflect.set(target, propKey, new Resource(value), receiver);
      }
      return Reflect.set(target, propKey, new klass(value), receiver);
    },

    get(target, propKey, receiver) {
      switch (propKey) {
        case 'toObject':
          return function toObject() {
            return target.map(element => element.toObject ? element.toObject() : element);
          };
        default:
          return Reflect.get(target, propKey, receiver);
      }
    },
  });

