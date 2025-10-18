// ----> what is reduce method 
//    reduce() array के सारे elements को एक single value में combine कर देता है।
//   sum निकालना, average, product, max, min, या object बनाना — सब reduce से किया जा सकता है।

// 🔹 Syntax
// array.reduce((accumulator, currentValue, index, array) => {
//   // return updated accumulator
// }, initialValue);

// | Parameter      | Meaning                       |
// | -------------- | ----------------------------- |
// | `accumulator`  | पिछले step का result रखता है  |
// | `currentValue` | अभी वाला element              |
// | `index`        | (optional) current index      |
// | `initialValue` | accumulator की starting value |


let arra = [20,30,40,50];
let sum = arra.reduce((acc,curr)=>{
    // console.log(acc);
    return acc+curr
})

console.log(sum)