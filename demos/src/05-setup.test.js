const sum = require("./01-sum");

describe("grupo 01", () => {
  beforeAll(() => {
    console.log("before all");
  });
  afterAll(() => {
    console.log("after all");
  });
  beforeEach(() => {
    console.log("before each");
  });
  afterEach(() => {
    console.log("after each");
  });
  test("Prueba 001", () => {
    console.log("test 001");
    expect(sum(1, 2)).toBe(3);
  });
  test("Prueba 002", () => {
    console.log("test 002");
    expect(sum(2, 2)).toBe(4);
  });
});

describe("grupo 02", () => {
  beforeAll(() => {
    console.log("before all 02");
  });
  afterAll(() => {
    console.log("after all 02");
  });

  test("Prueba 003", () => {
    console.log("test 003");
    expect(sum(1, 2)).toBe(3);
  });
  test("Prueba 004", () => {
    console.log("test 004");
    expect(sum(2, 2)).toBe(4);
  });
});
