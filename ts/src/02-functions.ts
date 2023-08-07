function sum(a: number, b: number) {
  return a + b;
}

sum(2, 5);

function log(name: string, userId?: string):void {
  console.log('Hello', name);
}

console.log('Yury', 213);


function crash():never {
  throw new Error('crash')
}

function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0)
  return sum / nums.length;
}

const sum2 = (a:number, b:number) => a + b;
