// ----------------------
// basics pattern 
// ----------------------

//   Question 1. Square Pattern 
   
    // *****
    // *****
    // *****
    // *****
    // *****

    for(let i=0 ;i<5;i++){
        let star=""
        for(let j=0 ;j<5;j++){
           star += "*"
        }
        console.log(star)
    }


// Question 2. Right-Angled Triangle
//   *
//   **
//   ***
//   ****
//   *****

for(let i=0;i<=5;i++){
    let str = ""
    for(let j=0;j<=5;j++){
    if(j<=i)
        str += "*"
    }
    console.log(str)
}

