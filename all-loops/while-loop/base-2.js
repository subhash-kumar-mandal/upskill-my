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


