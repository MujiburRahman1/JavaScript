// ✅ JavaScript Loops Explained
// ------------------------------
// Loops are used to repeat a block of code multiple times.

// 📌 Why use loops?
// If you want to print something 100 times, you don't write 100 lines — you use a loop!


// ---------------------------------
// 🔁 1. FOR LOOP
// ---------------------------------
// Best when you know how many times to run

for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count:", i);
}

// 💡 Dry Run:
// i = 1 → print 1
// i = 2 → print 2
// ...
// i = 5 → print 5
// i = 6 → loop stops (because 6 > 5)


// ---------------------------------
// 🔁 2. WHILE LOOP
// ---------------------------------
// Best when you don’t know exact number of times (condition based)

let count = 1;

while (count <= 5) {
    console.log("While Loop Count:", count);
    count++;  // increase count
}

// 💡 Dry Run:
// count = 1 → print 1
// count = 2 → print 2
// ...
// count = 5 → print 5
// count = 6 → loop ends


// ---------------------------------
// 🔁 3. DO-WHILE LOOP
// ---------------------------------
// Runs the code block at least once, even if the condition is false

let number = 6;

do {
    console.log("Do-While Loop:", number);
    number++;
} while (number <= 5);

// 💡 Dry Run:
// number = 6 → run one time, even though 6 > 5 → then stop


// ---------------------------------
// 🧪 Example: Sum of numbers from 1 to 5 using for loop

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i; // same as sum += i;
}

console.log("Sum from 1 to 5 is:", sum); // Output: 15



// ==========================
// ✅ Summary 
// ==========================

/*
🔹 for loop:
   - Syntax: for (start; condition; step) { code }
   - Use when number of repetitions is known

🔹 while loop:
   - Syntax: while (condition) { code }
   - Use when condition controls loop

🔹 do-while loop:
   - Syntax: do { code } while (condition);
   - Always runs once before checking the condition

🔹 Common use cases:
   - Repeating tasks
   - Running until a condition is met
   - Iterating over lists/arrays
*/

