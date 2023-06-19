function mySlice(array, start, end) {
    let res = [];
    for (let i = start; i < end; i++) {
        res[i - start] = array[i];
    }
    return res;
}


function isEqual(objectOne, objectTwo) {
    const propsOne = Object.getOwnPropertyNames(objectOne).sort();
    const propsTwo = Object.getOwnPropertyNames(objectTwo).sort();
    minLength = (propsOne.length > propsTwo.length) ?  propsTwo.length : propsOne.length;
    for (let i = 0; i < minLength; i += 1) {
      const prop = propsOne[i];
      const bothAreObjects = typeof(objectOne[prop]) === 'object' && typeof(objectTwo[prop]) === 'object';
  
      if ((!bothAreObjects && (objectOne[prop] !== objectTwo[prop]))
      || (bothAreObjects && !isEqual(objectOne[prop], objectTwo[prop]))) {
        return false;
      }
    }
    return true;
  }

  module.exports = { mySlice, isEqual};