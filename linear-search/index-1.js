// 📌 Level 2 – Intermediate Linear Search Problems

// Q1. Count Occurrences
// Input: arr = [2, 3, 4, 2, 5, 2], target = 2  
// Output: 3

let array = [2, 3, 4, 2, 5, 2]
let tar = 2
function findcount(arr) {
    let Count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tar) {
            Count++
        }
    }
    return console.log(`${tar} repeat ${Count}times `)
}

// findcount(array);

// ----------------------------------------------------------------------------------------------------------------------


// Q2. First & Last Occurrence
// Input: arr = [10, 20, 30, 20, 40, 20, 50]
//  target = 20  
// Output: First: 1, Last: 5

let newarr = [10, 20, 30, 20, 40, 20, 50]
let tar1 = 20
function newfind(arr) {
    let frist = 0
    let last = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tar1) {
            frist = i;
            break
        }
    }


    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] === tar1) {
            last = j;
            break
        }
    }
 return console.log(`First${frist} and Last ${last}`);
}

// newfind(newarr)

// _________________________________________________________________________________________________________________


// Question 3 Min & Max using Linear Search
// Input: arr = [5, 8, 1, 6, 9, 2]  
// Output: Min = 1, Max = 9

let arr2 = [5, 8, 1, 6, 9, 2]
let min = +Infinity;
let max = -Infinity

for(let i =0 ;i<arr2.length;i++){
    if(arr2[i]>max){
       max = arr2[i]
    } else if( arr2[i]<min){
        min = arr2[i]
    }
}

// console.log(`min ${min} and max ${max}`)
