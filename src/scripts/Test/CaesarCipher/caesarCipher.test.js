const caesarCipher = require("./caesarCipher");

test("Shifted 1 step with normal word", () => {
  expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
});

test("Shifted more than one step", () => {
  expect(caesarCipher("Abcd", 3)).toBe("Defg");
});

test("Wrapping caesar", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
