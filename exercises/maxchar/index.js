// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const objc = {};
    let maxChar = ''
    let maxIndex = 0;

    for (let char of str) {
        objc[char] = objc[char] + 1 || 1;
    }

    for (let char in objc) {
        if (objc[char] > maxIndex) {
            maxIndex = objc[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
