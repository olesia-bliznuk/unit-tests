const { mySlice } = require('./otherMethods.js');

function drop(array, num = 1) {
    if (isNaN(num) || array.length === 0) return [];
    if (num <= 0) return array;
    return mySlice(array, num, array.length);
}

module.exports = drop;