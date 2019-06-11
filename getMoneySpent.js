function getMoneySpent(keyboards, drives, b) {
    var max = -1 
    for (var i = 0; i < keyboards.length; i++){
        for (var j = 0; j < drives.length; j++){
            var total = (keyboards[i] + drives[j])
            if (total > max && total <= b) {
                max = total;
            }
        }
    }
    return max
}

link: https://www.hackerrank.com/challenges/electronics-shop/problem