//Create an Object
/*let person = {
    name: "Rahim",
    age: 15,
    city: "Dhaka"
};

//Access Object Values
console.log(person.name);  // Rahim
console.log(person.age);   // 15
*/
// Change a Value
person.age = 16;
console.log(person.age);

// Add a New Property
person.country = "Bangladesh";
console.log(person);

// Delete a Property
delete person.city;
console.log(person);

// Object with Function (Method)
let student = {
    name: "Karim",
    age: 14,
    greet: function() {
        console.log("Hello " + this.name);
    }
};

student.greet();

//Output:Hello Karim

/*//Loop Through Object (for…in)
for (let key in person) {
    console.log(key + ": " + person[key]);
}*/
