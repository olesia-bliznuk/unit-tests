const { myInclude } = require('./otherFunctions');

function omit(object, sources) {
    if (!sources)
        return object;
    let result = {};
    for (key in object) {
        if (!myInclude(sources, key))
            result[key] = object[key];
    }
    return result;
}

module.exports = omit;