const defaultValue = require('./default-value');
const ArrayProxy = require('./ArrayProxy');

const structure = {
  properties: {
    id: {
      min: 0,
      max: '1',
      type: 'string',
    },
    _id: {
      type: 'Element',
      min: 0,
      max: '1',
    },
    extension: {
      min: 0,
      max: '*',
      // items: 'Extension',
      items: 'Element',
    },
  }
};

class Element {
  constructor(values) {
    this.structure = structure;
    this.values = values;
  }
}

module.exports = (props = {}) => {
  return new Proxy(new Element(props), {
    get(target, propKey, receiver) {
      const property = target.structure.properties[propKey];
      if (!property) {
        return;
      }
      if (!target.values[propKey]) {
        if (property.max === '*') {
          console.log(`Creating ArrayProxy[${property.items}]`)
          return target.values[propKey] = ArrayProxy(property.items);
        }
        return defaultValue(property.type);
      }
      return target.values[propKey];
    },

    set(target, propKey, value, receiver) {
      const property = target.structure.properties[propKey];
      if (!property) {
        return;
      }
      const type = property.type;
      if (type[0] < 'A' || type[0] > 'Z') {
        console.log(`Setting ${propKey} to a primitive (type=${type})`);
        return target.values[propKey] = value;
      }
      console.log(`Setting ${propKey} to a ${type})`);
      return target.values[propKey] = defaultValue(type, value);
    },
  });
};
