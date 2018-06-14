const checkResourceType = resourceType => {
  if (!resourceType) {
    throw new Error('resourceType must be specified');
  }
  const invalidResourceType = new RegExp('[^A-Za-z]');
  if (invalidResourceType.test(resourceType)) {
    throw new Error(`Invalid resourceType: ${resourceType}`);
  }
};

const loadResource = resourceType => {
  checkResourceType(resourceType);
  const resourcePath = `./${resourceType}`;
  console.log(`loading ${resourcePath}`);
  try {
    return require(resourcePath); // eslint-disable-line import/no-dynamic-require
  } catch (_error) {
    throw new Error(`Unknown resourceType: ${resourceType}`);
  }
};

const isPresent = value => {
  if (value === undefined) {
    return false;
  }
  if (value !== null) {
    if (value.length === 0 || (Object.keys(value).length === 0 && value.constructor === Object)) {
      return false;
    }
    if (value instanceof Array) {
      return value.some(isPresent);
    }
    if (value.toObject) {
      return isPresent(value.toObject());
    }
    if (value instanceof Object) {
      const entries = Object.entries(value).filter(([key]) => key !== 'resourceType');
      for (const [_key, objectValue] of entries) {
        if (isPresent(objectValue)) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
};

module.exports = {
  isPresent,
  loadResource,
  _values: Symbol.for('values'),
};
