// Task 3

// Methods used: setInterval(), clearInterval()

let count = 5;

const countdown = setInterval(() => {
    console.log(count);

    count--;

    if (count === 0) {
        clearInterval(countdown);
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