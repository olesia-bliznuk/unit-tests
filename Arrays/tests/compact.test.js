const compact = require('../tasks/compact');

test('Compact function should return the original array', () => {
    expect(compact([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(compact([1, 2, 3, 4, 'a'])).toEqual([1, 2, 3, 4, 'a']);
});

test('Compact function should return an empty array if the original array is empty', () => {
    expect(compact([])).toEqual([]);
});

test('Compact function should return an empty array', () => {
    expect(compact([0, false, NaN, null, undefined, ''])).toEqual([]);
});

test('Compact function should return an array with all falsey values removed', () => {
    expect(compact([1, '', 2, 3, false])).toEqual([1, 2, 3]);
    expect(compact([0, 1, null, 2, 3])).toEqual([1, 2, 3]);
    expect(compact([1, NaN, 2, 3, false])).toEqual([1, 2, 3]);
});