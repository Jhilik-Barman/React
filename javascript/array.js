//Create an Array
//let fruits = ["apple", "mango", "banana"];
// Access Array Items

//Use index numbers:
// Index starts from 0

console.log(fruits[0]); // apple
console.log(fruits[1]); // mango
console.log(fruits[2]); // banana


//Change a Value
fruits[1] = "orange";
console.log(fruits);

//Output:["apple", "orange", "banana"]

// Array Length
console.log(fruits.length);

//Output:3

//Add Item to Array (push)
fruits.push("grape");
console.log(fruits);

//Output:["apple", "mango", "banana", "grape"]

//Remove Last Item (pop)
fruits.pop();
console.log(fruits);


//Removes the last item.
// Add Item to Beginning (unshift)
fruits.unshift("papaya");
console.log(fruits);

// Remove First Item (shift)
fruits.shift();
console.log(fruits);

// Loop Through an Array
for (let item of fruits) {
    console.log(item);
}