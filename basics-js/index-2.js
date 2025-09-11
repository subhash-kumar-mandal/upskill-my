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

// 2. Binary Search  ---->
 let bs = (array,tar) =>{
    let low = 0;
    let high =array.length-1                             
      for(let i=0;i<array.length;i++){
         let mid = Math.floor((low+high)/2);
         if(array[mid] ===tar){
               return `yes element find index ${mid} `  // low = mid +1 , high = mid -1
         } else if (array[mid]<tar){
            low = mid+1 ;
         } else{
            high = mid -1 ;
         }
      }

      return -1;
 }

//  console.log(bs([1,2,3,4,5,6],9))




