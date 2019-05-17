/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  let result = '';
  let hash = {};
  let strings = [...arguments].map((el) => Array.from(new Set(el.split(''))))
  const longestArg = strings.reduce((ac,arg) => arg.length > ac ? arg.length : ac, 0);
  for(var i = 0; i < longestArg; i++){
    [...strings].forEach((el)=> {
      if(el[i]){
        if (!hash[el[i]]) { hash[el[i]] = 1 } 
        else { hash[el[i]] += 1 }
        if(hash[el[i]] === strings.length) {result += el[i]}
      }
    })
  }
  return result;
};



