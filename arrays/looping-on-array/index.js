// ---------------------------------------------------------------------
// 🔹 Step 7: Array के Elements को Access करना और Loop से Traverse करना
// ---------------------------------------------------------------------

// कभी-कभी हमें array के सारे elements को एक-एक करके read या print करना होता है।
// इसके लिए हम loop का use करते हैं।



// Example 1: for loop से array print करना
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); 
                //   |___________ fruits array mein i index par element ko access karna
}



// Example 2: for...of loop (simpler version)

let fruit1 = ["apple", "banana", "mango"];

//         ______________________________________________ har element ho ek ek kar ke access karna
//        |
//        |          ______________________  array name (fruit1 print par pura array print hoga)
//        |        |                      
for (let item of fruit1) {
  console.log(item);
}

// Note : for..of loop index nhi dena padta hai ye sab khud karta hai 



// Example 3: forEach() method 
// forEach() एक array method है जो array के हर element पर function को apply करता है।
// मतलब, array के हर item के लिए एक काम कर सकते हैं, जैसे print करना या modify करना।

let fruit2 = ["apple", "banana", "mango"];

fruit2.forEach(function(fruit,index,fruit2) {
  console.log(fruit,index,fruit2);
});


// note fruit -- current element 
//      index -- current index
//      fruit2-- pura array dena haar bar