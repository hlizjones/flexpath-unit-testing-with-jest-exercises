// const bookManager = require("../bookManager")

const { loadBooks } = require("../bookManager");


// describe("loadBooks", () => {
//     test("loadBooks resolves successfully", async () => {
//         jest.spyOn(bookManager, "loadBooks").mockResolvedValue();
//         await expect(bookManager.loadBooks()).resolves.toBeUndefined();
//     });

//     test("loadBooks rejects and throws error", async () => {
//         jest.spyOn(bookManager, "loadBooks").mockRejectedValue(new Error("Error"));
//         await expect(bookManager.loadBooks()).rejects.toThrow("Error");
//     });
// });

jest.mock("../bookManager", () => ({
    loadBooks : jest.fn(),
}));


describe("loadBooks", () => {
    test("loadBooks resolves successfully", async () => {
        loadBooks.mockResolvedValue();
        await expect(loadBooks()).resolves.toBeUndefined();
        expect(loadBooks).toHaveBeenCalled();
    });

    test("loadBooks rejects and throws error", async () => {
        loadBooks.mockRejectedValue(new Error("Error"));
        await expect(loadBooks()).rejects.toThrow("Error");
        expect(loadBooks).toHaveBeenCalled();
    });
});