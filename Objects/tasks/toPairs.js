function toPairs(object) {
    const result = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        result[result.length] = [key, object[key]];
      }
    }
    return result;
  }
  
  module.exports = toPairs;