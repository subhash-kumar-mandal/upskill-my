// 1. multiply array element by 2 and return to new array 
let mult = [1,2,3,4,5];
let mult1  = mult.map((Element)=>{
    return Element*2
})
console.log(mult1);

// 2. return to uppercase 
let fru =["apple","banana", "mango"];
let uppercase_fru = fru.map((Element)=>{
    return Element.toUpperCase()
}) ;


console.log(uppercase_fru);


let array = [100,200,300,400];
let array_str = array.map((ele)=>{
    return ele.toString()
});
console.log(array_str)


let n = [10,15,20,25,0];
let even_odd = n.map((ele)=>{
    if(ele===0){
  return  `${ele}-zero`
    }else{
    if(ele%2===0){
        return `${ele}-even`
    }else{
         return `${ele}-odd`
    }
}
})

console.log(even_odd)