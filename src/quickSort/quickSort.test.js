const s = require('./quickSort');

const array = "20 103 23 92 23 21 20 1 5 2 4".split(' ').map(n => parseInt(n, 10));

test('퀵소트 테스트', () => {
    expect(s(array)).toStrictEqual([1,2,4,5,20,20,21,23,23,92,103]);
});
