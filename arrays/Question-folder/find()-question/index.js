// 🔹 find()

// find() किसी array में पहला ऐसा element लौटाता है जो दिए गए condition को पूरा करता है।
// अगर कोई भी element condition match नहीं करता, तो ये undefined देता है।

// 🔹 Syntax:
// array.find(function(element, index, array) {
//   // condition return true or false
// });

// exmple
const numbers = [10, 25, 30, 45, 60];

const result = numbers.find(num => num > 40);
// 40 se bada number dekhna hai but find first condition se true hote hi first element return karta hai 
// yadi  condition true nhi hoti to undefined dena 

console.log(result);
 
// ex 
const nums = [1, 2, 3, 4];
const res = nums.find(num => num > 10);
console.log(res);



// Q
const number = [2, 5, 8, 12, 15, 20];
let biger_than_10 = number.find((Element)=>{
    return Element>10
})

console.log(biger_than_10)
