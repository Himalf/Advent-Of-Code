import fs from "fs";

let input = fs.readFileSync("input.txt", "utf-8");
let reports = input.trim().split("\n").map(n => n.split(' ').map(Number));

let safeCount = 0;

for (let report of reports) {
    let isSafe = true;
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < report.length - 1; i++) {
        const diff = report[i + 1] - report[i];
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            isSafe = false;
            break;
        }
        if (diff < 0) isIncreasing = false;
        if (diff > 0) isDecreasing = false;
    }

    if (isSafe && (isIncreasing || isDecreasing)) {
        safeCount++;
        // break
        continue;
    }
console.log("dimag kharab")
    for (let j = 0; j < report.length; j++) {
        let tempReport = report.slice(0, j).concat(report.slice(j + 1));
        let isTempSafe = true;
        let isTempIncreasing = true;
        let isTempDecreasing = true;

        for (let k = 0; k < tempReport.length - 1; k++) {
            const diff = tempReport[k + 1] - tempReport[k];
            if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
                isTempSafe = false;
                break;
            }
            if (diff < 0) isTempIncreasing = false;   
            if (diff > 0) isTempDecreasing = false;
        }

        if (isTempSafe && (isTempIncreasing || isTempDecreasing)) {
            safeCount++;
            // continue; 
            break; 
        }
    }
}

console.log(safeCount);
