function angryProfessor(k, a) {
    var array = a.filter(function (number) { return number <= 0 })
    return array.length >= k ? "NO" : "YES"

}

link: https://www.hackerrank.com/challenges/angry-professor/problem