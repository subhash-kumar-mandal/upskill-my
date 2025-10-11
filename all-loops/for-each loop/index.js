// 1. print the all element 
const numbers = [5, 10, 15, 20];
// 👉 Output: 5, 10, 15, 20
numbers.forEach((Element,index,arra) =>{
    console.log(Element)
})

// 2. number ko double karo haar element 
const num = [1,2,35,56,75];
num.forEach((Element)=>{
    console.log(Element+Element)
})


// 3. print arra index and element same line 

let num1 = [20,52,45,65,67];
num1.forEach((Element,index)=>{
    console.log(`${index} : ${Element}`)
})

// 4. find Element with join "helllo" front side 

let str = ["Subhash","Ravi","Neha"];
str.forEach((ele)=>{
    console.log(`Hello ${ele}`)
})

// 5. find the sum of array . 

let array = [20,37,67,45];
let sum = 0;
array.forEach((number)=>{
    sum += number;
})
console.log(sum)


// 6. find even or odd 

let zero =[1,2,3,4,,5,6,7,8,10];

zero.forEach((num)=>{
    if(num%2===0){
        console.log(`even number ${num}`)
    }else{
         console.log(`Odd number ${num}`)
    }
})