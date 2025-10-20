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



// Q 
const words = ["apple", "banana", "grapes", "kiwi", "mango"];
let lengt = words.find((Element)=>{
     return Element.length > 5;
})
console.log(lengt)

// Q 
const num = [3, 9, 15, 21, 30, 42];
let divi = num.find((element)=>{
      return element%3==0 && element%7===0
})
console.log(divi)


// Q
const users = [
  { name: "Aman", age: 17 },
  { name: "Subhash", age: 20 },
  { name: "Ravi", age: 18 },
  { name: "Neha", age: 22 }
];
let age = users.find((element)=>{
    if(element.age>18){
        return element.name
    }
})
console.log(age)


// Q 
const arr = [10, 15, 20, 25, 30];
let even_big= arr.find((element)=>{
    return element%2===0 && element>20 
})
console.log(even_big)