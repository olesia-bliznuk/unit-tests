const { isEqual } = require('./otherFunctions.js');

function find(collection, predicate, fromIndex = 0) {
    switch (typeof predicate) {
        case 'function':
            for (let i = fromIndex; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    return collection[i];
                }
            }
            break;
        case 'object':
            if (Array.isArray(predicate)) {
                for (let i = fromIndex; i < collection.length; i++) {
                    if (collection[i][predicate[0]] === predicate[1])
                        return collection[i];
                }
            } else {
                const value = Object.values(predicate)[0];
                const key = Object.keys(predicate)[0];
                for (let i = fromIndex; i < collection.length; i++) {
                    if (isEqual(collection[i], predicate))
                        return collection[i];
                }
            }
            break;
        case 'string':
            for (let i = fromIndex; i < collection.length; i++) {
                if (collection[i][predicate])
                    return collection[i];
            }
            break;
        default:
            return undefined;
    }
    return undefined;
}

module.exports = find;