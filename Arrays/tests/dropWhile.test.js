const dropWhile = require('../tasks/dropWhile');

describe('DropWhile function:', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ];

  test('Function should drop elements if predicate is function', () => {
    expect(dropWhile(users, function (element) { return !element.active; })).toEqual([{ user: 'pebbles', active: true }]);
  });

  test('Function should drop elements if predicate is array', () => {
    expect(dropWhile(users, ['active', false])).toEqual([{ user: 'pebbles', active: true }]);
  });

  test('Function should drop elements if predicate is object', () => {
    expect(dropWhile(users, { user: 'barney', active: false })).toEqual([{ user: 'fred', active: false }, { user: 'pebbles', active: true }]);
  });

  test('Function should drop elements if predicate is string', () => {
    expect(dropWhile(users, "active")).toEqual(users);
  });

  test('Function should return full array if predicate is undefined', () => {
    expect(dropWhile(users)).toEqual(users);
  })
});
