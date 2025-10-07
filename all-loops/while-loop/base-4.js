

// 1. Armstrong Number check

function isArmstrong(num) {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit ** 3; // digit का cube
        num = Math.floor(num / 10);
    }

    if (sum === original) {
        console.log(`${original} is an Armstrong number`);
    } else {
        console.log(`${original} is not an Armstrong number`);
    }
}

// Example:
isArmstrong(153); // Armstrong
isArmstrong(123); // Not Armstrong



// 2.Find sum of squares of digits
function sumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit; // square
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

// Example:
sumOfSquares(123); // 14



// 3. Find GCD (HCF) using While Loop 

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;  // remainder
        a = temp;
    }
    console.log(a);
}

// Example:
findGCD(12, 18); // 6
