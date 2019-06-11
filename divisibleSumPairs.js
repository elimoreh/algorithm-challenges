// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    var counter = 0;
    ar.sort(function(a,b){return a - b})
    for (var i = 0; i < ar.length - 1; i++){
        for (var y = i + 1; y < ar.length; y++) {
            if (((ar[i] + ar[y]) % k === 0)) {
                counter++;
            }
        }
    }
    return counter;
}

link: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem