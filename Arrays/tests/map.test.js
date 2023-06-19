const map = require('../tasks/map');

describe('Map function:', () => {
    function square(n) {
        return n * n;
    }

    let users = [
        { 'user': 'barney' },
        { 'user': 'fred' }
    ];

    test('Function returns the new mapped array', () => {
        expect(map([1, 2, 3, 4], square)).toEqual([1, 4, 9, 16]);
    });

    test('Function returns the new mapped array if first argument is object', () => {
        expect(map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
    });

    test('Fnction returns the new mapped array if second argument is string', () => {
        expect(map(users, 'user')).toEqual(['barney', 'fred']);
    });

    test('Function should return empty array if second argument is undefined', () => {
        expect(map(users)).toEqual([]);
    })
});