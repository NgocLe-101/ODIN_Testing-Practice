function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("String is required to reverseString to work!");
  }
  let resultStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }
  return resultStr;
}

module.exports = reverseString;
