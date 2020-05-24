// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

// My Solution!
// function anagrams(stringA, stringB) {
//     const replaceStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//     const replaceStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//     const aMap = {};
//     const bMap = {};
//     for (let char of replaceStringA) {
//         aMap[char] = aMap[char] + 1 || 1;
//     }
//     for (let char of replaceStringB) {
//         bMap[char] = bMap[char] + 1 || 1;
//     }

//     if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//         return false;
//     }

//     for (let char in aMap) {
//         if (aMap[char] !== bMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }

module.exports = anagrams;
