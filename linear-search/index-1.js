// 📌 Level 2 – Intermediate Linear Search Problems

// Q1. Count Occurrences
// Input: arr = [2, 3, 4, 2, 5, 2], target = 2  
// Output: 3

let array = [2,3,4,2,5,2]
let tar = 2
function findcount(arr){
    let Count =0
    for(let i =0;i<arr.length;i++){
        if( arr[i]===tar){
            Count++
        }
    }
    return console.log(`${tar} repeat ${Count}times `)
}

findcount(array);