/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  var hash = {};

  for (var i = 0; i < string.length; i++) {
    if (hash.hasOwnProperty(string[i])) {
      hash[string[i]]++;
    } else {
      hash[string[i]] = 1;
    }
  }

  for (var i = 0; i < string.length; i++) {
    if (hash[string[i]] === 1) {
      return string[i];
    }
  }
};


