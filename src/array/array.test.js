const MyArray = require('./array');

let array;

beforeEach(() => {
    array = new MyArray();
    array.add(1);
    array.add(3);
    array.add(2);
    array.add(5);
})

describe('Array Test', () => {

    test('add', () => {
        array.add(7)
        expect(array.toString()).toBe("1 3 2 5 7");
    });

    test('remove', () => {
        array.remove(5)
        expect(array.toString()).toStrictEqual("1 3 2");
    })

    test('getAtIndex', () => {
        expect(array.getAtIndex(0)).toBe(1);
    });

    test('search', () => {
        expect(array.search(3)).toBe(1);
    });

    test('size', () => {
        expect(array.size()).toBe(4);
    });

})
