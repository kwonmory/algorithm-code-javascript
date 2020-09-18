import binarySearch from './binarySearch';

describe('binarySearch', () => {
    const arr = [1,2,3,4,5];

    context('when exist target', () => {
        it ('returns found index', () => {
            expect(binarySearch(arr, 3)).toBe(2);
            expect(binarySearch(arr, 1)).toBe(0);
            expect(binarySearch(arr, 5)).toBe(arr.length-1);
        })
    });

    context('when not exist target', () => {
        it('returns -1', () => {
            expect(binarySearch(arr, 10)).toBe(-1);
            expect(binarySearch(arr, -1)).toBe(-1);
            expect(binarySearch(arr, 6)).toBe(-1);
        })
    })
})