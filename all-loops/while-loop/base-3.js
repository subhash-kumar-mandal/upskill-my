// ----------- 
// level -3 
// -----------

// 1. check number palindrome 

let num = 121;

function check(arra){
    let str = arra.toString();
    let  i =0;
    while(i<Math.floor(str.length/2)){
        let j= str.length-1 -i
        if(str[i]!==str[j]){
            return console.log("not palindrome")
        }
        i++
    } 
    return console.log("Yes palindrome")
}


// check(num)  