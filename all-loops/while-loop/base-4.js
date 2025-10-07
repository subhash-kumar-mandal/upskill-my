

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
