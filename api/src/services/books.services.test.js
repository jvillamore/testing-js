const BookService = require("./books.service");
const { generateManyBooks, generateOneBook } = require("../fakes/book.fake");

// Mock para la función GetAll.
const mockGetAll = jest.fn();

// Simulación de la libreria mongoLib.
const mongoLibStub = {
  getAll: () => mockGetAll,
  // getAll: () => [...fakeBooks],
  create: () => {},
};

//jest.mock("../lib/mongo.lib", () => jest.fn().mockImplementation(() => mongoLibStub));

jest.mock("../lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);
// Test case.
describe("Test books service", () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    // Limpia los casos de prueba.
    jest.clearAllMocks();
  });

  describe("test for getBooks", () => {
    // Prueba inicial
    test("prueba 001", async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // console.log("test 001", books);
      // Assert
      expect(books.length).toEqual(20);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
    // Prueba dos
    test("prueba 002", async () => {
      // Arrange
      const fakeBooks = generateManyBooks();
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks();
      // console.log("test 002", books);
      // Assert
      expect(books.length).toEqual(10);
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
