const find = require('../tasks/find');

const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true }
];

test('Find function should return the matched element if predicate is function', () => {
    expect(find(users, function (o) { return o.age < 40; })).toEqual({ user: 'barney', age: 36, active: true });
});

test('Find function should return the matched element if predicate is array', () => {
    expect(find(users, ['active', false])).toEqual({ user: 'fred', age: 40, active: false });
});

test('Find function should return the matched element if predicate is object', () => {
    expect(find(users, { 'age': 1, 'active': true })).toEqual({ user: 'pebbles', age: 1, active: true });
});

test('Find function should return the matched element if predicate is string', () => {
    expect(find(users, "active")).toEqual({ user: 'barney', age: 36, active: true });
});

test('Find function should return underfined if predicate is undefined', () => {
    expect(find(users)).toEqual(undefined);
});

test('Find function should return the matched element if fromIndex is entered', () => {
    expect(find(users,['active', false], 2)).toEqual(undefined);
    expect(find(users, function (o) { return o.age < 40; }, 2)).toEqual({ user: 'pebbles', age: 1, active: true });
});
