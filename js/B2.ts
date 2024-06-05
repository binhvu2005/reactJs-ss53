function delayedCallback(callback: Function): void{
    setTimeout(callback, 3000);
 }
 

 function myCallback() {
    console.log("Callback function được gọi sau 3 giây!");
 }
 
 delayedCallback(myCallback); 
 