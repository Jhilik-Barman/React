//Conditions
//if Statement
//Runs only if the condition is true.
let ag = 18;

if (ag >= 18) {
    console.log("You are an adult");
}

//Output:You are an adult

//if…else Statement
//if true → do something
//else false → do something else

let marks = 40;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//Output:Fail

//if…else if…else

//Used when you have multiple conditions.

let score = 75;

if (score >= 90) {
    console.log("A+");
} 
else if (score >= 80) {
    console.log("A");
} 
else if (score >= 70) {
    console.log("B");
} 
else {
    console.log("C");
}

//Output:B

//Ternary Operator (short condition)
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
//o/p=Adult

//switch Statement

//Used when many options.

let day = 3;

switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}
//o/p=Wednesday

