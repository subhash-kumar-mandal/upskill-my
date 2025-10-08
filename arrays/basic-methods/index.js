// ---------
// Methods
// ---------

// . Array को modify करने के लिए कुछ built-in methods
 
// | Method      |   क्या करता है               | कहाँ काम करता है     |
// | ----------- | -------------------------- | -------------------|
// | `push()`    | element  add करता  है       |   end (आखिर में)    |
// | `pop()`     | element  remove  करता है    |   end (आखिर से)    |
// | `unshift()` | element  add  करता है       |  start (शुरुआत में)  |
// | `shift()`   | element remove करता है      |  start (शुरुआत से)  |


 //  Example 1: push()
//     -array ko change karte hai 
//     push() array ke last mein add karta hai element 

let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]

// Example 2: pop()
//     array ko change karte hai 
//     pop() array ke last se remove karta hai element 

let fruit = ["apple", "banana", "mango"];
fruit.pop();
console.log(fruit); // ["apple", "banana"]


// Example 3: unshift()
//     array ko change karte hai 
//     unshift() array ke start mein add karta hai element 


let fruits_name = ["banana", "mango"];
fruits_name.unshift("apple");
console.log(fruits_name); // ["apple", "banana", "mango"]


// Example 4: shift()
//     array ko change karte hai 
//     shift() array ke start se remove karta hai element 

let fruit1 = ["apple", "banana", "mango"];
fruit1.shift();

console.log(fruit1); // ["banana", "mango"]

