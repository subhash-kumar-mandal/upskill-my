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

// console.log(sum)

// find maximum 
function find (arra){
    let max = arra.reduce((acc,curr)=>{
   if(acc>curr){
    return acc
   }else{
    return curr
   }
    })
    return max ;
}

console.log(find([20,30,40,50]));



// saare string arra Element ko sath mein return karo 

function oneline(arra){
    let output = arra.reduce((acc,curr)=>{
        return `${acc} ${curr}`
    })
    return output
} 


console.log(oneline(["hello","i","am","boy"]))


// Object ke price ko sum karo 

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];

const totalPrice = products.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(totalPrice); // 53000
