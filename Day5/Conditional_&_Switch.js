// ✅ JavaScript Conditional Statements and Switch Case
// ----------------------------------------------------
// This file explains how to use if-else and switch case in a beginner-friendly way.

// 🧠 What is a Conditional Statement?
// A conditional statement lets us make decisions in code.
// Example: If it's raining, take an umbrella.

// -------------------------
// 📌 1. IF-ELSE Statement
// -------------------------

let marks = 75;

if (marks >= 80) {
    console.log("Grade: A+"); // Runs if marks are 80 or more
} else if (marks >= 70) {
    console.log("Grade: A");  // Runs if marks are 70 to 79
} else if (marks >= 60) {
    console.log("Grade: B");  // Runs if marks are 60 to 69
} else {
    console.log("Grade: Fail"); // Runs if marks are less than 60
}

// 🔁 Dry Run (Line by Line):
// marks = 75 → is it >= 80? No → is it >= 70? Yes → Output: Grade: A



// -------------------------
// 📌 2. IF-ELSE with Boolean
// -------------------------

let isRainy = true;

if (isRainy) {
    console.log("Take an umbrella!"); // Runs because isRainy is true
} else {
    console.log("No need for an umbrella.");
}

// Output: Take an umbrella!



// ==============================
// 📌 3. SWITCH CASE Statement
// ==============================
// Switch is used to check one value against many cases.
// Example: Display the day name based on a number.

let day = 3;

switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    default:
        console.log("Invalid day");
}

// 🔁 Dry Run:
// day = 3 → case 3 matches → Output: Today is Wednesday



// ==========================
// ✅ Summary
// ==========================

/*
IF-ELSE:
- if (condition): runs this block if the condition is true
- else if (another condition): runs if the first was false
- else: runs if none of the above conditions are true

SWITCH:
- switch(variable): checks the variable against many cases
- case value: if it matches, run the block
- break: stop checking further cases
- default: run this if no case matches
*/
