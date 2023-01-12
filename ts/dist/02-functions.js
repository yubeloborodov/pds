"use strict";
function sum(a, b) {
    return a + b;
}
sum(1, 2);
const sum2 = (a, b) => a + b;
function log(name, userId) {
    console.log("Hello", name, "with Id", userId || "");
}
log("Andrew");
function crash() {
    throw new Error("crash");
}
function average(...nums) {
    const s = nums.reduce((cur, total) => cur + total, 0);
    return s / nums.length;
}
