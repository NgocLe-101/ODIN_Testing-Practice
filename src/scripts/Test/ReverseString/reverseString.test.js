const reverseString = require("./reverseString");

test("Reverse normal string!", () => {
  expect(reverseString("Hello!")).toBe("!olleH");
});

test("Reverse one letter string", () => {
  expect(reverseString("a")).toBe("a");
});

test("Reverse duplicate letter string", () => {
  expect(reverseString("aaaaaaa")).toBe("aaaaaaa");
});

test("Word interleaved!", () => {
  expect(reverseString("abababab")).toBe("babababa");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Import a number", () => {
  expect(() => reverseString(123)).toThrow(Error);
});

test("Import an object", () => {
  expect(() => reverseString({ testObj: "testValue" })).toThrow(Error);
});
