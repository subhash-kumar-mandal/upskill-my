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