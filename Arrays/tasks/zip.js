function zip(...array) {
    const result = [];
    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (maxLength < array[i].length)
            maxLength = array[i].length;
    }

    for (let i = 0; i < maxLength; i++) {
        result[i] = [];
        for (let j = 0; j < array.length; j++) {
            if (array[j][i])
                result[i][result[i].length] = array[j][i];
        }
    }

    return result;
}

module.exports = zip;