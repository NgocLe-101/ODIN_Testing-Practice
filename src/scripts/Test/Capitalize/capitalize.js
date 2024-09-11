function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("String is required for capitalize to work!");
  }
  if (str === "") return "";
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;
