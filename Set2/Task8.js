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