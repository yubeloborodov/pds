"use strict";
const map = new WeakMap();

let a = { a: "1" };
let b = { b: "2" };

map.set(a, "testA");
map.set(b, "testB");

console.log(map);
a = null;
console.log(map);

setTimeout(() => {
  console.log(map);
}, 1000);

let cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 1; // Hard code
    cache.set(obj, res);
  }

  return cache.get(obj);
}

const res = getValue(b);
console.log(res);
