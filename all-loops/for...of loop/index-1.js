// 1 find even odd count 

const find =(arra)=>{
    let count =0;
    let count1=0;
    for(let element of arra){
        if(element%2==0){
            count++
        }else{
            count1++
        }
    }
    console.log(`even count ${count}`);
    console.log(`even count ${count1}`)
}

find([12,32,4,56,78,89])




