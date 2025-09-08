// Level 3 – Linear Search Applications

// Question 1. Search in String

// Input: str = "subhash"
//  target = "h"  
// Output: 3
let string1 = "subhashkumarmandal";
let tar1 = "h"
function TextCount(arr) {
    let TextCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == tar1) {
            TextCount++
        }
    }
    return (TextCount)
}

// TextCount(string1)


// question 2  Palindrome Check (Linear Search logic से)
// Input: arr = [1, 2, 3, 2, 1]
// Output: true

let arr = [1,2,3,2,1]
function find_palindrome(arra) {
    let check = true;
    for (let i = 0; i < arra.length; i++) {
        let j = arra.length-1 - i
        if (arra[i] !== arra[j]) {
            return check = false
        }
    }
    return check ;
}


console.log(find_palindrome(arr))

