// -----------------------------
// BASIC QUESTION VERY 
// -----------------------------

// Question 1. find minimum any array 
// Input -> [1,2,3,4,5,6]
// output -> 6

function findmini(array){
    let minimum = array[0]
    for(let i=0;i<array.length;i++){
        if(array[i]<minimum){
            minimum = array[i]
        }
    }
    return minimum ;
}
// console.log(findmini([1,2,3,4,5,6]))   ----> 1


// Question 2. find  maximum element any arrays 


function findmax(array){
    let max = -Infinity
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max = array[i]
        }
    }
    return max ;

}

// console.log(findmax([1,2,3,4,5,6]))  -->  6  


// Question 3.  sum of any array all element 
  let arraysum = (arra) =>{
    let sum =0;
    for(let i=0;i<arra.length;i++){
       sum += arra[i]
     }
     return sum;
  }

// console.log(arraysum([1,2,3,4,5,6])) ----> 21

