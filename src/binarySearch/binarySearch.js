export default function find_book(book_list, target_book) {
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
