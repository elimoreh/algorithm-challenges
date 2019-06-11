function countApplesAndOranges(s, t, a, b, apples, oranges) {
        var aMin = (s - a), aMax = (t - a);
        var oMin = (s-b), oMax = (t-b);
    var aArray = apples.filter(function (el)
    { return el >= aMin && el <= aMax })
    var oArray = oranges.filter(function (el)
    { return el >= oMin && el <= oMax })
}

link: https://www.hackerrank.com/challenges/apple-and-orange/problem