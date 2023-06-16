const dropWhile = require('../tasks/dropWhile');

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

test('DropWhile function should drop elements if predicate is function', () => {
  expect(dropWhile(users, function (o) { return !o.active; })).toEqual([{ user: 'pebbles', active: true }]);
});

test('DropWhile function should drop elements if predicate is array', () => {
  expect(dropWhile(users, ['active', false])).toEqual([{ user: 'pebbles', active: true }]);
});

test('DropWhile function should drop elements if predicate is object', () => {
  expect(dropWhile(users, { user: 'barney', active: false })).toEqual([{ user: 'fred', active: false }, { user: 'pebbles', active: true }]);
});

test('DropWhile function should drop elements if predicate is string', () => {
  expect(dropWhile(users, "active")).toEqual(users);
});

test('DropWhile function should return full array if predicate is undefined', () => {
  expect(dropWhile(users)).toEqual(users);
});
