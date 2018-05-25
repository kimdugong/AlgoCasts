// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if(n < 0) {
    const str = (n * -1).toString().split('').reduce((acc, char) => {
      if(char === '0'){
        return acc;
      }
      return char + acc;
    }, '');
    return Number('-' + str);
  } else {
    const str = n.toString().split('').reduce((acc, char) => {
      if(char === '0'){
        return acc;
      }
      return char + acc;
    }, '');
    return Number(str);
  }
}

module.exports = reverseInt;
