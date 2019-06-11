function designerPdfViewer(h, word) {
    var realindex = function (n) { return n.charCodeAt(0) - 97 }
    word = word.split("")
    var array = word.map(function (letter) {return h[realindex(letter)] })
    var max = Math.max(...array)
    return word.length * max

}

link : https://www.hackerrank.com/challenges/designer-pdf-viewer/problem