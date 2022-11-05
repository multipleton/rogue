// eslint-disable-next-line no-unused-vars
const expandObject = (object, prefix = '') => {
  const result = [];
  for (const key in object) {
    const value = object[key];
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object') {
      result.push(...expandObject(value, path));
      continue;
    }
    result.push([path, value]);
  }
  return result;
};

// eslint-disable-next-line no-unused-vars
const deepCopy = (target, source) => {
  for (const key in source) {
    if (target[key] === undefined) continue;
    if (typeof target[key] === 'object') {
      deepCopy(target[key], source[key]);
      continue;
    }
    // eslint-disable-next-line no-param-reassign
    target[key] = source[key];
  }
};
