function compact(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            result[result.length] = array[i];
        }
    }
    return result;
}

module.exports = compact;