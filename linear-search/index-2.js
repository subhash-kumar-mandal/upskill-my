// Level 3 – Linear Search Applications

// Question 1. Search in String

// Input: str = "subhash"
//  target = "h"  
// Output: 3
let string1= "subhashkumarmandal";
let tar1 =  "h"
console.log(tar1)
function TextCount(arr){
    let TextCount =0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==tar1 ){
          TextCount++
        }
    }
    return console.log(TextCount)
}

// TextCount(string1)
