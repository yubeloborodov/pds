function sum(a: number, b: number): number {
  return a + b;
}
sum(1, 2);

const sum2 = (a: number, b: number): number => a + b;

function log(name: string, userId?: string): void {
  console.log("Hello", name, "with Id", userId || "");
}

log("Andrew");

function crash(): never {
  throw new Error("crash");
}

function average(...nums: number[]): number {
  const s = nums.reduce((cur, total) => cur + total, 0);
  return s / nums.length;
}
