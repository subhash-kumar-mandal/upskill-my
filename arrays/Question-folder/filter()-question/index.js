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


// 2. filter "a" letter
let str = ["apple", "banana", "mango"," hello"];
let a = str.filter((element)=>{
   for(let i=0;i<element.length;i++){
    if(element[i]==="a"){
         return element 
    }
   }
})

// console.log(a)


// 3. filter "a" letter
let filte_fruits = ["apple", "banana", "mango"," hello"];
let fil = filte_fruits.filter((element)=>{
  if(element.includes("a")){
    return element
  }
})

// console.log(fil) 


const students = [
  { name: "Subhash", marks: 85 },
  { name: "Ravi", marks: 35 },
  { name: "Neha", marks: 70 },
  { name: "Pooja", marks: 25 }
];
let filer1= students.filter((element)=>{
  return element.marks>=40
})
console.log(filer1)