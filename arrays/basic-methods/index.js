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