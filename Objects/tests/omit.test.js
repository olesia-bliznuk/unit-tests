const omit = require('../tasks/omit');

describe('Omit function:', () => {

    let object = { 'a': 1, 'b': '2', 'c': 3 };

    test('Function should return an empty object', () => {
        expect(omit({}, ['a', 'b'])).toEqual({});
        expect(omit(object, ['a', 'b', 'c'])).toEqual({});
    })

    test('Function should creates an object with properties that are not omitted', () => {
        expect(omit(object, [])).toEqual(object);
        expect(omit(object, ['a'])).toEqual({ 'b': '2', 'c': 3 });
        expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
    })

    test('Function should creates an object if the second argument not entered', () => {
        expect(omit(object)).toEqual(object);
    })

});