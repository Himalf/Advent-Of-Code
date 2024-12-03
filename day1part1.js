

import fs from "fs"

const input = fs.readFileSync("input.txt","utf-8");
// console.log(input)

const splitArray = input.split("\r\n");
const arr1 = splitArray.map((n)=>n.split(' ')[0]);
const arr2 = splitArray.map((n)=>n.split(' ')[3]);
arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);
var sum=0;
for(var i=0;i<arr1.length;i++){
var diff = Math.abs(arr2[i]-arr1[i]);
sum = sum+diff;

}
console.log(sum)