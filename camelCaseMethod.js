String.prototype.camelCase=function(){
    var str = this.split(" ")
    return str.map(function(word){
      return word.slice(0,1).toUpperCase() + word.slice(1)
    }).join("")
}

// Kyu: 6
// link: https://www.codewars.com/kata/587731fda577b3d1b0001196