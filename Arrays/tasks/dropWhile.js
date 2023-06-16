const { mySlice, isEqual } = require('./otherMethods.js');

function dropWhile(array, predicate) {
    switch (typeof predicate) {
        case 'function':
            for (let i = 0; i < array.length; i++) {
                if (!predicate(array[i])) {
                    return mySlice(array, i, array.length);
                }
            }
            break;
        case 'object':
            if (Array.isArray(predicate)) {
                for (let i = 0; i < array.length; i++) {
                    if (!array[i][predicate[0]] === predicate[1])
                        return mySlice(array, i, array.length);
                }
            } else {
                const value = Object.values(predicate)[0];
                const key = Object.keys(predicate)[0];
                for (let i = 0; i < array.length; i++) {
                    if (!isEqual(array[i], predicate))
                        return mySlice(array, i, array.length);
                }
            }
            break;
        case 'string':
            for (let i = 0; i < array.length; i++) {
                if (!array[i][predicate])
                    return mySlice(array, i, array.length);
            }
            break;
        default:
            return array;
    }
}

module.exports = dropWhile;