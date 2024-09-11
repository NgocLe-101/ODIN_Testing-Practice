function add(...variables) {
  return variables.reduce((prev, curr) => prev + curr);
}

function subtract(...variables) {
  return variables.reduce((prev, curr) => prev - curr);
}

function divide(...variables) {
  return variables.reduce((prev, curr) => prev / curr);
}

function multiply(...variables) {
  return variables.reduce((prev, curr) => prev * curr);
}

module.exports = {
  add,
  subtract,
  divide,
  multiply,
};
