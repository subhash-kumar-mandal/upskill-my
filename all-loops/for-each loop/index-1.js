// 1. square  the number  ;

const square =(arra)=>{
    arra.forEach((element) => {
         console.log(element*element)
    });
}

// square([1,2,3,4,25,5,63])



// 2. negative number count 
const numbers = [10, -5, 8, -12, 20, -7];
let negtive_count =0;
   numbers.forEach((element)=>{
   if(element<0){
    negtive_count++
   }
   })
 console.log(negtive_count) 



//  3. print first letter uppercare karo 
let str = ["subash", "priya","kumar","good"];

str.forEach((element)=>{
  console.log(element[0].toUpperCase()+element.slice(1))
})


// 4. print only 3 divisible number 
const arr = [3, 9, 10, 15, 22, 30];
arr.forEach((element)=>{
  if(element%3==0){
    console.log(element)
  }
})


// 5. find array average 
let average =(arra)=>{
  let sum =0;
  arra.forEach((element)=>{
     sum += element;
  })
  console.log(sum/arra.length)
}

// average([3, 9, 10, 15, 22, 30])

// 6. check student  pass and fail 

const students = [
  { name: "Subhash", marks: 85 },
  { name: "Ravi", marks: 40 },
  { name: "Neha", marks: 72 },
  { name: "Amit", marks: 25 }
];
students.forEach((element,index)=>{
  if(students[index]["marks"] >=40){
 console.log(`${students[index]["name"]} : Pass` )
  }else{
     console.log(`${students[index]["name"]} : Fail` )
  }
})




//  7. find duplicate item 

let items = ["apple", "mango", "apple", "banana", "mango"];
let check =[];

items.forEach((element)=>{
  if(check.includes(element)){
        console.log(element);
        check.push(element)
  }else{
      check.push(element)
  }
})

// 8 . find missing number 
 
let missing = [1,2,3,5,6];
missing.forEach((element,index)=>{
  if(missing[index+1]!==undefined){
    if(missing[index+1]-element !==1){
      console.log(element+1)
    }
  }

})