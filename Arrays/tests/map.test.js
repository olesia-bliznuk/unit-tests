const map = require('../tasks/map');

function square(n) {
    return n * n;
}

let users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

test('Map function returns the new mapped array', () => {
    expect(map([1, 2, 3, 4], square)).toEqual([1, 4, 9, 16]);
});

test('Map function returns the new mapped array if first argument is object', () => {
    expect(map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
});

test('Map function returns the new mapped array if second argument is string', () => {
    expect(map(users, 'user')).toEqual(['barney', 'fred']);
});

test('Map function should return empty array if second argument is undefined', () => {
    expect(map(users)).toEqual([]);
});