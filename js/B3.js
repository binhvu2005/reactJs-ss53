"use strict";
let arr = [1, 2, 3, 4, 5];
let processArray = (arr, callback) => {
    arr.forEach((item) => {
        setTimeout(() => { callback(item); }, 1000);
    });
};
let callbackFunction1 = (item) => {
    console.log("vị trí thứ: ", item + 1);
};
processArray(arr, callbackFunction1);
