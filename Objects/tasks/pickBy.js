function pickBy(object, func) {
    const result = {};
    for (let key in object) {
      if (func(object[key])) {
        result[key] = object[key];
      }
    }
    return result;
  }
  
  module.exports = pickBy;