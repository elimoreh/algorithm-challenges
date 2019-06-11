function breakingRecords(scores) {
    var min = scores[0], max = scores[0];
    var minCount = 0, maxCount = 0;
    var finalArray = []
    for (var i = 1; i < scores.length; i++){
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        } else if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }
finalArray.push(maxCount,minCount)
return finalArray
}

link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem