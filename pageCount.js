function pageCount(n, p) {
    var start = 0
    if (p - 1 < n - p) {
        start = 1
        if (p % 2 === 0) {
                return Math.ceil((p - start)/2)
        } else {
            return (p - start) / 2
        }   
    } else {
        start = n
        if (p % 2 === 0) {
                return Math.floor((start - p)/2)
        } else
            return Math.ceil((start - p) / 2)
    }   
}

link: https://www.hackerrank.com/challenges/drawing-book/problem
