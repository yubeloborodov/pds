const allCurrencies = [
  { name: "USD", mult: 1 },
  { name: "RUB", mult: 1 / 70 },
  { name: "EUR", mult: 1.1 },
];

function conver(sum, initilCurrency, convertCurrency) {
  const initial = allCurrencies.find((c) => c.name === initilCurrency);
  if (!initial) return null;

  const convert = allCurrencies.find((c) => c.name === convertCurrency);
  if (!convert) return null;

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: convert.name,
  }).format((sum * initial.mult) / convert.mult);
}

console.log(conver(100, "USD", "RUB"));
console.log(conver(100, "RUB", "USD"));
