// Task 1

console.log("Countdown App Ready");

// Output:
// Countdown App Ready


// Task 2

setTimeout(() => {
    console.log("Timer finished!");
}, 3000);

console.log("This message prints before the timer finishes.");

// Output:
// This message prints before the timer finishes.
// Timer finished!


// Task 3

let count = 5;

const timerCountdown = setInterval(() => {
    console.log(count);

    count--;

    if (count === 0) {
        clearInterval(timerCountdown);
        console.log("Countdown finished!");
    }
}, 1000);

// Output:
// 5
// 4
// 3
// 2
// 1
// Countdown finished!


// Task 4

const startTime = new Date();
const endTime = new Date(startTime.getTime() + 5000);

const secondsRemaining = Math.ceil(
    (endTime - new Date()) / 1000
);

console.log("Seconds remaining:", secondsRemaining);

// Output:
// Seconds remaining: 5


// Task 5

const seconds = Number(process.argv[2]);

if (Number.isFinite(seconds) && seconds > 0) {

    let remaining = seconds;

    console.log(`Countdown started for ${seconds} seconds.`);
    console.log('Type "cancel" and press Enter to stop.');

    process.stdin.setEncoding("utf8");

    const countdown = setInterval(() => {

        console.log(`${remaining} seconds remaining`);

        remaining--;

        if (remaining === 0) {
            clearInterval(countdown);
            console.log("Countdown finished!");
            process.stdin.pause();
        }

    }, 1000);

    process.stdin.on("data", (input) => {

        if (input.trim().toLowerCase() === "cancel") {
            clearInterval(countdown);
            console.log("Countdown cancelled!");
            process.stdin.pause();
        }

    });
}


// Task 6

// package.json: "dev": "nodemon countdown.js"


// Task 7

// Bug: if (remaining < 0)
// Fix: if (remaining === 0)


// Task 8

function checkTimeLeftCallback(seconds, callback) {

    setTimeout(() => {
        const remaining = Math.max(seconds - 1, 0);
        callback(remaining);
    }, 1000);

}

checkTimeLeftCallback(5, (remaining) => {
    console.log("Time remaining:", remaining);
});

// Output:
// Time remaining: 4


// Task 9

function startTask9Countdown(seconds) {

    let remaining = seconds;

    const interval = setInterval(() => {

        console.log(`Remaining: ${remaining}`);

        remaining--;

        if (remaining === 0) {
            clearInterval(interval);
        }

    }, 1000);

    setTimeout(() => {
        console.log("Time's up!");
    }, seconds * 1000);
}

startTask9Countdown(5);

// Output:
// Remaining: 5
// Remaining: 4
// Remaining: 3
// Remaining: 2
// Remaining: 1
// Time's up!


// Task 10

function checkTimeLeftPromise(seconds) {

    return new Promise((resolve, reject) => {

        if (seconds < 0) {
            reject(new Error("Duration cannot be negative."));
            return;
        }

        setTimeout(() => {
            const remaining = Math.max(seconds - 1, 0);
            resolve(remaining);
        }, 1000);

    });

}

checkTimeLeftPromise(5)
    .then((remaining) => {
        console.log("Time remaining:", remaining);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });

// Output:
// Time remaining: 4