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


let numbers =[5,10,15,20,25];
if(numbers.includes(15)){
    numbers.pop()
}else{
    numbers.push(15)
}

console.log(numbers);

let find = ["pen", "pencil", "eraser"];
if(find.includes("marker")){
    console.log("marker find")
}else{
    find.push("marker")
}

console.log(find)



let lang =["html","css","js","react"];
if(lang.indexOf("js")>=0){
    let index = lang.indexOf("react");
    lang.splice(index,0,"node")
}

console.log(lang);


let num1 = [10,20,30,40,50];
while(num1.length>=4){
    num1.pop()
}
console.log(num1)