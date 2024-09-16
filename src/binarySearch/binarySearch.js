const book_list = ["Algorithms", "Clean Code", "Data Structures", "Design Patterns", "Grokking Algorithms"];
const target_book = "Design Patterns";

export default function find_book(book_list, target_book) {
//    if you want a case-insensitive comparison enable the next 2 lines
//    book_list = book_list.map(book => book.toLowerCase());
//    target_book = target_book.toLocaleLowerCase();

    let keeped_index = -1
    let steps = 0
    let index = 0

    while (book_list.length) {
        steps++

        let i = Math.floor(book_list.length / 2);
        if (book_list[i] === target_book) {
            keeped_index = index + i;
            break
        }

        if (book_list[i] > target_book) {
            book_list = book_list.slice(0, i);
        }
        else
        if (book_list[i] < target_book) {
            book_list = book_list.slice(i + 1);
            index += ++i
        }
    }

    return {index: keeped_index, steps}
}

const { index, steps } = find_book(book_list, target_book);
const letter = 'e';
const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const { index: i, steps: s } = find_book(letters, letter);

console.log(`The book '${target_book}' was found at index ${index} in ${steps} steps.`);
console.log(`The book ${letter} was found at index ${i} in ${s} steps.`);
