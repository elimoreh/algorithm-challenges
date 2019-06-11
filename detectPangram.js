function isPangram(string){
    string = string.toLowerCase().split("")
    var alpObj = {}
    for(var i = 97; i < 123; i++){
      alpObj[String.fromCharCode(i)] = 0
    }
    string.forEach(function(letter){
      if(alpObj[letter] !== undefined){
        alpObj[letter]++
      }
    })
    return Object.values(alpObj).every(function(number){return number > 0})
}

// Kyu: 6
// link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
