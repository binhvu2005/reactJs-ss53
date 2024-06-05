"use strict";
function myFind(array, find, callback) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === find) {
            callback(array[i], i, array);
        }
    }
    function findAndLog(element, index, array) {
        if (element === find) {
            console.log(array[index]);
        }
        else {
            console.log("null");
        }
    }
    // Sử dụng hàm myForEach
    const numbers1 = [1, 2, 3, 4, 5];
    myFind(numbers1, 2, findAndLog);
}
