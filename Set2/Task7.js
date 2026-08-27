// Task 7

let remaining = 5;

const countdown = setInterval(() => {
    console.log(remaining);

    remaining--;

    if (remaining === 0) {
        clearInterval(countdown);
        console.log("Countdown finished!");
    }
}, 1000);

// Bug found and fixed:
// The countdown did not stop because the condition used < 0.
// The debugger showed that remaining reached 0, but the condition was false.
// I changed the condition to === 0 so the interval stops at zero.

// Output:
// 5
// 4
// 3
// 2
// 1
// Countdown finished!