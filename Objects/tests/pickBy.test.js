const pickBy = require('../tasks/pickBy');

describe('PickBy function:', () => {
test('PickBy function should return empty object', () => {
    expect(pickBy({ 'a': 1 }, (element) => typeof element === 'string')).toEqual({});
    expect(pickBy({ 'a': 1, 'b': 2, 'c': 3 }, (element) => element > 100)).toEqual({});
    expect(pickBy({},(element) => typeof element === 'string')).toEqual({});
})

test('PickBy function should creates an object composed of the object properties predicate returns truthy for', () => {
    expect(pickBy({ 'a': 800, 'b': 2, 'c': 3 }, (element) => element > 100)).toEqual({'a': 800});
    expect(pickBy({ 'a': 800, 'b': 2, 'c': 300 }, (element) => element > 100)).toEqual({'a': 800, 'c': 300});
    expect(pickBy({ 'a': 1 }, (element) => typeof element === 'number')).toEqual({'a': 1});
})
});