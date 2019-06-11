// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let primDia = 0, secDia = 0, differnce = 0;
    for (let row = 0; row < arr.length; row++){
        for (let col = 0; col < arr[row].length; col++){
            if (row === col) { primDia += arr[row][col] };
             if (row + col === arr.length - 1) { secDia += arr[row][col] }
        }
     }
    return Math.abs(primDia- secDia)
}

link: https://www.hackerrank.com/challenges/diagonal-difference/submissions/code/98556323