// *. apply filter method 

let arr = [1,2,3,4,5,6];
const newArray = arr.filter((element, index, array) => {
  // condition return true/false
});


// 1. filter even number 
let arra =[1,2,3,4,5,6];
let filte_even = arra.filter((element)=>{
    if(element%2===0){
        return element
    }
})
console.log(filte_even)

let str = ["apple", "banana", "mango"," hello"];
let a = str.filter((element)=>{
   for(let i=0;i<element.length;i++){
    if(element[i]==="a"){
         return element 
    }
   }
})

// console.log(a)

let filte_fruits = ["apple", "banana", "mango"," hello"];
let fil = filte_fruits.filter((element)=>{
  if(element.includes("a")){
    return element
  }
})

console.log(fil)

