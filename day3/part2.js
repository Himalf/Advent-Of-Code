import fs from "fs";
let input = fs.readFileSync("input.txt","utf-8");
console.log(input)

let newInput = input.split("\r\n").splice(1,2);
console.log(newInput)
