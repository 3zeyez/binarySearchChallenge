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
]

for (const testCase of testCases) {
    test(`Test case ${testCase.Case}`, () => {
        expect(Search(testCase.List, testCase.Target)).toStrictEqual(testCase.Output);
    });
}

