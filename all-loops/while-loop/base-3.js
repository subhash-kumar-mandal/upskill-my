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


// 2. check count how many digits 

function count(arra){
    let a = arra.toString()
    let count1 =0;
    let i=0;
    while(i<a.length){
        count1++
        i++
    }
   return console.log(count1)
}

// count(12345)



// 3. find factorial n number

function fac(n){
    let factor = 1;
    while (n>=1) {
        factor *= n
        n--
    }
    return console.log(factor)
}

// fac(5)


// 4. squares print nth number 

function squares(a){
    let i=1;
    while (i<=a) {
        console.log(i*i);
        i++
    }
}

squares(5)