function myFilter(array:number[], searchValue:number, callback:Function) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], searchValue)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Example callback function
function checkValue(element: number, searchValue:number) {
    return element === searchValue;
}

let numbers2 = [1, 2, 3, 4, 5];
let searchValue = 3;

let filteredNumbers = myFilter(numbers2, searchValue, checkValue);
console.log(filteredNumbers); 
