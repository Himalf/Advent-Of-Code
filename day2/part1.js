import fs from "fs";
const input = fs.readFileSync('input.txt','utf-8')
// console.log(input)

const splitted = input.split('\r\n').slice(0,2);
const arr1 =  splitted.map((n)=>n);
// console.log(arr1)
// const arrayPart = arr1.slice(0,6)
// console.log(arrayPart)

for(var i=0;i<arr1.length;i++){
    var arrayParts = arr1[i].split(' ')
    console.log(arrayParts)
}
for(var j=0;j<arr1.length;j++){
    var isIncreasing = 
    console.log(isIncreasing)
}