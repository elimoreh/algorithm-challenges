// Complete the viralAdvertising function below.
 const viralAdvertising = (n) =>  {
    var totalLikes = 0;
    var shared = 5;
    for (var i = 1; i <= n; i++){
        shared = Math.floor(shared/ 2)
        totalLikes += shared
        shared *= 3
    }
    return totalLikes
}

link: https://www.hackerrank.com/challenges/strange-advertising/problem