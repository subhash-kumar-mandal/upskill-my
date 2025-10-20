
// 🔹 findIndex()
// findIndex() किसी array में पहला ऐसा element का index लौटाता है जो condition को पूरा करे।
// अगर कोई भी match नहीं मिलता, तो ये -1 return करता है।
// ध्यान दो: ये element नहीं, index return करता है।
// 🔹 Syntax:
// array.findIndex(function(element, index, array) {
//   // condition return true or false
// });



// Question 1: Number > 20
const numbers = [5, 12, 18, 25, 30];
let num = numbers.findIndex((element)=>{
    return  element >20
})

console.log(num)


// Question 2: Word length
const fruits = ["apple", "banana", "grapes", "kiwi", "mango"];
let lengt = fruits.findIndex((element)=>{
    return element.length>5;
})
console.log(lengt)