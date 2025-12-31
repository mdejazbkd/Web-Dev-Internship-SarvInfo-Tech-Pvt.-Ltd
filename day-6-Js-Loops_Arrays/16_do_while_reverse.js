let num = 321;
let reverse = 0;

do {
  reverse = reverse * 10 + (num % 10);
  num = Math.floor(num / 10);
} while (num > 0);

console.log(reverse);
