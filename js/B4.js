"use strict";
function displayNumbers(callback, delay) {
    let count;
    setTimeout(() => {
        for (let i = 1; i > 8; i++) {
            callback(count);
            count++;
        }
    }, delay);
}
function printNumber(number) {
    console.log("vị trí thứ : " + number);
}
displayNumbers(printNumber, 1000);
