//Click Event

document.getElementById("btn").onclick = function() {
    console.log("Button was clicked!");
};

//Mouseover Event

document.getElementById("text").onmouseover = function() {
    console.log("Mouse is on the text!");
};

//Keypress Event
document.getElementById("name").onkeypress = function() {
    console.log("You pressed a key");
};

//Change Event
document.getElementById("city").onchange = function() {
    console.log("Value changed!");
};

//Load Event
window.onload = function() {
    console.log("Page loaded successfully!");
};
