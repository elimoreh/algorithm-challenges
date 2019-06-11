/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
    let results;
    let max = 0;
    if(!string) return ''
    let sections = (i) => {
        let section = ''
        for(let j = 0; j <= string.length - (string.length - i); j++){
            section = section + string[i - j];
            if (string.includes(section)){
                if(section.length > max) {
                    max = section.length;
                    results = section;
                } 
            } else {
                break;
            }
        }
    }
    for(let i = string.length - 1; i >= 0; i-- ){
        sections(i);
    }
    return results;
};
