/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = (numRows) => {
    //Deals with 0 row edge Case
    if(!numRows) {return [];}
    let results = [[1]];

    let pascal = (array = [1]) => {
        if(results.length >= numRows) { return; }
        let sums = [];

        //uses spread operator to insert the array containg the sums
        let newArray = [1,...sums,1];
        results.push(newArray);
        pascal(newArray);
   }

  pascal();
  return results;
};
