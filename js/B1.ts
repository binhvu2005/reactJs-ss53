
function calculate(a:number, b:number, callback:Function) {
    const sum = a + b;
    callback(sum);
}

function callbackFunction(result:number) {
    console.log("Tổng của hai số là: " + result);
}

calculate(5, 3, callbackFunction); 
