"use strict";
function sum(a, b) {
    return a + b;
}
sum(2, 5);
function log(name, userId) {
    console.log('Hello', name);
}
console.log('Yury', 213);
function crash() {
    throw new Error('crash');
}
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
const sum2 = (a, b) => a + b;
