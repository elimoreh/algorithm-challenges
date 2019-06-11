function high(string){
    var array = string.split(" ");
    var max = 0;
    var results = "";
    for(var i = 0; i < array.length; i++){
      var counter = 0;
      for(var k = 0; k < array[i].length; k++){
        counter += array[i].charCodeAt(k) - 96;
      }
      if(counter > max){
        max = counter;
        results = array[i];
      }
    }
  return results;
}
// Kyu: 6
// Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272