const omitBy = require('../tasks/omitBy');

let object = { 'a': 1, 'b': '2', 'c': 3 };

describe('OmitBy function:', () => {
test('OmitBy function should return empty object', () => {
    expect(omitBy({}, (element) => typeof element === 'string')).toEqual({});
    expect(omitBy(object, (element) => element < 100)).toEqual({});
})

test('OmitBy function should creates an object with properties that predicate doesnt return truthy for', () => {
    expect(omitBy(object, (element) => typeof element === 'number')).toEqual({'b': '2' });
    expect(omitBy(object, (element) => typeof element === 'string')).toEqual({'a': 1, 'c': 3});
})

test('OmitBy function should creates an object if the second argument not entered', () => {
    expect(omitBy(object)).toEqual({});
})

});