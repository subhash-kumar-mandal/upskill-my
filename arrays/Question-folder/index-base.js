// practice (push, pop, shift, unshift, indexOf, includes)
let fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("mango");
fruits.pop();
console.log(fruits)


let num = [10,20,30];
num.unshift(5);
num.shift();
console.log(num);


let check_element =(arra)=>{
    if(arra.includes("banana")){
        console.log("found");
    }else{
        console.log("not found")
    }
}

check_element([ 'apple', 'banana', 'mango' ]) // "found";


let number =[100, 200, 300, 400];
if(number.indexOf(300) >= 0 ){
console.log(number.indexOf(300))
}else{
    console.log("not found ")
}


let name =["subhash","ravi","neha"];
name.push("kumar");
name.unshift("priya");
let i = name.indexOf("ravi");
name[i] = "raj";
console.log(name)