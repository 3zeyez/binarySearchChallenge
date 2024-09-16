const book_list = ["Algorithms", "Clean Code", "Data Structures", "Design Patterns", "Grokking Algorithms"];
const target_book = "Design Patterns";

function find_book(book_list, target_book) {
//    if you want a case-insensitive comparison enable the next 2 lines
//    book_list = book_list.map(book => book.toLowerCase());
//    target_book = target_book.toLocaleLowerCase();

    let start = 0;
    let end = book_list.length - 1;
    let mid = Math.floor((start + end) / 2);
    let steps = 0;

    while (start <= end) {
        steps++;

        if (book_list[mid] === target_book) {
            return  {index: mid, steps };
        }

        if (book_list[mid] > target_book) {
            end = mid - 1;
        }
        else
        if (book_list[mid] < target_book) {
            start = mid + 1
        }

        mid = Math.floor((start + end) / 2);
    }
    return { index: -1, steps }
}

const { index, steps } = find_book(book_list, target_book);
const letter = 'e';
const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const { index: i, steps: s } = find_book(letters, letter);
console.log(`The book '${target_book}' was found at index ${index} in ${steps} steps.`);
console.log(`The book ${letter} was found at index ${i} in ${s} steps.`);
