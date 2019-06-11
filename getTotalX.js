function getTotalX(a, b) {
        var counter = 0;
    for (var i = 0; i < 1000; i++) {
        if (a.every(function(el) {return i % el === 0 })) {
            if (b.every(function(elm) {return elm % i === 0 })) {
                counter++
            }
        }
    }
        return counter;
}

link:https://www.hackerrank.com/challenges/between-two-sets/problem