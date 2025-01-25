/*toBe should be used to check equality for primitive types. If use on objects, it will fail, because
objects are passed by reference. toBe would check if the objets reference the same point in memory.
toEqual recursively compared the properties of objects. It is a way to check if the primitive values
objects are equal. toStrictEquality also recusively compared objects but, unlike toEqual, it also checks
for undefined properties in objects adn array sparseness.*/

const {
    addBook,
    books,
} = require("../bookManager");

beforeEach(() =>
    books.length = 0)

describe("addBook", () => {
    test("addBook adds book to books array", () => {
        const bookAdded = addBook("Test Title", "Test Author");
        expect(bookAdded.title).toBe("Test Title"); //Will pass since toBe is comparing primitive values
    });
});

// describe("addBook", () => {
//     test("addBook adds book to books array", () => {
//         const bookAdded = addBook("Test Title", "Test Author");
//         expect(bookAdded).toBe({ title: "Test Title", author: "Test Author" });//Will fail since toBe is comparing the references of the objects
//     });
// });

describe("addBook", () => {
    test("addBook adds book to books array", () => {
        const bookAdded = addBook("Test Title", "Test Author");
        expect(bookAdded).toEqual({ title: "Test Title", author: "Test Author", publisher: undefined });//Will pass since toEqual is recursively comparing the object properties skipping any undefined
    });
});

// describe("addBook", () => {
//     test("addBook adds book to books array", () => {
//         const bookAdded = addBook("Test Title", "Test Author");
//         expect(bookAdded).toStrictEqual({ title: "Test Title", author: "Test Author", publisher: undefined});//Will fail since toStrictEqual compares undefined object properties 
//     });
// });