const merge = require('../tasks/merge');

describe('Merge function:', () => {
    test('Pick function should return empty object', () => {
        expect(merge({}, {})).toEqual({});
    })

    test('Merge function should return merged object', () => {
        expect(merge({b: 2 , d: 4}, {})).toEqual({b: 2 , d: 4});
        expect(merge({'a': [{ 'b': 2 }, { 'd': 4 }]}, {'a': [{ 'c': 3 }, { 'e': 5 }]})).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
    })

    test('merge function should return object if the second argument not entered', () => {
        expect(merge({b: 2 , d: 4})).toEqual({b: 2 , d: 4});
    })

});