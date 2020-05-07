const s = require('./bubbleSort');

const items = '4 2 3 8 5'.split(' ').map(v => {
    return parseInt(v);
});

test('버블소트 테스트', () => {
    expect(s(items)).toStrictEqual([2,3,4,5,8]);
});
