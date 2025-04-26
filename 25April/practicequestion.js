// Factorial of any number
// let n = parseInt(prompt("Enter a number:"));
// let fact = 1;
// for(let i = 1; i<=n; i++){
//     fact *= i;
// }
// console.log("Factorial of",n,"is",fact);


// Prime or Not
let n = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (n <= 1) {
  isPrime = false;
}

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(n + " is a Prime Number");
} else {
  console.log(n + " is NOT a Prime Number");
}
