const capitalize = require("./capitalize");

test("Capitalize on normal word!", () => {
  expect(capitalize("hello!")).toBe("Hello!");
});

test("Capitalize on one character word!", () => {
  expect(capitalize("f")).toBe("F");
});

test("Empty string!", () => {
  expect(capitalize("")).toBe("");
});

test("Separated words!", () => {
  expect(capitalize("this is a really long word!")).toBe(
    "This is a really long word!"
  );
});

test("No A-Z charater string", () => {
  expect(capitalize("^&%^&")).toBe("^&%^&");
});

test("Not a string", () => {
  expect(() => capitalize(1)).toThrow(Error);
});
