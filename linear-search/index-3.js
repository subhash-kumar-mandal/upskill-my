// Question 1  Find All Indices (Recursive)
// Input: arr = [2, 3, 2, 4, 2], target = 2
// Output: [0, 2, 4]

let arr = [2,3,2,4,2]
function findindex(arrays){
    tar1 = 2
     let index =[]
      for(let i=0;i<arrays.length; i++){
           if( arrays[i]===tar1){
            index.push(i)
           }

      }
      return index;
}

 console.log(findindex(arr))

//  --------------------------------------------------------------------------------------------


