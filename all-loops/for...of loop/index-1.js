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


// 5. count frequency

let arra =[1,2,3,4,1,2,3,4,5,5,5]

let fcount =(arra)=>{
    let check=[]
    for(let element of arra){
        let count =0;
        if(check.includes(element)){
            continue;
        }


        for(let ele of arra){
            if(ele ===element){
                count++
            }
        }
        console.log(`${element}-->${count}`)
        check.push(element)
    }
}

fcount([1,2,3,4,1,2,3,4,5,5,5])



// 6.question  fill star in vowel place 

let star =(str)=>{
    let string = ""
    for(let element of str){
        if(element ==="a"||element ==="u"||element ==="e"||element==="i"||element ==="o"){
            string +="*"
        }else{
            string += element
        }
    }
    console.log(string)
}
star("hello")


// 7. merge two arrays
let marge =(arra1,arra2)=>{
    let newarra=[];
    for(let element of arra1){
        newarra.push(element)
    }
     for(let element of arra2){
        newarra.push(element)
    }
    console.log(newarra)
}

marge([1,2,3,4,1,2,3,4,5,5,5],[1,2,3,4,1,2,3,4,5,5,5])


// 8.longest word find 

let longest =(arra)=>{
    let find = null;
    for(let element of arra){
        if(find===null ||element.length>find.length ){
            find = element
        }
    }
    console.log(find)
}

longest(["hello","aman","goodnight"]);

// 9. find factorial 


let fact =(arra)=>{
    let facto =[]
    for(let element of arra){
        let fact =1;
        for(let i=1;i<=element;i++){
            fact *= i
        }
        facto.push(fact)
    }
    console.log(facto)
}

fact([1,2,3,4,1,2,3,4,5,5,5])