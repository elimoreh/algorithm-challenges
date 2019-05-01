/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function (string) {
  string = string.toLowerCase();
  let results = [];

  let combinations = (combo = '') => {
    if (combo.length === string.length) {
      for (var i = 0; i < string.length; i++) {
        if (!combo.includes(string[i])) {
          return;
        }
      };
      results.push(combo);
      return;
    }

    for (var i = 0; i < string.length; i++) {
      combinations(combo + string[i]);
    ;}
  };

  combinations();

  return Array.from(new Set(results));

};
