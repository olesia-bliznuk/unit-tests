const chunk = require('../tasks/chunk');

test('Chunk Function should return the original array if size is greater than or equal to the array size', () => {
    expect(chunk([1, 2, 3, 4], 100)).toEqual([1, 2, 3, 4]);
    expect(chunk([1, 2, 3, 4, 'a'], 5)).toEqual([1, 2, 3, 4, 'a']);
});

test('Chunk function should return an empty array if the original array is empty', () => {
    expect(chunk([], 100)).toEqual([]);
    expect(chunk([])).toEqual([]);
});

test('Chunk function should return an empty array if the original array is empty', () => {
    expect(chunk([], 100)).toEqual([]);
    expect(chunk([])).toEqual([]);
});

test('Chunk function should сhunk an array into groups of 1 size', () => {
    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
    expect(chunk(['a', 1, '3'])).toEqual([['a'], [1], ['3']]);
});

test('Chunk function should сhunk an array into groups where the final chunk will be the remaining elements if array cant be split evenly', () => {
    expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    expect(chunk(['a', 1, '3', 4, 5, 6], 5)).toEqual([['a', 1, '3', 4, 5], [6]]);
});

test('Chunk function should сhunk an array into groups of specified size', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk(['a', 1, '3', 4, 5, 6], 3)).toEqual([['a', 1, '3'], [4, 5, 6]]);
});