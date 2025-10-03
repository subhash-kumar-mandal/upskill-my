// ---------
// level 2 
// ---------
// 1. sum the n number 
function sum(a){
    let sum =0 ;
    let count=1;
    while(count<=a){
        sum = sum+count;
        count++
    }
    console.log(sum)
}

// sum(100)


// 2. find factorial product 

function findft(param){
    let tem =1;
    let count = 1
    while(count<=param){
        tem = tem * count
        count++
        console.log(tem)
    }
}

// findft(10)

// 3.question number ko alag alag print karo

function print(para){
    let para1 = para.toString()
    let new1 =""
    let i=0
    while(i<para1.length){
        // console.log(para1[i])
        new1 = new1 + para1[i] + " "
        i++
    }
    console.log(new1)
}

// print(1234)


// 4. input ka sum karo 


function inputsum(para){
    let str = para.toString();
    let i =0 ;
    let  sum = 0;
    while(i<str.length){
        // console.log(str[i])
       sum = sum + Number(str[i])
        i++
    }
  console.log(sum)
}

inputsum(1234)

