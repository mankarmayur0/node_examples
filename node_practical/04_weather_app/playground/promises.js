var testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved by promise.");
        // reject('Rejected by Promises.');
    }, 2000);
    
});

testPromise.then((message) => {
    console.log(message);
}, (errorMessage) => {
    console.log(errorMessage);
});