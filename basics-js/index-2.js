// -----------------------------
// SEACRCHING BASICS
// -----------------------------

// 1. IMPELMENT  LINEAR SEARCH ---> 
let linearfind= (arr,tar) =>{
    for(let i =0 ;i<arr.length ;i++){
        if(arr[i]===tar){
            return arr[i]
        }
    }
     return -1
    }

// console.log(linearfind([1,2,3,4,5,6],8))