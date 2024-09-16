import find_book from "../src/binarySearch";

test('It should return -1', () => {
    expect(find_book(['a', 'b', 'c'], 'h')).toBe({index: -1, steps: 2})
})