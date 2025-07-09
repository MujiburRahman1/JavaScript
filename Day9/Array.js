// ✅ 1. JavaScript Arrays – Basic
// ----------------------------------
// An array is a list (collection) of items like numbers, strings, or objects.

let fruits = ["apple", "banana", "mango"];
console.log(fruits);          // Output: [ 'apple', 'banana', 'mango' ]
console.log(fruits[0]);       // Output: apple
console.log(fruits.length);   // Output: 3

// Add item to end
fruits.push("orange");        // ['apple', 'banana', 'mango', 'orange']

// Remove last item
fruits.pop();                 // ['apple', 'banana', 'mango']

// Add to beginning
fruits.unshift("kiwi");       // ['kiwi', 'apple', 'banana', 'mango']

// Remove from beginning
fruits.shift();               // ['apple', 'banana', 'mango']

// Check if item exists
console.log(fruits.includes("banana")); // true

// Loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



// ✅ 2. Array Higher-Order Functions (HOF)
// ----------------------------------------
// These are built-in functions that take another function as input.

// Let's use this array of numbers:
let numbers = [2, 4, 6, 8, 10];


// 🔸 map() → creates a new array by transforming each item
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);  // [4, 8, 12, 16, 20]


// 🔸 filter() → returns only items that match a condition
let even = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", even); // [2, 4, 6, 8, 10]

let greaterThan5 = numbers.filter(num => num > 5);
console.log("Greater than 5:", greaterThan5); // [6, 8, 10]


// 🔸 reduce() → reduces the array to a single value (like sum)
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", total); // Output: 30


// 🔸 forEach() → runs a function for each item (no return)
console.log("Each item:");
numbers.forEach((num, index) => {
    console.log(index + " → " + num);
});


// 🔸 find() → returns the FIRST item that matches condition
let found = numbers.find(num => num > 5);
console.log("First number > 5:", found); // Output: 6



// ✅ JavaScript Array Higher-Order Functions – Real Life Examples

// 🟡 1. map() → transform each item → prices with tax

let prices = [100, 200, 300];

let pricesWithTax = prices.map(price => price + price * 0.1);  // 10% tax added
console.log("Prices with tax:", pricesWithTax);
// Output: [110, 220, 330]


// 🟡 2. filter() → select items → filter users age > 18

let users = [
    { name: "Ali", age: 17 },
    { name: "Sara", age: 21 },
    { name: "Omar", age: 15 },
    { name: "Hina", age: 19 }
];

let adults = users.filter(user => user.age > 18);
console.log("Adult Users:", adults);
// Output: [{ name: 'Sara', age: 21 }, { name: 'Hina', age: 19 }]


// 🟡 3. reduce() → combine items → sum of all items

let cart = [500, 1200, 300, 100];

let totalBill = cart.reduce((acc, curr) => acc + curr, 0);
console.log("Total Bill:", totalBill);
// Output: 2100


// 🟡 4. forEach() → loop without return → print all names

let students = ["Ali", "Sara", "Omar"];

console.log("All Students:");
students.forEach((student, index) => {
    console.log(index + 1 + ". " + student);
});
// Output:
// 1. Ali
// 2. Sara
// 3. Omar


// 🟡 5. find() → find first match → first student with grade A

let results = [
    { name: "Ali", grade: "B" },
    { name: "Sara", grade: "A" },
    { name: "Omar", grade: "C" }
];

let topStudent = results.find(student => student.grade === "A");
console.log("Top Student:", topStudent);
// Output: { name: 'Sara', grade: 'A' }



