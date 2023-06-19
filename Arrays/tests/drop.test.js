const drop = require('../tasks/drop');

describe('Drop function:', () => {
    test('Function should return an empty array', () => {
        expect(drop([1, 2, 3], 10)).toEqual([]);
        expect(drop([1, 2, 3], 5)).toEqual([]);
        expect(drop([1, 2, 3], 'aaa')).toEqual([]);
        expect(drop([], 2)).toEqual([]);
    });

    test('Function should return a slice of array with n elements dropped from the beginning', () => {
        expect(drop([1, 2, 3], 2)).toEqual([3]);
        expect(drop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toEqual([5, 6, 7, 8, 9, 10]);
    });

    test('Function should return the full array', () => {
        expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
        expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
    });

    test('Function should return the array without the first element if the second argument is not provided', () => {
        expect(drop([1, 2, 3])).toEqual([2, 3]);
    })
});