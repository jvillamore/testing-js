const {sum,divide, multiply} = require('./02-math');

test('sum  2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('multiply 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('divide test', () => {
  expect(divide(2, 2)).toBe(1);
  expect(divide(8, 2)).toBe(4);
  expect(divide(16, 2)).toBe(8);
});

test('should divide for zero', () => {
  expect(divide(2, 0)).toBeNull();
  expect(divide(8, 0)).toBeNull();
  expect(divide(16, 0)).toBeNull();
});
