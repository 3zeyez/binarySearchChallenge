import Search from "../src/binarySearch";
import {test, describe, expect, it} from '@jest/globals'

const testCases = [
    {
        Case: 1,
        List: ['a', 'b', 'c'],
        Target: 'b',
        Output: { index: 1, steps: 1 }
    },
    {
        Case: 2,
        List: ["Algorithms", "Clean Code", "Data Structures", "Design Patterns", "Grokking Algorithms"],
        Target: "Design Patterns",
        Output: { index: 3, steps: 2 }
    },
    {
        Case: 3,
        List: ['a', 'b', 'c', 'd', 'e', 'f'],
        Target: 'e',
        Output: { index: 4, steps: 2 }
    },
    {
        Case: 4,
        List: [1, 3, 5, 7, 9],
        Target: 5,
        Output: { index: 2, steps: 1 }
    },
    {
        Case: 5,
        List: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        Target: 18,
        Output: { index: 8, steps: 3 }
    },
    {
        Case: 6,
        List: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'],
        Target: 'date',
        Output: { index: 3, steps: 1 }
    },
    {
        Case: 7,
        List: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        Target: 10,
        Output: { index: 0, steps: 3 }
    },
    {
        Case: 8,
        List: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        Target: 100,
        Output: { index: 9, steps: 4 }
    },
    {
        Case: 9,
        List: [1, 2, 3, 4, 5],
        Target: 6,
        Output: { index: -1, steps: 3 }
    },
    {
        Case: 10,
        List: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
        Target: 'G',
        Output: { index: 6, steps: 4 }
    },
    {
        Case: 11,
        List: [1],
        Target: 1,
        Output: { index: 0, steps: 1 }
    },
    {
        Case: 12,
        List: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
        Target: 3,
        Output: { index: 4, steps: 1 }
    },
    {
        Case: 13,
        List: [],
        Target: 5,
        Output: { index: -1, steps: 0 }
    },
{
        Case: 14,
        List: [1, 3, 5, 7, 9],
        Target: 5,
        Output: { index: 2, steps: 1 }
    },
    {
        Case: 15,
        List: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        Target: 18,
        Output: { index: 8, steps: 3 }
    },
    {
        Case: 16,
        List: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'],
        Target: 'date',
        Output: { index: 3, steps: 1 }
    },
    {
        Case: 17,
        List: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        Target: 10,
        Output: { index: 0, steps: 3 }
    },
    {
        Case: 18,
        List: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        Target: 100,
        Output: { index: 9, steps: 4 }
    },
    {
        Case: 19,
        List: [1, 2, 3, 4, 5],
        Target: 6,
        Output: { index: -1, steps: 3 }
    },
    {
        Case: 20,
        List: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
        Target: 'G',
        Output: { index: 6, steps: 4 }
    },
    {
        Case: 21,
        List: [1],
        Target: 1,
        Output: { index: 0, steps: 1 }
    },
    {
        Case: 22,
        List: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
        Target: 3,
        Output: { index: 4, steps: 1 }
    },
    {
        Case: 23,
        List: [],
        Target: 5,
        Output: { index: -1, steps: 0 }
    },
    {
        Case: 24,
        List: [-10, -5, 0, 5, 10, 15, 20],
        Target: -5,
        Output: { index: 1, steps: 2 }
    },
    {
        Case: 25,
        List: [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9],
        Target: 6.6,
        Output: { index: 5, steps: 3 }
    },
    {
        Case: 26,
        List: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
        Target: 'fff',
        Output: { index: 5, steps: 3 }
    },
    {
        Case: 27,
        List: [false, false, false, false, true, true, true],
        Target: false,
        Output: { index: 3, steps: 1 }
    },
    {
        Case: 28,
        List: ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q'].reverse(),
        Target: 'S',
        Output: { index: 2, steps: 3 }
    },
    {
        Case: 29,
        List: [1, 3, 5, 7, 9, 11, 13, 15],
        Target: 10,
        Output: { index: -1, steps: 3 }
    },
    {
        Case: 30,
        List: ['a'],
        Target: 'b',
        Output: { index: -1, steps: 1 }
    },
    {
        Case: 31,
        List: [0, 0, 0, 0, 1, 1, 1, 1],
        Target: 1,
        Output: { index: 5, steps: 2 }
    },
    {
        Case: 32,
        List: Array.from({length: 1000}, (_, i) => i * 2),
        Target: 1998,
        Output: { index: 999, steps: 10 }
    },
    {
        Case: 33,
        List: ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef'],
        Target: 'abcd',
        Output: { index: 3, steps: 3 }
    }
]

for (const testCase of testCases) {
    test(`Test case ${testCase.Case}`, () => {
        expect(Search(testCase.List, testCase.Target)).toStrictEqual(testCase.Output);
    });
}

