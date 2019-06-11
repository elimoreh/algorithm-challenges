// Complete the birthday function below.
function birthday(s, d, m) {
    var counter = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.slice(i, i + m).reduce(function (a, b) { return a + b }) === d) {
            counter++
        }
    }
    return counter
}

link: https://www.hackerrank.com/challenges/the-birthday-bar/problem