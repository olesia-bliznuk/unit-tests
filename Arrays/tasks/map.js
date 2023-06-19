function map(collection, iteratee) {
    let result = [];
    switch (typeof iteratee) {
        case 'function':
            if (Array.isArray(collection)) {
                for (let i = 0; i < collection.length; i++) {
                    result[result.length] = iteratee(collection[i]);
                }
            } else {
                const values = Object.values(collection);
                for (let i = 0; i < values.length; i++) {
                    result[result.length] = iteratee(values[i]);
                }
            }
            break;
        case 'string':
            for (let i = 0; i < collection.length; i++) {
                result[result.length] = collection[i][iteratee];
            }
            break;
    }
    return result;
}

module.exports = map;