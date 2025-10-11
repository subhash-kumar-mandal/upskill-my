// -------------
// what is for each loop base 
// -------------

// 1. forEach() एक array method है जो हर element पर एक बार function चलाता है।
// मतलब — array के हर item को एक-एक करके process करता है।

// | Parameter | Meaning                               |
// | --------- | ------------------------------------- |
// | `element` | current value (array का present item) |
// | `index`   | current item का index (optional)      |
// | `array`   | original array खुद (optional)         |


// 🔹 Basic Syntax

// array.forEach(function(element, index, array) {
//   // code to run on each element
// });


// 1. simple print 

const numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
  console.log(num);
});



// 🔹 Example 2: Arrow Function के साथ 

const fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
  console.log(`I like ${fruit}`);
});


// 🔹 Example 3: index का इस्तेमाल 

 const names = ["Subhash", "Ravi", "Neha"];

names.forEach((name, index) => {
  console.log(`${index}: ${name}`);
});


// 🔹 Example 4: Numbers को 2 से Multiply करना 

const nums = [2, 4, 6, 8];
nums.forEach(num => {
  console.log(num * 2);
});



// [NOTE 1. forEach() kuch bhi return  nhi karta hai , es se new array nhi bana sakte . 
//       2. Ager new  create  karna hai to Map() use kare .Ager
//       3. forEach() break and continue ko support nhi karta hai ] 

// example :
const arr = [1, 2, 3];

const result1 = arr.forEach(num => num * 2);
console.log(result1); // ❌ undefined

const result2 = arr.map(num => num * 2);
console.log(result2); // ✅ [2, 4, 6]
