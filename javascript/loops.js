//for Loop
// Used when you know how many times to repeat.


for (let i = 1; i <= 5; i++) {   //i = 1 → start   i <= 5 → condition   i++ → increase by 1 every time

    console.log(i);
}

//o/p=1.2,3,4,5

//while Loop

//Runs while the condition is true.
let z = 1;

while (z <= 3) {
    console.log(z);
    z++;
}

//o/p=1,2,3

//do…while Loop

//Runs at least one time, even if condition is false.

let y = 1;

do {
    console.log(y);
    y++;
} while (y <= 3);

//o/p=7,8,9




//for…of Loop
// Used for arrays.

let fruits = ["apple", "mango", "banana"];

for (let item of fruits) {
    console.log(item);
}

//o/p=apple mango banana

//for…in Loop
// Used for objects (key/value pairs).

let person = {
    name: "Rahim",
    age: 15
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

//Output:name: Rahim age: 15