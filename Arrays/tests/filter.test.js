const filter = require('../tasks/filter');

const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false }
];

test('Filter function should filter the array if predicate is function', () => {
    expect(filter(users, function (o) { return !o.active; })).toEqual([{ user: 'fred', age: 40, active: false }]);
});

test('Filter function should filter the array if predicate is array', () => {
    expect(filter(users, ['active', false])).toEqual([{ user: 'fred', age: 40, active: false }]);
});

test('Filter function should filter the array if predicate is object', () => {
    expect(filter(users, { age: 36, active: true })).toEqual([{ user: 'barney', age: 36, active: true }]);
});

test('Filter function should filter the array if predicate is string', () => {
    expect(filter(users, "active")).toEqual([{ user: 'barney', age: 36, active: true }]);
});

test('Filter function should return the array if predicate is undefined', () => {
    expect(filter(users)).toEqual(users);
});
