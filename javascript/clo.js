// Simple Closure Example
function outer() {
    let name = "Karim";

    function inner() {
        console.log(name);
    }

    return inner;
}

let closureResult = outer();  
closureResult(); 

// Closure with setTimeout
function timer() {
    let message = "Hello after 2 seconds";

    setTimeout(function() {
        console.log(message);
    }, 2000);
}

timer();
