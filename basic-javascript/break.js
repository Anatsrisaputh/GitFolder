let sum = 0;
while (true) {
  let value = prompt(Number("Insert number",''));
  if (!value) break;
  sum += value;
}
console.log('Sum' + sum);