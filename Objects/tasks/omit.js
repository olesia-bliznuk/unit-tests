function include (array, element){
    for (let i = 0; i < array.length; i++){
        if ( array[i] === element)
        return true;
    }
    return false;
}

function omit(object, sources) {
    if (!sources) return object;
    let result = {};
    for (key in object){
        if (!include(sources, key))
            result[key] = object[key];
    }
    return result;
  }

module.exports = omit;