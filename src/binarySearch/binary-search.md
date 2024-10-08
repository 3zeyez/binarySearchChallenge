## Title: "The Library Book Hunt"

### Wher to work:
[./binarySearchStarter.js](./binarySearchStarter.js)

### Background:
You are a librarian at a large university library. The library has just received a donation of 1,000,000 new books, all sorted alphabetically by title. A student comes to you asking for help finding a specific book.

### Challenge:
Implement a binary search algorithm to find the position of a given book title in the sorted list of books.

### Requirements:
1. Create a function called `find_book` that takes two parameters:
   - `book_list`: A sorted list of book titles (strings)
   - `target_book`: The title of the book to find (string)

2. The function should return:
   - The index of the book if it's found
   - -1 if the book is not in the list

3. Use binary search to find the book efficiently.

4. Keep track of and return the number of steps (comparisons) it took to find the book or determine it's not in the list.

### Example:
```python
book_list = ["Algorithms", "Clean Code", "Data Structures", "Design Patterns", "Grokking Algorithms"]
target_book = "Design Patterns"

index, steps = find_book(book_list, target_book)
print(f"The book '{target_book}' was found at index {index} in {steps} steps.")
```

### Bonus Challenges:
1. Implement the same search using linear search and compare the number of steps between binary search and linear search for different list sizes.

2. Create a visualization of the binary search process, showing which part of the list is being searched at each step.

3. Modify the function to handle case-insensitive searches.

4. Implement the binary search both iteratively and recursively, and compare their performance.

### Evaluation Criteria:
1. Correctness: The algorithm should correctly find the book or return -1 if not found.
2. Efficiency: The search should use O(log n) comparisons.
3. Code Quality: The code should be clean, well-commented, and easy to understand.
4. Handling Edge Cases: The function should handle edge cases like an empty list or a book not in the list.

### Notes
This challenge will help work-study students practice implementing binary search while also thinking about its real-world applications, efficiency, and various ways to extend and improve the basic algorithm. It covers the key concepts from Chapter 1 of "Grokking Algorithms" while providing opportunities for deeper exploration.