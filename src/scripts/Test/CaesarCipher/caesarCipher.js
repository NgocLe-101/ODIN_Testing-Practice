function isUpperCaseLetter(letter) {
  return letter.toUpperCase() === letter;
}

function caesarCipher(str, shiftedVal) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let resultStr = "";
  for (let c of str) {
    const isUpperCase = isUpperCaseLetter(c);
    let index =
      (alphabet.indexOf(c.toLowerCase()) + shiftedVal) % alphabet.length;
    resultStr += isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
  }
  return resultStr;
}

module.exports = caesarCipher;
