"use strict";
function findElement(arr, value) {
    return new Promise((resolve, reject) => {
        const foundElement = arr.find(element => element === value);
        if (foundElement) {
            resolve(foundElement);
        }
        else {
            reject("Không tìm thấy phần tử");
        }
    });
}
// Sử dụng hàm findElement
const numbers3 = [1, 2, 3, 4, 5];
const valueToFind = 3;
findElement(numbers3, valueToFind)
    .then(element => {
    console.log(`Phần tử được tìm thấy: ${element}`);
})
    .catch(error => {
    console.log(error);
});
