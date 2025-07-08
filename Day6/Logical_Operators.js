// ✅ JavaScript Logical Operators Explained
// -----------------------------------------
// Logical operators are used to connect multiple conditions
// They return either TRUE or FALSE based on logic

// There are 3 main logical operators in JavaScript:

// 1. && (AND)
// 2. || (OR)
// 3. !  (NOT)


// ----------------------------
// 📌 1. AND Operator (&&)
// ----------------------------
// Returns true ONLY if BOTH conditions are true

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("You can enter the exam hall.");
} else {
    console.log("Entry not allowed.");
}

// ✅ Dry Run:
// age = 20 → age >= 18 → true
// hasID = true
// true && true = ✅ true → Output: You can enter the exam hall.


// ----------------------------
// 📌 2. OR Operator (||)
// ----------------------------
// Returns true if AT LEAST ONE condition is true

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can relax today.");
} else {
    console.log("You have to go to school.");
}

// ✅ Dry Run:
// false || true → ✅ true → Output: You can relax today.


// ----------------------------
// 📌 3. NOT Operator (!)
// ----------------------------
// Reverses the condition (true becomes false and vice versa)

let isRaining = false;

if (!isRaining) {
    console.log("Go outside, it's not raining!");
} else {
    console.log("Stay inside, it's raining.");
}

// ✅ Dry Run:
// isRaining = false
// !false = ✅ true → Output: Go outside, it's not raining!



// ============================
// ✅ Summary
// ============================

/*
1. AND (&&):
   - true && true   → ✅ true
   - true && false  → ❌ false
   - false && false → ❌ false

2. OR (||):
   - true || true   → ✅ true
   - true || false  → ✅ true
   - false || false → ❌ false

3. NOT (!):
   - !true  → false
   - !false → true
*/

// 📌 Logical operators are very useful in conditions like:
// - Login system: (username && password)
// - Form validation: (field1 !== "" && field2 !== "")
// - Access control: (isAdmin || isModerator)

