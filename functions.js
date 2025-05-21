// function sayHi() {
//     console.log("Hello")
//     console.log("hi")
//     console.log("what's up guys")
// }

// sayHi()

// function add(a, b) {
//     return a + b 
// }

// console.log("Add function:", add(15, "20a"));    // 20 

// ====== FUNCTION DECLARATION ======

// sayMyName("Hamza")

// function sayMyName(name) {
//     console.log(`My name is ${name}`)
// }

// function multiply(a, b) {
//     console.log(a * b);

// }

// multiply(5, 5)

// function getMyAge(a) {
//     console.log(`Menim yasim ${a}-dur`);
// }

// getMyAge(29) // Menim yasim 29-dur 

// function square(a) {
//     console.log(a ** a); 
// }

// square()


// function showName(name, surname, age) {
//     let myName = "My name is:"
//     let mySurname = "Surname is:"
//     let myAge = "My age is:"

//     if (name && surname && age) return console.log(`${myName} ${name}, ${mySurname} ${surname}, ${myAge} ${age}`);

//     if (name && surname) return console.log(`${myName} ${name}, ${mySurname} ${surname}`);

//     if (name) return console.log(`${myName} ${name}`);

//     console.log('No user');

// }

// showName("Asif")


// function getSum(a, b) {
//     return a + b
// }

// function getSum(a, b, c) {
//     return a + b * c
// }

// console.log(getSum(4, 5, 9));



// const greet = function (name) {
//     console.log(`Hello ${name}`);
// }
// greet("Ali")

// const factorial = function fact(n) {
//     if (n <= 1) return 1;
//     return n * fact(n - 1)
// }
// factorial(5)

// const getSum = function (a, b) {
//     return (a + b)
// }

// console.log(getSum(5, 6))

// const isOdd = function (a, b) {
//     if (a % 2 === 0) a += 1
//     for (a; a <= b; a += 2) {
//         console.log(a);
//     }
// }

// isOdd(1, 10)


// const mult = (n, z) => n * z
// console.log(mult(5, 8))


// const greetMe = (name) => `Salam ${name} dostum. Necesen?`

// const varable = greetMe("Musviq")
// console.log(varable);


// const user = (name) => ({ name: name, age: 28 })
// console.log(user("Azer"));

const name = "Gulay"

// Arrow function this 
const user = {
    name: "Rasad",
    sayHi: function() {
        setTimeout(()=>{
            console.log(`Salam ${this.name}`); // this.name === name 
        }, 2000)
    }
}

user.sayHi()

// Arrow function this 
const user2 = {
    name: "Vidadi",
    sayHi: function() {
        setTimeout(function() {

            console.log(`Salam ${this.name}`); // this.name === name 
        }.bind(this), 3000)
    }
}

user2.sayHi()

const isPositive = (n) => n > 0 ? true : false

const result = isPositive(1)  // true ya false
console.log(result);

function getSome(){}