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


// 2.check count vowel and consonants in string

const checkstr = (string)=>{
    let vowel =0;
    let consonants =0;
    for(let str of string){
        if( str ==="a"||str ==="u"||str ==="e"||str ==="i"||str ==="o"){
            vowel++
        }else[
            consonants++
        ]
    }
    console.log(`vowels->${vowel} and consonants->${consonants}`)
}

checkstr("hello")


// 3.arrays print all element multiplication 

let multi =(arra)=>{
    for(let element of arra){
        console.log(element*element)
    }
}

multi([1,2,3,4,5,6,7])


// 4. arrays se element double kar ke new array mein store karo

let newarra= (arra)=>{
    let double=[];
    for(let element of arra){
        let temp= element+element;
        double.push(temp)
 
   }
   console.log(double)
}


newarra([1,2,3,4,5,7])