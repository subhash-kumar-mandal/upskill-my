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



// 3. Bubble sort ---------->

let bubblesorted =(arr) =>{
    
    for(let j = 0 ;j<arr.length;j++){
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr
}

// console.log(bubblesorted([1,5,3,26,7,2,4,10]))

//  5 . selection sorted ---->

function  selectionsort (arra){

    for(let j=0;j<arra.length;j++){
        let min = j;
        for(let i=j+1;i<arra.length;i++){
            if(arra[i]<arra[min]){
                min = i
            }
        }
        if(j !== min){
            temp = arra[j]
            arra[j] =arra[min]
            arra[min]= temp 
        }
    }
    return arra
}

// console.log(selectionsort([1,5,3,26,7,2,4,10]))




