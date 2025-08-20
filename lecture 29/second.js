// using commonjs for fs/promise

const fs = require("fs/promises");
fs.appendFile("my.txt", "/n/n/n/n/n hello");


// using ES6/Ecmmascript for fs/promise
// write type: "module" in package.json to run the below code

// import fs from "fs/promises";

// let a = await fs.readFile("my.txt");
// console.log(a.toString())

// fs.appendFile("my.txt", "\n\n\n\nhello");