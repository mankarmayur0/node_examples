var square = (x) => {
    var result = x*x;
    return result;
}
console.log(square(5));


var user = {
    name: "Mayur",
    sayHi: () => {
        console.log(arguments);   // arrow function dont have access to the arguments      
        console.log(`Hi, My Name is ${this.name}`);  // Arrow function dont have access to this     
    },
    sayHiAlternative () {
        console.log(arguments);        // normal function have access to the arguments 
        console.log(`Hi, My name is ${this.name}`);  // Normal function have access to this
    }
}
console.log('Calling SayHi function');
user.sayHi();

console.log('Calling SayHiAlternative Function');
user.sayHiAlternative(1,2,3)
