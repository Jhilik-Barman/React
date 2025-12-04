//Simple Promise Example
let myPromise = new Promise(function(resolve, reject) {
    resolve("Promise Successful!");
});

myPromise.then(function(result) {
    console.log(result);
});

// Output:Promise Successful!

// Promise with setTimeout (delay)
let task = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Task completed after 2 seconds");
    }, 2000);
});

task.then(function(msg) {
    console.log(msg);
});

// Output after 2 seconds:
//Task completed after 2 seconds

// Promise Rejected Example
let errorPromise = new Promise(function(resolve, reject) {
    reject("Something went wrong");
});

errorPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// Output:Something went wrong
// Promise Chain Example
new Promise(function(resolve) {
    resolve(5);
})
.then(function(num) {
    console.log(num); // 5
    return num * 2;
})
.then(function(result) {
    console.log(result); // 10
});

// Output:5  10