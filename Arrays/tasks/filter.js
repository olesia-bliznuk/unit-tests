const { isEqual } = require('./otherFunctions.js');

function filter(array, predicate) {
    let result = [];
    switch (typeof predicate) {
        case 'function':
            for (let i = 0; i < array.length; i++) {
                if (predicate(array[i])) {
                    result[result.length] = array[i];
                    return result;
                }
            }
            break;
        case 'object':
            if (Array.isArray(predicate)) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i][predicate[0]] === predicate[1])
                        result[result.length] = array[i];
                }
            } else {
                const value = Object.values(predicate)[0];
                const key = Object.keys(predicate)[0];
                for (let i = 0; i < array.length; i++) {
                    if (isEqual(array[i], predicate))
                        result[result.length] = array[i];
                }
            }
            break;
        case 'string':
            for (let i = 0; i < array.length; i++) {
                if (array[i][predicate])
                    result[result.length] = array[i];
            }
            break;
        default:
            return array;
    }
    return result;
}

module.exports = filter;