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
        Case: 1,
        List: [1, 3, 5, 7, 9],
        Target: 5,
        Output: { index: 2, steps: 2 }
    },
    {
        Case: 2,
        List: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        Target: 18,
        Output: { index: 8, steps: 4 }
    },
    {
        Case: 3,
        List: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'],
        Target: 'date',
        Output: { index: 3, steps: 3 }
    },
    {
        Case: 4,
        List: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        Target: 10,
        Output: { index: 0, steps: 4 }
    },
    {
        Case: 5,
        List: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        Target: 100,
        Output: { index: 9, steps: 4 }
    },
    {
        Case: 6,
        List: [1, 2, 3, 4, 5],
        Target: 6,
        Output: { index: -1, steps: 3 }
    },
    {
        Case: 7,
        List: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
        Target: 'G',
        Output: { index: 6, steps: 4 }
    },
    {
        Case: 8,
        List: [1],
        Target: 1,
        Output: { index: 0, steps: 1 }
    },
    {
        Case: 9,
        List: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
        Target: 3,
        Output: { index: 4, steps: 3 }
    },
    {
        Case: 10,
        List: [],
        Target: 5,
        Output: { index: -1, steps: 0 }
    },
]

for (const testCase of testCases) {
    test(`Test case ${testCase.Case}`, () => {
        expect(Search(testCase.List, testCase.Target)).toStrictEqual(testCase.Output);
    });
}

