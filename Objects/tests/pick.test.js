const pick = require('../tasks/pick');

describe('Pick function:', () => {
test('Pick function should return empty object', () => {
    expect(pick({ 'a': 1, 'b': '2', 'c': 3 }, [])).toEqual({});
    expect(pick({ 'a': 1, 'b': '2', 'c': 3 }, 122)).toEqual({});
    expect(pick({ 'a': 1, 'b': '2', 'c': 3 }, ['q'])).toEqual({});
})

test('Pick function should creates an object composed of the picked object properties', () => {
    expect(pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
    expect(pick({ 'a': 'aaa', 'b': 222, 'c': 'qwe' }, ['b', 'c', '1'])).toEqual({ 'b': 222, 'c': 'qwe' });
    expect(pick({ 'a': 123, 'b': '', 'c': NaN }, ['a', 'c'])).toEqual({'a': 123, 'c': NaN });
})
});