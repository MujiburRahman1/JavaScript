// 🧠 JavaScript Variables Explained Clearly
// This file explains what a variable is, how to use it, and why it is important.

// 📌 What is a Variable?
// A variable is like a container (dabba) to store data.
// We give it a name and assign a value to it.

// Real-life Example:
// Let’s say we have a bottle named "myWater" and we store 1 liter in it.
// In code:
let myWater = "1 liter";

// 🔧 Declaring Variables
// JavaScript provides three ways to declare variables: var, let, and const.

// ✅ let - Modern way (we can change the value later)
let city = "Lahore";
city = "Karachi";  // OK, value changed

// ✅ const - Value cannot be changed
const country = "Pakistan";
// country = "India"; ❌ Error: const variables cannot be reassigned

// ❌ var - Old way (avoid using in modern JS)
var name = "Ali";

// 🧪 Example with number values
let age = 25;
let marks = 90;
let result = age + marks;  // 25 + 90 = 115
console.log("Total:", result);  // Output: Total: 115

// 🧾 Dry Run:
// Step 1: let age = 25      → age box contains 25
// Step 2: let marks = 90    → marks box contains 90
// Step 3: let result = age + marks → 115
// Step 4: console.log(result) → prints 115

// 🎯 Final Practice Example:
let studentName = "Ayesha";
let studentAge = 18;
const school = "Gomal University";

console.log("Student Name:", studentName);     // Output: Ayesha
console.log("Student Age:", studentAge);       // Output: 18
console.log("School:", school);                // Output: Gomal University

// 📌 Summary:
// - Variables store data in memory.
// - Use let for values that might change.
// - Use const for fixed values.
// - Variable names should be clear and meaningful.
