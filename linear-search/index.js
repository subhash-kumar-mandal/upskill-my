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
findindex(arr)