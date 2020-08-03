"use strict";
// Promise is a Javascript object for asynchronous operation
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs autoamtilcally
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doning something...");
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no netwrok"));
  }, 2000);
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 2000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => `${egg} => 🍳`, 1000);
  });

getHen()
  .then(getEgg) // .then(egg => getEgg(egg))
  .then(cook)
  .then(console.log); // .then(meal => console.log(meal))
