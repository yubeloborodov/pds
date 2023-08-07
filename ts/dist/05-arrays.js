"use strict";
const numbers = [1, 2, 3, 4, 5];
const strs = [];
const strs2 = [];
strs.push("1");
const cars = [];
cars.push({ wheels: 2, brand: "Audi" });
const arrOfArr = [];
arrOfArr.push([]);
// arrOfArr.push(1);
function printArr(arr) {
    arr.forEach((el, index, array) => {
        console.log(el, index, array);
    });
}
