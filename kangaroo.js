// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    for (var i = 0; i < 100000; i++){
        var posOne = x1 + (v1 * i)
        var posTwo = x2 + (v2 * i)
    if (posOne === posTwo) { return "YES" }
    }
return "NO"
}

link: https://www.hackerrank.com/challenges/kangaroo/problem