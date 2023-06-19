const zip = require('../tasks/zip');

describe('Zip function:', () => {
    test('Function should create an array of grouped elements', () => {
        expect(zip([1, 1, 1, 1], [2, 2, 2, 2])).toEqual([[1, 2], [1, 2], [1, 2], [1, 2]]);
    });

    test('Function should return an empty array if argument is empty', () => {
        expect(zip()).toEqual([]);
    });

    test('Function should create an array of grouped elements if arguments have diffrent length', () => {
        expect(zip([1, 1, 1], [2, 2])).toEqual([[1, 2], [1, 2], [1]]);
    })
});