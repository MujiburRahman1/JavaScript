// ✅ DOM = Document Object Model
// It's the structure of the web page that JS can interact with.
// JavaScript can: read, update, add or remove HTML elements using DOM.

// -------------------------------
// 📌 Selecting Elements
// -------------------------------

const heading = document.getElementById("main-heading");
const paragraph = document.querySelector(".info");
const inputBox = document.getElementById("nameInput");

// -------------------------------
// 📌 Changing Text or Value
// -------------------------------

heading.innerText = "Hello, DOM!";        // Changes <h1> text
paragraph.innerText = "Let's learn DOM!"; // Changes <p> text

// -------------------------------
// 📌 Handling Events (onClick, onInput)
// -------------------------------

function changeText() {
    let name = inputBox.value;
    heading.innerText = "Welcome, " + name + "!";
}

// 🧠 Dry Run:
// - User types "Ali" in the input box
// - Clicks the button
// - Function runs: heading text becomes → "Welcome, Ali!"

// ✅ You can also change styles dynamically:
heading.style.color = "blue";
paragraph.style.fontSize = "20px";

/*
===========================
✅ DOM Summary
===========================

document.getElementById("id")         → selects by ID
document.querySelector(".class")     → selects first matching element by class or tag
element.innerText = "..."            → changes text
element.value                        → gets user input value
element.style                        → changes CSS styles
*/

