const request = require("supertest");
const { generateManyBooks } = require("../../src/fakes/book.fake");

// Mock para la función GetAll.
const mockGetAll = jest.fn();

jest.mock("../../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);
const createApp = require("../../src/app");

describe("Test for hello endpoint", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
    // Limpia los casos de prueba.
    jest.clearAllMocks();
  });

  // Describe el caso de prueba
  describe("Test for GET /api/v1/books", () => {
    test("test 001", () => {
      // Arrange
      const fakeBooks = generateManyBooks(2);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
