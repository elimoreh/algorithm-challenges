
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var dv = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  if(typeof romanNumeral !== 'string') return null;
  let total = 0;
  let subtract = 0;
  for(let i = 0; i  < romanNumeral.length; i++){
    let current = dv[romanNumeral[i]];
    let next = (romanNumeral[i + 1]) ? dv[romanNumeral[i + 1]] : 0;
    if(subtract > 0){
      total += (current - subtract);
      subtract = 0;
    } else {
      (current >= next) ? total += current : subtract = current;
    }
  }
  return total;
};
