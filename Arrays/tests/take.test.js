const take = require('../tasks/take');

describe('Take function:', () => {
    test('Function should return empty array', () => {
        expect(take([1, 2, 3], 0)).toEqual([]);
        expect(take([1, 2, 3], -5)).toEqual([]);
        expect(take([1, 2, 3], 'aaa')).toEqual([]);
        expect(take([], 2)).toEqual([]);
    });

    test('Function should return a slice of array with n elements taken from the beginning', () => {
        expect(take([1, 2, 3], 2)).toEqual([1, 2]);
        expect(take([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toEqual([1, 2, 3, 4]);
        expect(take([5, 10, 15], 3)).toEqual([5, 10, 15]);
    });

    test('Function should return the full array', () => {
        expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
        expect(take([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 500)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(take([5, 10, 15], 3)).toEqual([5, 10, 15]);
    });

    test('Function should return the array with the first element if the second argument is not provided', () => {
        expect(take([1, 2, 3])).toEqual([1]);
    })
});