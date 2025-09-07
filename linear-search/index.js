//  Question 1 
// find target return index  , no find return -1 
let arr = [10, 20, 30, 40, 50]
let  target = 30
function findindex(arrays){
    for(let i=0; i<arrays.length;i++){
        if(arrays[i]===target){
            return console.log(i)
        }
    }
    return console.log(-1)
}
// findindex(arr)


// question 2 
// find target return true , no find return false

let arr1 = [5, 8, 12, 7, 25] 
let target1 = 18 
function findnum(arrays){
    for(let i=0; i<arrays.length;i++){
        if(arrays[i]===target1){
            return console.log(true)
        }
    }
    return console.log(false)
}

findnum(arr1)
 


