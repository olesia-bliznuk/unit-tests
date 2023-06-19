function merge(object, ...sources) {
    for (const obj of sources) {
      for (const key of Object.keys(obj)) {
        if (!Object.hasOwn(object, key) || typeof obj[key] !== 'object') object[key] = obj[key];
        else merge(object[key], obj[key]);
      }
    }
    return object;
  }

module.exports = merge;