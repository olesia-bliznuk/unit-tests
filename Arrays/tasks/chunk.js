const { mySlice } = require('./otherFunctions.js');

function chunk(array, size = 1) {
    if (size >= array.length)
        return array;
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        result[result.length] = mySlice(array, i, i + size);
    }
    return result;
}

module.exports = chunk;