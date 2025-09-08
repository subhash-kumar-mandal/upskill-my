// Question 1  Find All Indices 
// Input: arr = [2, 3, 2, 4, 2], target = 2
// Output: [0, 2, 4]

let arr = [2, 3, 2, 4, 2]
function findindex(arrays) {
    tar1 = 2
    let index = []
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] === tar1) {
            index.push(i)
        }

    }
    return index;
}

//  console.log(findindex(arr))

//  --------------------------------------------------------------------------------------------


// Q2. Second Largest & Second Smallest
// Input: arr = [5, 7, 2, 9, 1, 6]
// Output: Second Smallest = 2, Second Largest = 7

let arr1 = [5, 7, 2, 9, 1, 6];
function finder(arrays) {
    let max = -Infinity;
    let min = +Infinity;
 
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] > max) {
             max = arrays[i];
        }
        if (arrays[i] < min){
             min = arrays[i]
        }
    }

    let max1 = -Infinity
    let min1 =  +Infinity;
    for(let j=0 ;j<arrays.length ;j++ ){
         if (arrays[j]<max && arrays[j]>max1){
             max1 =arrays[j] ;
         }
         if(arrays[j]> min && arrays[j]<min1 ){
             min1 = arrays[j]
         }
    }

    console.log(`max ${max} and min ${min}`)
    console.log(`second max ${max1} and second  min ${min1}`)
    }

    finder(arr1)


