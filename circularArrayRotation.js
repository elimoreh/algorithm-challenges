
// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    for (var i = 1; i <= k; i++){
        a.unshift(a.pop())
    }
    var finalArray = queries.map(function (number) { return a[number] })
    return finalArray

}

link: https://www.hackerrank.com/challenges/circular-array-rotation/problem