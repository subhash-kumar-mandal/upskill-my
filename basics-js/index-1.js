// -----------------------------
// BASIC QUESTION VERY 
// -----------------------------

// Question 1. find minimum any array 
// Input -> [1,2,3,4,5,6]
// output -> 6

function findmini(array){
    let minimum = array[0]
    for(let i=0;i<array.length;i++){
        if(array[i]<minimum){
            minimum = array[i]
        }
    }
    return minimum ;
}
// console.log(findmini([1,2,3,4,5,6]))   ----> 1


// Question 2. find  maximum element any arrays 


function findmax(array){
    let max = -Infinity
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max = array[i]
        }
    }
    return max ;

}

// console.log(findmax([1,2,3,4,5,6]))  -->  6  


// Question 3.  sum of any array all element 
  let arraysum = (arra) =>{
    let sum =0;
    for(let i=0;i<arra.length;i++){
       sum += arra[i]
     }
     return sum;
  }

// console.log(arraysum([1,2,3,4,5,6])) ----> 21



// Question 4 find average in array 
let findaverge = (array) => {
     let sum = 0;
     let averge = 0;
    for (let j = 0; j < array.length;j++) {
        sum += array[j]
        }
     averge = (sum/array.length)
     return `sum = ${sum} and averge = ${averge}` // here is return averge
}

// console.log(findaverge([1,2,3,4,5,6]))



// Question 5. Count frequency of element 
//   input --> arr =[1,1,2,3,4,5,5,5,6,7]
//   output --->  1-->2
//                2-->1
//                3-->1
//                4-->1
//                5-->3
//                6-->1
//                7-->1
 
let CountFrequency = (arr) => {
let checkarra =[]
  for(let i=0;i<arr.length;i++){
     let count = 0
     let  check = false;
     for(let k=0;k<checkarra.length;k++){
        if(arr[i]===checkarra[k]){
            check =true;
            break ;
        }
     }
     if(check){
        continue ;
     }

     for(let f=0; f<arr.length ;f++){
        if(arr[f] === arr[i]){
            count++
        }
     }
     console.log(`${arr[i]} ---> ${count}`)
     checkarra.push(arr[i])
  }

}

// CountFrequency([1,1,2,3,4,5,5,5,6,7])

// Question 6  reverse an arrya 
let arr = [1,2,3,4,5,6]
 let reverse =(array) => {
    let new1 = []
    for(let i=array.length;i>0;i--){
       temp = array.pop()
       new1.push(temp)
    // console.log(new1)
    }
    return new1
 }
// console.log( reverse(arr))


// swap method 
function reverse1(arra){
    for(let i=0;i<Math.floor(arra.length/2);i++){
        let j = arra.length-1 -i
           temp = arra[i]
           arra[i] = arra[j]
           arra[j] = temp
    }
    return arra
}
// console.log(reverse1(arr)) 
