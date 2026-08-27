// Task 5

const seconds = Number(process.argv[2]);

if (!Number.isFinite(seconds) || seconds <= 0) {
    console.log("Please provide a positive number of seconds.");
    process.exit(1);
}

let remaining = seconds;

console.log(`Countdown started for ${seconds} seconds.`);
console.log('Type "cancel" and press Enter to stop.');

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    if (input.trim().toLowerCase() === "cancel") {
        clearInterval(countdown);
        console.log("Countdown cancelled.");
        process.stdin.pause();
    }
});

const countdown = setInterval(() => {
    console.log(`${remaining} seconds remaining`);

    remaining--;

    if (remaining === 0) {
        clearInterval(countdown);
        console.log("Countdown finished!");
        process.stdin.pause();
    }
}, 1000);

// Output:
// Countdown started for 5 seconds.
// Type "cancel" and press Enter to stop.
// 5 seconds remaining
// 4 seconds remaining
// 3 seconds remaining
// 2 seconds remaining
// 1 seconds remaining
// Countdown finished!

// Cancellation output:
// Countdown cancelled.