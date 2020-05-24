// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;
// }

// function palindrome(str) {
//     for (let index = 0; index < str.length / 2; index++) {
//         const element = str[index];
//         if (element !== str[str.length - 1 - index]) {
//             return false;
//         }
//     }
//     return true;
// }

module.exports = palindrome;
