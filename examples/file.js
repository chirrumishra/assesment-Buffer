const fs = require("fs");

// using the readFileSync() function
// and passing the path to the file
const buffer = fs.readFileSync("sample.txt");

console.log(buffer);

// console.log(buffer.toString());
