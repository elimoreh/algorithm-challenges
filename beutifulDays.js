function beautifulDays(i, j, k) {
    var datesArray = []
    var counter = 0
    for (var x = i; x <= j; x++){
        datesArray.push(x)
    }
    for (var i = 0; i < datesArray.length; i++){
        var string = JSON.stringify(datesArray[i])
        var array = string.split("").reverse().join("")
        var reverseNum = Number(array)
        if (Math.abs(reverseNum - datesArray[i]) % k === 0) {
            counter++
        }
    } 
    return counter
}

link: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem