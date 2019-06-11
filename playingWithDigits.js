function digPow(n, p){
    var number = n.toString().split("")
    var sumNumber = number.map(function(num,index) { return num **(p + index) })
    sumNumber = sumNumber.reduce( function(a,b){ return a + b })
    if(sumNumber % n === 0){ return sumNumber / n }
    else { return -1 }
}

  
// Kyu: 6
// Link: https://www.codewars.com/kata/5552101f47fc5178b1000050