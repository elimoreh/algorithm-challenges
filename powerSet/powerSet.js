/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */


//sort the given word
//go through the permuations check if it already exist
//return a new set to ensure uniqueness
//return result

var powerSet = function (str) {
    let hash = {};
    let sorted = [...str].sort()

    let iterateStr = (str = '', i = 0) => {
        hash[str] = str;
        if (str.length === sorted.length) { return; }

        for (; i < sorted.length; i++) {
            if (str[str.length - 1] !== sorted[i]) {
                let newStr = str + sorted[i];
                iterateStr(newStr, i);
                newStr.slice(0, newStr.length - 1);
            }
        }
    }

    iterateStr();
    return Object.values(hash);
};
