// UnCaught Exception: an "uncaught exception" refers to an error that occurs during the execution of your code 
// but isn't properly handled using try-catch blocks or error handling mechanisms.

// Impace of Uncaught Exception: Node.js will terminate the process, which means your application will abruptly stop running.
// This can leave your application in an inconsistent state and potentially result in data loss or corruption.



process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform cleanup, logging, or other necessary actions here
});

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  } else if (b === 1) {
    throw new Error("Division by 1 is not allowed");
  }
  throw new Error("Division by 1 is not allowed");
  return a / b;
}

try {
  const result = divide(10, 5);
  console.log("Result:", result);
} catch (error) {
  console.error("Caught an error:", error.message);
}