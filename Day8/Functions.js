// ✅ 1. Regular Function
// --------------------------
// A function is a reusable block of code that performs a task.

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Ali");   // Output: Hello, Ali!
greet("Sara");  // Output: Hello, Sara!

// 🧠 Dry Run:
// Call greet("Ali") → prints "Hello, Ali!"



// ✅ 2. Arrow Function
// --------------------------
// A shorter way to write functions (introduced in ES6)

const greetArrow = (name) => {
    console.log("Hi, " + name + "!");
};

greetArrow("Mujib");  // Output: Hi, Mujib!

// 💡 One-liner arrow function (when only one line of code):
const double = num => num * 2;
console.log(double(5));  // Output: 10



// ✅ 3. Higher-Order Function (HOF)
// --------------------------
// A function that takes another function as an argument or returns one.

function processNumber(number, operation) {
    return operation(number);
}

// We will pass a function as argument (see below ⬇️)
const square = (n) => n * n;
const cube = (n) => n * n * n;

console.log("Square:", processNumber(4, square)); // Output: 16
console.log("Cube:", processNumber(3, cube));     // Output: 27

// 🧠 Dry Run:
// processNumber(4, square)
// → calls square(4) → returns 16



// ✅ 4. Callback Function
// --------------------------
// A callback is a function passed as an argument to another function

function fetchData(callback) {
    console.log("Fetching data...");

    // Simulating delay (like from database or API)
    setTimeout(() => {
        let data = { name: "Ali", age: 23 };
        callback(data); // callback function is called with data
    }, 2000);
}

function displayData(user) {
    console.log("Data received:");
    console.log(user);
}

fetchData(displayData); // Output after 2 sec: shows user object

// 🧠 Dry Run:
// - fetchData is called
// - After 2 seconds, displayData(data) runs


/*
=======================
✅ Summary
=======================

1. Regular Function:
   function name(params) { ... }

2. Arrow Function:
   const name = (params) => { ... }

3. Higher-Order Function:
   A function that takes/returns another function

4. Callback Function:
   A function passed as an argument (often for async tasks)
*/
