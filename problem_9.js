// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120





// 1!= 1*1=1;
// 2!= 1*2;

// 3!= 2!*3;
// 3! =2!*3
// 4!= 1*2*3*4;
// 4! = 3! *4

// 5!= 1*2*3*4*5;
// 5! =  4! *5= 120






function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));