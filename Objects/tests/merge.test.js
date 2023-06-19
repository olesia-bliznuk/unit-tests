const merge = require('../tasks/merge');

describe('Merge function:', () => {

    test('Function should return an empty object', () => {
        expect(merge({}, {})).toEqual({});
    })

    test('Function should return merged object', () => {
        expect(merge({ b: 2, d: 4 }, {})).toEqual({ b: 2, d: 4 });
        expect(merge({ 'a': [{ 'b': 2 }, { 'd': 4 }] }, { 'a': [{ 'c': 3 }, { 'e': 5 }] })).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
    })

    test('Function should return object if the second argument not entered', () => {
        expect(merge({ b: 2, d: 4 })).toEqual({ b: 2, d: 4 });
    })
});