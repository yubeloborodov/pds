const numbers = [1, 2, 3, 4, 5];

const strs: string[] = [];
const strs2: Array<string> = [];

strs.push("1");

interface Moto {
  wheels: number;
  brand: string;
}

const cars: Moto[] = [];
cars.push({ wheels: 2, brand: "Audi" });

const arrOfArr: string[][] = [];
arrOfArr.push([]);
// arrOfArr.push(1);

function printArr(arr: unknown[]): void {
  arr.forEach((el, index, array) => {
    console.log(el, index, array);
  });
}
