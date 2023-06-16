const zip = require('../tasks/zip');

test('Zip function should create an array of grouped elements', () => {
    expect(zip([1, 1, 1, 1], [2, 2, 2, 2])).toEqual([[1, 2], [1, 2], [1, 2], [1, 2]]);
});

test('Zip function should return empty array if argument is empty', () => {
    expect(zip()).toEqual([]);
});

test('Zip function should create an array of grouped elements if arguments have diffrent length', () => {
    expect(zip([1, 1, 1], [2, 2])).toEqual([[1, 2], [1, 2], [1]]);
});