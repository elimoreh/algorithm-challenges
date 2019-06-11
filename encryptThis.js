var encryptThis = function(sentence) {
    var results = []
    var text = sentence.split(" ")
    for(var i = 0; i < text.length; i++){
      var textArray = text[i].split("")
      if(textArray[0] !== undefined && textArray[0].match(/[a-z]/i)) {
          textArray.splice(0,1,text[i].charCodeAt(0))
        } else if (textArray[1] !== undefined && textArray[1].match(/[a-z]/i)) {
          textArray.splice(1,1,text[i].charCodeAt(1))
        }
        if(textArray.length >= 3) {
          textArray[1] = text[i][text[i].length -1]
          textArray[textArray.length -1] = text[i][1]
        }
        results.push(textArray.join(""))
    }
    return results.join(" ")
}
// Kyu: 
// Link: