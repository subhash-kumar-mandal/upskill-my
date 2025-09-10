// -----------------------------
// BASIC QUESTION VERY 
// -----------------------------

// Question 1. find minimum any array 
// Input -> [1,2,3,4,5,6]
// output -> 6

function findmini(array){
    let minimum = -1
    for(let i=0;i<array.length;i++){
        if(array[i]>minimum){
            minimum = array[i]
        }
    }
    return minimum ;
}
// console.log(findmini([1,2,3,4,5,6]))   ----> 6


