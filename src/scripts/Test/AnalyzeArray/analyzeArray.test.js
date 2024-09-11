const analyzeArray = require("./analyzeArray");

test("Analyze normal array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([2, 5, 1, 76, 3, 5, 1]).average).toBeCloseTo(13.28571);
  expect(analyzeArray([2, 5, 1, 76, 3, 5, 1]).min).toBe(1);
  expect(analyzeArray([2, 5, 1, 76, 3, 5, 1]).max).toBe(76);
  expect(analyzeArray([2, 5, 1, 76, 3, 5, 1]).length).toBe(7);
});

test("One item array", () => {
  expect(analyzeArray([2])).toEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 1,
  });
});

test("No item array", () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: undefined,
  });
});
