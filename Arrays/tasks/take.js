const { mySlice } = require('./otherFunctions.js');

function take(array, num = 1) {
    if (num <= 0 || isNaN(num) || array.length === 0) return [];
    return mySlice(array, 0, num);
}

module.exports = take;