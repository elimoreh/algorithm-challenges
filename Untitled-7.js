function hashString(obj){
  var str = ''
  var keysArray = Object.keys(obj)
  var valuesArray = Object.values(obj)
  for(var i = 0; i < keysArray.length; i++) {
      if(i === (keysArray.length - 1)) {
        str += (`${keysArray[i]} = ${valuesArray[i]}`)
      } else {
         str += (`${keysArray[i]} = ${valuesArray[i]},`)
      }
     
    }
  return str;
}
// Kyu: 7
// Link: https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2