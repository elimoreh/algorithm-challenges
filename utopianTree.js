function utopianTree(n) {
    var tree = 1
    for (var i = 1; i <= n; i++){
        i % 2 === 0 ? tree++ : tree *= 2
    }
return tree
}

link: https://www.hackerrank.com/challenges/utopian-tree/problem