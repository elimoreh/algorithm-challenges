function queueTime(customers, n) {
    var tills = Array.from(Array(n), () => 0)
    for(var i = 0; i < customers.length; i++){
      tills.sort(function(a,b) {return a - b})
      tills[0] += customers[i]
    }
  return Math.max(...tills)
}
// Kyu: 6
// link: https://www.codewars.com/kata/57b06f90e298a7b53d000a86