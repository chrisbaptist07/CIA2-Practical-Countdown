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