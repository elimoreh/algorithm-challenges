// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    ar.sort(function(a,b){ return a - b })
    var count = 0;
    for (var i = 0; i < ar.length; i++){
        if (ar[i] === ar[ar.length - 1]) {
            count++;
        }
    }
    return count;
}

link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem