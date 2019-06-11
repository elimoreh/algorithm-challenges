function equalizeArray(arr) {

    var deletedArray = arr.filter(function(number){return number !== mode(arr)})
    return deletedArray.length

    function mode(array) {
        var maxFreq = 0;
        var arrayMode = 0;
        var map = {};
        for (var i = 0; i < array.length; i++){
            if (map[array[i]] !== undefined) {
                map[array[i]]++;
            } else {
                map[array[i]] = 1; 
            }
            if (map[array[i]] > maxFreq) {
                arrayMode = array[i];
                maxFreq = map[array[i]]
            }
        }
        return arrayMode
    }
}

link: https://www.hackerrank.com/challenges/equality-in-a-array/problem