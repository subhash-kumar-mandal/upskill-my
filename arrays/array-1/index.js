// -------------
// array basics
// -------------


// 1. what is array . 
//      - Array एक ऐसा container(box) होता है जिसमें कई values को एक साथ store किया जा सकता है —
//        और सबको एक ही variable नाम से access किया जाता है।

//  Example:

// अगर तुम्हारे पास 5 students के marks हैं —तुम ऐसे store कर सकते हो:

// let mark1 = 85;
// let mark2 = 90;
// let mark3 = 75;
// let mark4 = 88;
// let mark5 = 92;


// note  -- ये बहुत लंबा और messy है ना?
// अब यही काम array से बहुत आसान हो जाता है 👇

// let marks = [85, 90, 75, 88, 92];

// *अब सारे marks एक variable (marks) में हैं।
// *हर value की अपनी position (index) होती है।



// 🔹 Step 2: whta is indexing ? 

// *Array में हर value का एक index number होता है —
// *जो 0 से शुरू होता है।

// | Index | Value |
// | ----- | ----- |
// | 0     | 85    |
// | 1     | 90    |
// | 2     | 75    |
// | 3     | 88    |
// | 4     | 92    |

// तो अगर तुम्हें 75 चाहिए तो:
// console.log(marks[2]); // Output: 75



// 3. how to create arrays
// method 1 (common)
let frurit =["apple","banana","mango"];

// method 2(using constructor)
let frurits = new Array("apple","banana","mango")

console.log(frurit)
