//Simple Function (no input)
function hello() {
    console.log("Hello!");
}

hello(); // calling the function


//Function with Parameters (inputs)
function greet(name) {           //greet = function name, name=input (parameter)
    console.log("Hello " + name);
}

greet("Rahim");
greet("Karim");

//Function with Return Value
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); //o/p=8

//Arrow Function (shorter way)
const multiply = (x, y) => {
    return x * y;
};

console.log(multiply(4, 2)); //o/p=8