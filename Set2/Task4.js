// Task 4

const start = new Date();
const end = new Date(start.getTime() + 5000);

const secondsRemaining = Math.ceil((end - new Date()) / 1000);

console.log("Seconds remaining:", secondsRemaining);

// Output:
// Seconds remaining: 5
