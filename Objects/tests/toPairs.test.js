const toPairs = require('../tasks/toPairs');

describe('ToPairs function:', () => {

    test('Function should create an array of own enumerable string keyed-value pairs for object', () => {
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        Foo.prototype.c = 3;
        expect(toPairs(new Foo())).toEqual([['a', 1], ['b', 2],]);
    });


    test('Function should return empty array', () => {
        expect(toPairs()).toEqual([]);
    })

});


