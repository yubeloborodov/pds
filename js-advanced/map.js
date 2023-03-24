"use strict";

const weatherMap = new Map();
console.log(weatherMap);

weatherMap.set("London", "10").set("Moscow", "4");

console.log(weatherMap);

console.log(weatherMap.get("Moscow"));
console.log(weatherMap.get("some key"));

console.log(weatherMap.has("Moscow"));
console.log(weatherMap.has("some key"));

console.log(weatherMap.delete("London"));

console.log(weatherMap);

weatherMap.clear();

console.log(weatherMap);

const arr = [1, 2, 3];

weatherMap
  .set("1", 5)
  .set("random Key", 12345)
  .set([1, 2, 3], "array")
  .set({ a: 1 }, { a: 2 })
  .set(arr, "array");

console.log(weatherMap);
console.log(weatherMap.size);

console.log(weatherMap.get[(1, 2, 3)]);
console.log(weatherMap.get[{ a: 1 }]);
console.log(weatherMap.get(arr));

// Быстрое создание Map

const fastMap = new Map([
  ["London", 10],
  ["Amsterdam", 20],
]);

console.log(fastMap);

const someObject = {
  london: 10,
  amsterdam: 7,
  paris: 14,
};

console.log(Object.entries(someObject));
const someMap = new Map(Object.entries(someObject));

console.log(someMap);

for (const [key, value] of someMap) {
  console.log(key, value);
}

console.log([...someMap]);
console.log(...someMap.keys());
console.log(...someMap.values());
