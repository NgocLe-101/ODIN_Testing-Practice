const calculator = require("./calculator");

test("Add 1 + 2 expected to be 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Add 10 + 20 expected to be 30", () => {
  expect(calculator.add(10, 20)).toBe(30);
});

test("Subtract 10 - 20 expected to be -10", () => {
  expect(calculator.subtract(10, 20)).toBe(-10);
});

test("Floating calculation", () => {
  expect(calculator.add(2.4, 4.5)).toBeCloseTo(6.9);

  expect(calculator.subtract(1.5, 2.5)).toBeCloseTo(-1);

  expect(calculator.divide(2, 3)).toBeCloseTo(0.66666);

  expect(calculator.multiply(1.5, 2.6)).toBeCloseTo(3.9);
});
