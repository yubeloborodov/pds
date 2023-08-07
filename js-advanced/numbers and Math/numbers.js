console.log(10 === 10.0);

console.log(Number("123asd"));

console.log(Number.isNaN(Number("123asd")));
console.log(Number.isNaN(Number(10 / 0)));

console.log(Number.isFinite(Number("123asd")));
console.log(Number.isFinite(1));

console.log(Math.sqrt(36));
console.log(Math.sign(-100));
console.log(Math.sign(50));

console.log(Math.max(1, -2, 10, "0", 9));

const arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr));
