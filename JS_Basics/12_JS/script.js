import { log } from "console";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

console.log("Enter your name");

let name = await readLineAsync();
console.log("Your name is " + name);

console.log("Enter your age");

let age = await readLineAsync();
console.log("You are " + age + " years old!");

readline.close();