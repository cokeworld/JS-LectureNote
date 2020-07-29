"use strict";

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing

function printHello() {
  console.log("Hello");
}
printHello();

function print(message) {
  console.log(message);
}
print("Buy");
print(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "Coder";
}

const ellie = { name: "ellie" };
console.log(ellie);
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("How are you?");

//  4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
printAll("End", "of the", "Fucking World");

//  5. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// anonymous function
const print1 = function () {
  console.log("print");
};
print1();
const printAgain = print1;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 4));

// 7. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log("yes");
};

const printNo = function print1() {
  console.log("no");
};

randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simple Print");
};
console.clear();
// const simplePrint = () => console.log("simpel Print");

// Fun Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
      break;
    case "substract":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
    case "remainder":
      return a % b;
      break;
    default:
      throw Error("wrong command");
  }
}
const result11 = calculate("add", 1, 6);
console.log(result11);

const result12 = calculate("substract", 200, 100);
console.log(result12);

const result13 = calculate("remainder", 30, 4);
console.log(result13);

console.log(calculate("divide", 1, 2));
