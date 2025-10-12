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