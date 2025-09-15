// --------------------------------
// 🔹 for...of Loop in JavaScript
// --------------------------------

// 👉 for...of loop iterable objects (जैसे array, string, Map, Set) पर चलाने के लिए use होता है।
// 👉 ये directly value देता है, index नहीं।

// Syntax ---->
//   for (let variable of iterable) {
//    // code block
// }
    //   1. variable → हर बार एक value store करता है
    //   2. iterable → कोई भी iterable data structure (Array, String, Set, Map आदि)


    //   ------> question  leve 1 

let num = [1,2,3,4,5,6]
for(let element of num){
    // console.log(element)  // print the element 
}




// question 2 find sum for of loop
 let sum = 0;
for(let element of num){
     sum = sum + element;
    }
//  console.log( "sum is -->", sum)



// question 3 print the string 
let string = "Apple"
for(let element of string){
    // console.log(element) here print 
}


//  question level 2

// question 4. print the array git

let   f =["apple", "banana", "cherry"]

for(let element of f){
    // console.log(element)  here is print all f element 1 by 1 current element 
}

