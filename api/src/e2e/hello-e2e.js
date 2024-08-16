const request = require("supertest");
const createApp = require("../../src/app");
const { response } = require("express");

describe("Test for hello endpoint", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });

  // Describe el caso de prueba
  describe("Test for GET/", () => {
    test("test 001", () => {
      return request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual("Hello World!");
        });
    });
  });
});
