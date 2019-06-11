function isAlt(string){
    var results = []
    var vowels = "aeiou"
    for(var i = 0; i < string.length; i++){
      if(vowels.includes(string[i])){
        results.push("v")
      } else {
         results.push("c")
      }
    }
    return results.every(function(letter,index,array){return letter !== array[index + 1]})
}

// Kyu: 6
// Link: https://www.codewars.com/kata/59325dc15dbb44b2440000af