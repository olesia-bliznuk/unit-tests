const { myInclude } = require('./otherFunctions');

function pick(object, path) {
    let result = {};
    for (key in object){
        if (myInclude(path, key)){
            result[key] = object[key];
        }
    }
    return result;
}

module.exports = pick;