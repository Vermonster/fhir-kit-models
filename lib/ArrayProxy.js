/* eslint-disable no-param-reassign, no-confusing-arrow */

const checkResourceType = resourceType => {
  const invalidResourceType = new RegExp('[^A-Za-z]');
  if (invalidResourceType.test(resourceType)) {
    throw new Error(`Invalid resourceType: ${resourceType}`);
  }
};

const loadResource = resourceType => {
  checkResourceType(resourceType);
  const resourcePath = `resources/${resourceType}`;
  try {
    return require(resourcePath); // eslint-disable-line import/no-dynamic-require
  } catch (_error) {
    throw new Error(`Unknown resourceType: ${resourceType}`);
  }
};

module.exports = klass =>
  new Proxy([], {
    set(target, propKey, value, receiver) {
      if (propKey === 'length') {
        return Reflect.set(target, propKey, value, receiver);
      }
      if (!klass) {
        const { resourceType } = value;
        if (resourceType) {
          const Resource = loadResource(resourceType);
          return Reflect.set(target, propKey, new Resource(value), receiver);
        }
        return false;
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

