function task1(callback:Function) {
    setTimeout(function() {
        console.log("Task 1 ok");
        callback();
    }, 1000);
}

function task2(callback:Function) {
    setTimeout(function() {
        console.log("Task 2 ok");
        callback();
    }, 1500);
}

function task3(callback:Function) {
    setTimeout(function() {
        console.log("Task 3 ok ");
        callback();
    }, 2000);
}

task1(function() {
    task2(function() {
        task3(function() {
            console.log("xong");
        });
    });
});