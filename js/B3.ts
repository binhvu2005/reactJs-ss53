let arr:number[] = [1, 2, 3, 4, 5];
let processArray = (arr:number[], callback:Function) => {
     arr.forEach((item) => { setTimeout(() => 
        { callback(item); }, 1000); 
    }); 
};

let callbackFunction1 = (item:number):void => { 
    console.log("vị trí thứ: ",item+1);
 };

processArray(arr, callbackFunction1); 