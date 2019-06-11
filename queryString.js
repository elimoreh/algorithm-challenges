function toQueryString(obj){
    var results = [];
    for(var key in obj){
    if(Array.isArray(obj[key])){
        var array = obj[key];
        var arr = [];
        for(var i = 0;i < array.length; i++){
          arr.push(`${key}=${array[i]}`);
        }
        var string = arr.join("&")
        results.push(string)
      } else {
        results.push(`${key}=${obj[key]}`)
      }
    }
  return results.join("&")
}
// Kyu: 7
// Link: https://www.codewars.com/kata/595249fc10b69f4f7a000003