"use strict";
function myFilter(array, searchValue, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], searchValue)) {
            result.push(array[i]);
        }
    }
    return result;
}
// Example callback function
function checkValue(element, searchValue) {
    return element === searchValue;
}
let numbers2 = [1, 2, 3, 4, 5];
let searchValue = 3;
let filteredNumbers = myFilter(numbers2, searchValue, checkValue);
console.log(filteredNumbers);
