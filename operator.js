"use strict";
// 1. String concatenation
console.log("my" + "cat");
console.log(1 + "2");
console.log(`String literals: 1 + 2 = ${1 + 2}`);
console.log("Elli's \t\t\t\t\tbook");

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// 가벼운 연산을 처리하는 함수를 앞에 위치시키는게 더욱 효율적
function check() {
  // heavy한 연산
  return true;
}

// && (and) finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type converesion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality = puzzler
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yessss!" : "no");

// 10. Switch statement
// use for multiple if checks
// use of enum-like value check
// use for multiple type checks in TS
const browser = "Firefox";
switch (browser) {
  case "IE":
    console.log("get away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you");
    break;
  default:
    console.log("same all");
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while:${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while: ${i}`);
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (i = 3; i > 0; i = i - 2) {
  console.log(`for: ${i}`);
}

for (i = 5; i < 100; i = i * 2) {
  console.log(`for: ${i}`);
}

// break, continue
// Q1. interate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1. ${i}`);
  }
}

// Q2. interate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
