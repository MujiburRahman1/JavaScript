// 🧠 JavaScript Data Types & Operators Explained
// Learn the different kinds of values in JavaScript and how to perform operations on them.

// ----------------------------
// 📌 1. DATA TYPES
// ----------------------------

// JavaScript has two main types: 
// 1. Primitive Types
// 2. Reference (Non-Primitive) Types

// ✅ Primitive Types:

// 🟡 String – text (written in quotes)
let name = "Ali";              // Roman Urdu: Naam ko double quotes mein likhtay hain
console.log(typeof name);      // Output: string

// 🟡 Number – integer or decimal
let age = 25;
let price = 99.99;
console.log(typeof age);       // Output: number

// 🟡 Boolean – true or false
let isStudent = true;
let isLoggedIn = false;
console.log(typeof isStudent); // Output: boolean

// 🟡 Undefined – variable declared but no value assigned
let myValue;
console.log(typeof myValue);   // Output: undefined

// 🟡 Null – intentional empty value
let data = null;
console.log(typeof data);      // Output: object (yes, it's weird – this is a known JS bug)

// 🟡 Symbol – unique value (advanced topic, skip for now)

// ✅ Non-Primitive Type:

// 🟢 Object – collection of key-value pairs
let student = {
  name: "Ali",
  age: 20,
  isEnrolled: true
};
console.log(typeof student);   // Output: object

// 🟢 Array – list of values (also object type)
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits);    // Output: object (array is a special kind of object)

// ----------------------------
// 📌 2. OPERATORS
// ----------------------------

// ✅ Arithmetic Operators – numbers pe operations

let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333
console.log("Modulus:", a % b);         // 1 (Remainder)
console.log("Exponent:", a ** b);       // 1000 (10^3)

// ✅ Assignment Operators

let x = 5;
x += 3;     // Same as: x = x + 3
console.log("x:", x);   // 8

// ✅ Comparison Operators – compare two values (true/false)

console.log(5 == "5");      // true (value match, type doesn't matter)
console.log(5 === "5");     // false (strict comparison: value + type)
console.log(5 != 6);        // true
console.log(10 > 5);        // true
console.log(10 <= 5);       // false

// ✅ Logical Operators – check multiple conditions

let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false (AND: both must be true)
console.log(isAdult || hasID); // true (OR: at least one is true)
console.log(!isAdult);         // false (NOT: reverses the value)

// ✅ Typeof Operator – check variable type
console.log(typeof 42);          // number
console.log(typeof "hello");     // string
console.log(typeof true);        // boolean

// ----------------------------
// 📌 Summary (Roman Urdu)
// ----------------------------

/*
- String = text like "Ali"
- Number = 10, 99.99
- Boolean = true / false
- Undefined = jab value assign nahi hoti
- Null = intentional empty
- Object = data collection (key-value pair)
- Array = list of values

Operators:
- +, -, *, /, %, **  → Arithmetic
- ==, ===, >, <      → Comparison
- &&, ||, !          → Logical
- +=, -=             → Assignment
*/

