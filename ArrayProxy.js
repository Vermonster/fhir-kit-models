const defaultValue = require('./default-value');

module.exports = type => {
  console.log(`Returning ArrayProxy[${type}]`);
  return new Proxy(new Array(), {
    set(target, propKey, value, receiver) {
      if (propKey === 'length') {
        return target.length = value;
      }
      if (type[0] < 'A' || type[0] > 'Z') {
        console.log(`Setting ${propKey} on ArrayProxy to a primitive(type = ${type})`);
        return target[propKey] = value;
      } else {
        console.log(`Setting ${propKey} on ArrayProxy to a ${type}`);
        return target[propKey] = defaultValue(type, value);
      }
    }
  });
};
