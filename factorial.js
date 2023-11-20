//program to find the factorial of a number

let number = 3;

const factorial = (number) =>{
if(number<2) return number;
else return number*factorial(number-1)
}

console.log(factorial(number));
console.log(factorial(8));
console.log(factorial(5));
console.log(factorial(6));

console.log(factorial(7));