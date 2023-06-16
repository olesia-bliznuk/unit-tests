function includes(collection, value, fromIndex = 0) {
    if (fromIndex < 0)
        fromIndex = 0;
    if (typeof collection === 'string' && collection.indexOf(value, fromIndex) !== -1){
        return true;
    } else if (typeof collection === 'object') {
        if (Array.isArray(collection)) {
            for (let i = fromIndex; i < collection.length; i++) {
                if (collection[i] === value)
                    return true;
            }
        } else {
            const values = Object.values(collection);
            for (let i = 0; i < values.length; i++) {
                if (values[i] == value)
                    return true;
            }
        }
    }
    return false;
}

module.exports = includes;