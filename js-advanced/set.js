const flights = ["Russia", "USA", "London", "USA"];

const setFlights = new Set(flights);

console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has("Russia"));

setFlights.add("Paris");
setFlights.delete("London");

console.log(setFlights);

for (const flight of setFlights) {
  console.log(flight);
}

console.log([...setFlights]);

const setObj = new Set([{ a: 1 }, { b: 2 }, { c: 3 }, { b: 2 }]);
