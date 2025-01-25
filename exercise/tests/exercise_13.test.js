jest.mock("../bookManager", () => ({
    addBook: jest.fn(),
})
);

const {
    addBook,
} = require("../bookManager");

describe("addBook", () => {
    test("addBook is called", () => {
        addBook.mockReturnValue("Test Title", "Test Author");
        addBook("Test Title", "Test Author");
        expect(addBook).toHaveBeenCalled();
        expect(addBook).toHaveBeenCalledWith("Test Title", "Test Author")
    });
});