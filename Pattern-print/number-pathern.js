// ----------------------------
// Level 2: Number Patterns
// ----------------------------

// Question 4 Number Triangle 
// 1
// 12
// 123
// 1234
// 12345

for(let i=1 ;i<=5;i++){
    let str=""
    for(let j =1 ;j<=5;j++){
      if(j<=i){
        str += `${j}`
      }
    }
    // console.log(str)
}


// Question 2 Inverted Number Triangle 

// 12345
// 1234
// 123
// 12
// 1

for(let i =0;i<=5;i++){
    let str = "";
    for(let j=1;j<=5-i ;j++){
    str += `${j}`
    }
    console.log(str)
}