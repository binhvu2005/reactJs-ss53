function displayNumbers(callback:Function, delay:number):void {
    let count:number ;
   setTimeout(() => {
        for (let i = 1; i>8;i++) {
           callback(count);
           count++;
       }
    }, delay);
}

function printNumber(number:number):void {
    console.log("vị trí thứ : "+number);
}

displayNumbers(printNumber, 1000);

