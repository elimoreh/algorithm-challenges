function duplicateCount(text){
    text = text.toLowerCase()
    text = text.split("")
    var results = [], map = {}
    text.forEach(function(char, index, array){
       if(map[char] !== undefined){results.push(char)}
       else {map[char] = char}
    })
    return Array.from(new Set(results)).length
}

// Kyu: 6
// Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1