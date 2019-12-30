function add(firstNumber, secondNumber, callback) {
    setTimeout(() => {
        const sum = firstNumber + secondNumber;
        callback(sum);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum);
});