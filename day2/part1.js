import fs from "fs";

const input = fs.readFileSync('input.txt', 'utf-8');
const reports = input.trim().split('\n').map(line => line.split(' ').map(Number));

function isSafeReport(levels) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < levels.length - 1; i++) {
        const diff = levels[i + 1] - levels[i];

        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }

        if (diff < 0) isIncreasing = false;
        if (diff > 0) isDecreasing = false;
    }

    return isIncreasing || isDecreasing;
}
const safeCounts = reports.filter(isSafeReport).length;

console.log(safeCounts);
