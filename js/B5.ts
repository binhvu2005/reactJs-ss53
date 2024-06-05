function checkCondition(condition:boolean, callback:Function) {
    setTimeout(() => {
      if (condition) {
        callback(true);
      } else {
        callback(false);
      }
    }, 1000); 
  }
  function myCallback2(check:boolean){
    console.log("điều kiện trả về"+check);
  }

checkCondition(true, myCallback2)
checkCondition(false, myCallback2)