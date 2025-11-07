// Get the argument and convert to integer
const arg = parseInt(process.argv[2]);

// Define the recursive factorial function
function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Print the result
console.log(factorial(arg));
