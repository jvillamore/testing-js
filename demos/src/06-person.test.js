const Person = require("./06-person");

describe("Test of person", () => {
  let person = new Person("Julia", 45, 1.7);
  beforeEach(() => {
    person = new Person("Julia", 45, 1.7);
  });

  // Técnica AAA
  test("should return down", () => {
    // Arrange / preparar
    person.weight = 45;
    // Act / actuar
    const imc = person.calcIMC();
    // Assert / verificar
    expect(imc).toBe("down");
  });

  test("should return normal", () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});
