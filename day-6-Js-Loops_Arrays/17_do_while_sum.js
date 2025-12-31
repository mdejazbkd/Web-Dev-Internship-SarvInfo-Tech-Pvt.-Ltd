let num = 123;
let sum = 0;

do {
  sum += num % 10;
  num = Math.floor(num / 10);
} while (num > 0);

console.log(sum);
