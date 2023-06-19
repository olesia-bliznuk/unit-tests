const includes = require('../tasks/includes');

describe('Includes function:', () => {
    test('Function checks if value is in array', () => {
    expect(includes([1, 2, 3, 4], 2)).toEqual(true);
});

test('Function checks if value is in string', () => {
    expect(includes('abcd', 'ab')).toEqual(true);
    expect(includes('abcd', 'a', 3)).toEqual(false);
});

test('Function checks if value is in object', () => {
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toEqual(true);
});

test('Function should return false if value is undefined', () => {
    expect(includes([1, 2, 3, 4])).toEqual(false);
});

test('Function checks if value is in collection and if fromIndex is entered', () => {
    expect(includes([1, 2, 3, 4], 2, 3)).toEqual(false);
    expect(includes('abcd', 'a', 3)).toEqual(false);
    expect(includes('abcda', 'a', 3)).toEqual(true);
})
});