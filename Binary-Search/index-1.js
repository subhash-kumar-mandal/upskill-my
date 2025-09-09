// Binary Search कब use होता है?

// जब तुम्हारे पास sorted array (ascending या descending order में) हो।
// Binary Search में हम बार-बार array को आधा करते हैं और target element को खोजते हैं।
// इसकी time complexity O(log n) होती है (Linear Search O(n) से बहुत fast)।

// --> Basic Idea
//   sorted array  ---> [10, 20, 30, 40, 50, 60, 70]
//   find ------->  50

// step 1. पूरे array का middle element लो।
//         यहाँ middle = 40

// step2. Compare करो target (50) से:
//       -अगर target == middle → element मिल गया ✅
//       -अगर target < middle → left side में search करो
//       -अगर target > middle → right side में search करो

// step3. यही process repeat करो जब तक element मिल न जाए या array खत्म न हो जाए।


// Question 1.  Array = [5, 10, 15, 20, 25], 
//              Target = 15

let arr1 =[5,10,15,20,25];
 let tar1 =15
let low =0 ;
let high = arr1.length-1;

for(let i=0;i<arr1.length;i++){
  let check ;
  let mid = Math.floor((low+high)/2)
  if(arr1[mid]===tar1){
      // console.log(`index ${mid},element ${arr1[mid]}`)
      break;
  }
  if(arr1[mid]<tar1){
    low = mid +1 
  }else{
    high = mid-1
 }
}
// ----------------------------------------------------------------------------------------------------------------------------

// Question 2  
// Array = [2, 4, 6, 8, 10, 12]
//             Target = 10

let arra = [2,4,6,8,10,12] ;
let tar2 = 10 ;

function finder(arr,tar){
  let low = 0;
  let high = arr.length-1 ;

  for(let j=0;j<arr.length;j++){
    let mid = Math.floor((low+high)/2)
    if(arr[mid]===tar){
       return mid ;
    
    }
    if(arr[mid]<tar){
      low = mid +1 ;
      
    }else{
      high =mid-1;
      
    }
    
  }

   
}

// console.log(` element 10 index  ${finder(arra,tar2) } par hai `)


// question 3 First occurrence (duplicate  array element )
  // input = [1,2,3,3,3,4,5,5,6]
  //  tar = 3
  //  output = 2 index

function finder1(arr,tar){
  let low = 0;
  let high = arr.length-1
  let new1 = 0 ;
  for(let i=0;i<arr.length;i++){
    let mid = Math.floor((low+high)/2);
    if(arr[mid]===tar){
          new1 = mid
          high = mid-1
    } 
    if(arr[mid]<tar){
        low = mid +1;
    } else{
      high = mid-1;
    }
  }
  return new1 ;
}

// let frist = finder1([1,2,3,3,3,4,5,6,7],3)
// console.log(frist) 
// --------------------------------------------------------------------------------------------------------


// question 4 last  occurrence (duplicate  array element )
  // input = [1,2,3,3,3,4,5,5,6]
  //  tar = 3
  //  output = 4 index


  
function lastindex(arr,tar){
  let low = 0;
  let high = arr.length-1
  let new1 = 0 ;
  for(let i=0;i<arr.length;i++){
    let mid = Math.floor((low+high)/2);
    if(arr[mid]===tar){
          new1 = mid  // tar milte hi uski index ko new1 mein daalo
          low = mid+1  // yadi tar mil gya hai tabi left mein dekhte rahi kya pata or bhi ho to 
    } 
    if(arr[mid]<tar){
        low = mid +1;
    } else{
      high = mid-1;
    }
  }
  return new1 ;// here is return first index or target 
}

// let Lastindex= lastindex([1,2,3,3,3,4,5,5,6],3)
// console.log(Lastindex)


// ---------------------------------------------------------------------------------------------------

// Question 5 find first and last index or sorted duplicate element 
//  Input = [1,2,3,4,4,4,5,5,5,6,6,4,4,4,,7,7,]
//   tar = 4 
//   output = index 3 and index 13 return 

function fLindex(arrays,tar){

  // this loop find frist index  
  let low = 0 
  let  high =arrays.length-1
  let Ft = 0
   while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(arrays[mid]===tar){
        Ft = mid 
        high = mid-1 
    } else if( arrays[mid]<tar){
       low = mid + 1 ;
    } else{
      high = mid -1 ;
    }
  }
 
  // this loop find last index 
  let low1 = 0 
  let  high2 =arrays.length-1
  let Lt = 0
   while(low1<=high2){
    let mid = Math.floor((low1+high2)/2)
    if(arrays[mid]===tar){
        Lt = mid 
        low1 = mid+1 
    } else if( arrays[mid]<tar){
       low1 = mid + 1 ;
    } else{
      high2 = mid -1 ;
    }
  }

  console.log(Ft,Lt)
}
// (fLindex([1,2,2,2,3,4,],2))