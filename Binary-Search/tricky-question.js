// ----------------------------
// tricky questions
// ----------------------------

// question 1. Count Occurrences
//             Array = [1,2,3,3,3,4,5,5,6]
//             Target = 3
//             Output = 3 बार आया है


let arrays = [1,2,3,3,3,4,5,6];
let tar = 3 ;
let low = 0;
let high = arrays.length-1;
let fristindex = -1;
let lastindex = -1;

// this loop find first tar element index
while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(arrays[mid]===tar){
        fristindex = mid ;
        high = mid-1 ;
    } else if(arrays[mid]<tar){
        low = mid+1 ;
    } else{
        high =mid-1
    }
}

let low1 = 0;
let high1 = arrays.length-1;

//   this loop find last index tar element 
while(low1<=high1){
    let mid = Math.floor((low1+high1)/2)
    if(arrays[mid]===tar){
        lastindex = mid ;
        low1 = mid+1
    } else if(arrays[mid]<tar){
        low1 = mid+1 ;
    } else{
        high1 =mid-1
    }
}

// console.log(fristindex,lastindex)
let count1  ;
if(fristindex===-1 || lastindex === -1){
     count1 = false
}

if(count1 === true){
    count1 = lastindex - fristindex+1    // this condition  find count 
}
// console.log(count1) // -----> here console count tar element 

