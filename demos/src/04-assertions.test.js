test("Objectos", () => {
  const data = { name: "josias" };
  data.lastaname = "juarez";
  expect(data).toEqual({ name: "josias", lastaname: "juarez" });
});

test("null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("boolean", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("string", () => {
  expect("Critopher").toMatch(/phe/);
});

test("array", () => {
  const numbers = [1, 5, 2, 3, 4, 2];
  expect(numbers).toContain(3);
});
