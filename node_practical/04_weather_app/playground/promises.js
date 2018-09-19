var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if( typeof a === 'number' && typeof b === 'number' ){
            resolve(a+b);
        } else {
            reject('Parameter must be numbers.')
        }
    });
}

asyncAdd(5, 4).then((result) => {
    console.log(`The addition of two numbers are : ${result}`);
    return asyncAdd(result, 10);
}).then((res) => {
    console.log(`Now the result is: ${res}`);
}).catch((errorMessage) => {
    console.log(errorMessage);
})

// var testPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolved by promise.");
//         // reject('Rejected by Promises.');
//     }, 2000);
    
// });

// testPromise.then((message) => {
//     console.log(message);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });