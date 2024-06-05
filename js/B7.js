"use strict";
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
// Sử dụng hàm myForEach()
const numbers = [1, 2, 3, 4, 5];
myForEach(numbers, (element, index, array) => {
    console.log(`phần tử ${element} vị trí ${index} mảng: [${array}]`);
});
myForEach(numbers, myForEach);
