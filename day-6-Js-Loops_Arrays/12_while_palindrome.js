let num = 121;
let temp = num;
let reverse = 0;

while (temp > 0) {
  reverse = reverse * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}

console.log(num === reverse ? "Palindrome" : "Not Palindrome");
