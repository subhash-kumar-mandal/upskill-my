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

// 3.एक array [100,200,300,400] है — हर value को string में convert करो (जैसे "100").
let array = [100,200,300,400];
let array_str = array.map((ele)=>{
    return ele.toString()
});
console.log(array_str)

// 4.एक array [10,15,20,25] है — अगर number odd है तो "odd" और even है तो "even" print करने वाला नया array बनाओ।
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

console.log(even_odd);

// 5 एक array ["html", "css", "js"] है — हर element की length निकालो और नया array बनाओ।
let lang =["html", "css", "js"];
let new_lang = lang.map((ele)=>{
    return `${ele} -length --> ${Number(ele.length)}`
})

console.log(new_lang);

// 6. एक array [50, 60, 70] है — हर value में 10% increase करो।

let price =[50,60,70];
let increase10= price.map((ele)=>{
    return ele+(ele*(10/100))
})

console.log(increase10);



// 7.🔟 एक array of objects है: हर student के marks में 5 extra जोड़ो और नया array बनाओ।
let student  = [  { name: "Subhash", marks: 85 },
  { name: "Ravi", marks: 70 },
  { name: "Neha", marks: 90 }
];

let marks = student.map((ele)=>{
    return ele.marks +5
})


console.log(marks)