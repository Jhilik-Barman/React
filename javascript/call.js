//Basic Callback Example
function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // calling the callback function
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Rahim", sayBye);

// Output:Hello Rahim  Goodbye!


//Callback Using Anonymous Function
function doWork(callback) {
    console.log("Working...");
    callback();
}

doWork(function() {
    console.log("Work finished!");
});

//Output:Working... Work finished!


//Callback with setTimeout (Delay Example)
console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

//Output:Start End This runs after 2 seconds

//Callback with Parameters
function add(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

add(5, 3, function(result) {
    console.log("Result is:", result);
});

//Output:Result is: 8