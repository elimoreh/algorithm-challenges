function elimination(array){
    var obj = {}
    for(var i = 0; i < array.length; i++){
      if(obj[array[i]] !== undefined){return array[i]}
      else{obj[array[i]] = array[i]}
    }
    return null
}

// Kyu: 7
// Link: https://www.codewars.com/kata/5834315e06f227a6ac000099