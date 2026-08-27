// Task 9

let remaining = 5;

const countdown = setInterval(() => {
    console.log(`Remaining: ${remaining}`);

    remaining--;

    if (remaining === 0) {
        clearInterval(countdown);
    }
}, 1000);

setTimeout(() => {
    console.log("Time's up!");
}, 5000);

// Output:
// Remaining: 5
// Remaining: 4
// Remaining: 3
// Remaining: 2
// Remaining: 1
// Time's up!