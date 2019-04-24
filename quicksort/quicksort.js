/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


let quicksort = (array) => {
  if(array.length <= 1){return array;}

  let pivotIndex = Math.floor(array.length/2);
  let pivot = array.splice(pivotIndex,1);

  let lessthanArray = [];
  let greaterthanArray = [];

  array.forEach(el => {
    if(el > pivot){greaterthanArray.push(el);}
    else{lessthanArray.push(el)}
  });

  return [...quicksort(lessthanArray),...pivot,...quicksort(greaterthanArray)];
};


console.log(quicksort([6,3,4,2,1,8,-1,1]))
