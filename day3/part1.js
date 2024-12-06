import fs from "fs";

let input = fs.readFileSync("input.txt", "utf-8");

var regex = /mul\(\d+,\d+\)/g;
var myArray = input.match(regex); 

console.log("Matched functions:", myArray);

function mul(a, b) {
    return a * b;
}

const product = myArray.reduce((total, item) => {
    const match = item.match(/mul\((\d+),(\d+)\)/); 
    if (match) {
        const a = parseInt(match[1], 10);
        const b = parseInt(match[2], 10);
        return total + mul(a, b); 
    }
    return total; 
}, 0); 

console.log("Total product sum:", product);
