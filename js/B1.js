"use strict";
function calculate(a, b, callback) {
    const sum = a + b;
    callback(sum);
}
function callbackFunction(result) {
    console.log("Tổng của hai số là: " + result);
}
calculate(5, 3, callbackFunction);
