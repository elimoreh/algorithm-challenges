/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target, index = Math.floor((array.length)/2)) {
    var mid = Math.floor((array.length - 1)/2);
    var newArray;

    if(array[mid] === target){return index};
    if(array.length <= 0){return null};
    if(array[mid] < target){
        newArray = array.slice(mid+1)
        index = index + Math.floor((mid/2)); 
    } else {
        newArray = array.slice(0, mid)
        index = index - Math.floor((mid+1/2));
    }  
    if(mid === 0){index++};
    return binarySearch(newArray, target, index);
}


var index = binarySearch([ 1, 2, 3, 4, 5, 6], );
console.log(index);
