/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */

let deepEquals = (apple, orange) => {
  if (apple === orange) { return true; }
  
  if(typeof apple === 'object'){
   var longer =  (Object.keys(apple).length > Object.keys(orange).length) ? apple : orange;
    for (var key in longer) {
      if(!deepEquals(orange[key], apple[key])) { return false; }
    }
    return true;
  }
};

