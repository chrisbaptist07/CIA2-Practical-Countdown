// Task 2

// V8 executes JavaScript, while libuv handles asynchronous tasks like timers.
// This allows Node.js to continue executing code while the timer runs.

setTimeout(() => {
    console.log("Timer finished!");
}, 3000);

console.log("This message prints before the timer finishes.");

// Output:
// This message prints before the timer finishes.
// Timer finished!