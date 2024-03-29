/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {  
  let ratio = 1/number
  let whole;
  let i = 1;
  while(!whole){
    let dn = i * ratio;
    let negative =  (ratio < 0) ? '-' : ''
    if(Math.floor(dn) === dn){ return `${negative}${i}/${Math.abs(dn)}`}
    i++;
  };
};
