/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  let result = 0
   debugger;
  const iterateDigits = (number, power = 0) => {
    if(number <= 0){ return; }
    let base =  Math.floor(Math.log(number)/Math.log(10));
    let current = Math.floor(number/10**base);
    let remaining = number - current * 10**base;
    let add = current * 10**power
    result += add
    iterateDigits(remaining,++power)
  };
  iterateDigits(number);
  return result
}

