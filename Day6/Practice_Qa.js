let num = 5;

let newNum = num++;
console.log("After num++:");
console.log("num =", num);       // 6
console.log("newNum =", newNum); // 5

newNum = ++num;
console.log("After ++num:");
console.log("num =", num);       // 7
console.log("newNum =", newNum); // 7
