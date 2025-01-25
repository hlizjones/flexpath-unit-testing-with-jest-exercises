jest.mock('fs');
const fs = require('fs');



const {
    addBook,
    updateBookTitle,
    books,
    removeBook,
    findBooksByAuthor,
    loadBooks,
    saveBooks,
} = require("../bookManager");

beforeAll(() =>
    books.length = 0)

afterAll(() =>
    books.length = 0)

beforeEach(() =>
    books.length = 0)

afterEach(() =>
    books.length = 0)

describe("addBook", () => {
    test("addBook adds book to books array", () => {
        const bookAdded = addBook("Test Title", "Test Author");
        expect(bookAdded).toEqual({ title: "Test Title", author: "Test Author" });
        expect(books).toContainEqual(bookAdded);
    });
});


describe("removeBook", () => {
    test("removeBook removes book from collection", () => {
        addBook("Test Title", "Test Author");
        const bookRemoved = removeBook("Test Title");
        expect(bookRemoved).toEqual({ title: "Test Title", author: "Test Author" });
        expect(books).not.toContainEqual(bookRemoved);
    });

    test("removeBook throws error 'Book not found'", () => {
        expect(() => removeBook("Nonexistent Title")).toThrow("Book not found");
    });
});

describe("updateBookTitle", () => {
    test("updateBookTitle updates title of book", () => {
        addBook("Old Title", "Author Name");
        const updatedBook = updateBookTitle("Old Title", "New Title");
        expect(updatedBook.title).toBe("New Title");
        expect(books.find(book => book.title === "New Title")).toBeTruthy();
    });

    test("updateBookTitle throws Book not found", () => {
        expect(() => updateBookTitle("Nonexistent Title", "New Title")).toThrow("Book not found");
    });
})

describe("findBooksByAuthor", () => {
    test("findBooksByAuthor returns array with at least one book", () => {
        addBook("Test Title", "Test Author");
        const booksFound = findBooksByAuthor("Test Author");
        expect(booksFound.length).toBeTruthy();
    });

    test("findBooksbyAuthor returns an empty array", () => {
        const booksFound = findBooksByAuthor("Test Author");
        expect(booksFound.length).toBeFalsy();
    });
})

describe("loadBooks", () => {
    test("loadBooks reads books from file", async () => {
        fs.readFile.mockImplementation((path, encoding, callback) => {
            callback(null, JSON.stringify([{ title: "Title", author: "Author" }]))
        });
        await loadBooks();
        expect(books).toContainEqual({ title: "Title", author: "Author" });
        expect(saveBooks()).resolves.toBeUndefined();
    });
});

    describe("saveBooks", () => {
        test("saveBooks writes book to file", async () => {
            fs.writeFile.mockImplementation((path, data, encoding, callback) => {
                callback(null);
            });
            await saveBooks();
            expect(fs.writeFile).toHaveBeenCalled;
            expect(saveBooks()).resolves.toBeUndefined();
        });
    });
