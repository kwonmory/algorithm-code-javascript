import shellSort from './shellSort';

test.each([
    [[4,3,56,1,2,4], [1,2,3,4,4,56]],
])('shell sort', (input, ans) => {
    expect(shellSort(input)).toEqual(ans);
});