import fs from "fs";
const input = fs.readFileSync("input.txt","utf-8");

const splitArray = input.split('\r\n');

const arr1 = splitArray.map((n)=>n.split(' ')[0])
const arr2 = splitArray.map((n)=>n.split(' ')[3])
let sum = 0;
for(let i = 0; i < arr1.length; i++){
    let repeatedCount = arr2.filter(item => item === arr1[i]).length
    let mult = arr1[i] * repeatedCount;
    sum = sum + mult
}

console.log(sum)
