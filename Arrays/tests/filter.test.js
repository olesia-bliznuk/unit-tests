const filter = require('../tasks/filter');

describe('Filter function:', () => {
    const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false }
    ];

    test('Function should filter the array if predicate is function', () => {
        expect(filter(users, function (element) { return !element.active; })).toEqual([{ user: 'fred', age: 40, active: false }]);
    });

    test('Function should filter the array if predicate is array', () => {
        expect(filter(users, ['active', false])).toEqual([{ user: 'fred', age: 40, active: false }]);
    });

    test('Function should filter the array if predicate is object', () => {
        expect(filter(users, { age: 36, active: true })).toEqual([{ user: 'barney', age: 36, active: true }]);
    });

    test('Function should filter the array if predicate is string', () => {
        expect(filter(users, "active")).toEqual([{ user: 'barney', age: 36, active: true }]);
    });

    test('Function should return the array if predicate is undefined', () => {
        expect(filter(users)).toEqual(users);
    })
});
