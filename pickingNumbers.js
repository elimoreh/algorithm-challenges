function pickingNumbers(a) {
    a = a.sort(function (a, b) { return a - b })
    var max = 0
    for (var i = 0; i < a.length - 1; i++){
        for (var j = a.length; j > 0; j--){
            if (a[i + j] - a[i] <= 1) {
                if(j > max){max = j}
            } 
        }
    }
    
return max + 1
}

link : https://www.hackerrank.com/challenges/picking-numbers/problem