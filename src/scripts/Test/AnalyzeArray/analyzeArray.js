function average(arr) {
  const arrLength = arr.length;
  return arr.reduce((prev, curr) => prev + curr) / arrLength;
}

function min(arr) {
  return arr.reduce((prev, curr) => (prev < curr ? prev : curr));
}

function max(arr) {
  return arr.reduce((prev, curr) => (prev > curr ? prev : curr));
}

function analyzeArray(arr) {
  if (arr.length === 0) {
    return {
      average: undefined,
      min: undefined,
      max: undefined,
      length: undefined,
    };
  }
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}

module.exports = analyzeArray;
