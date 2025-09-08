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
      console.log(`index ${mid},element ${arr1[mid]}`)
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

let arr = [2,4,6,8,10,12] ;


function finder(arr,tar){
  let low = 0;
  let high = arr.length-1 ;
  let step_count =0

   
}
