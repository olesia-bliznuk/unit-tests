function omitBy(object, func) {
  if (!func)
    return {};
  const result = {};
  for (let key in object) {
    if (!func(object[key])) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = omitBy;