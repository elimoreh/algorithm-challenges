function tribonacci(signature,n){
    if(n < 3){ return signature.slice(0,n) }
    for(var i = 0; signature.length < n; i++){
      var nextNumber = signature[i] + signature[i + 1] + signature[i + 2]  
      signature.push(nextNumber)
    }
  return signature
}
// Kyu: 6
// Link: https://www.codewars.com/kata/556deca17c58da83c00002db