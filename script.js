//  ==== VAR ====

// console.log(greeting); // undefined

// greeting

// console.log(greeting); // undefined

// var greeting = "Hello, World!";
// // console.log(greeting); // "Hello, World!"

// var greeting = "Hello, Universe!";
// var greeting =76876687678678
// // console.log(greeting); // 76876687678678
// greeting = "necesiz";

// console.log(greeting); // "necesiz"

// ==== LET ====

// let  greeting = "Hello, World!";
// greeting = "Hello, Universe!";

// console.log(greeting);

// // ==== CONST ====
// const greet = "Hello, World!";
// // greet = "Hello, Universe!"; // TypeError: Assignment to constant variable.
// console.log(greet); // "Hello, World!"

// Declaration

// sayHi();

// function sayHi() {
//   console.log("Hello!");
// }

// Expression

// let a = null

// a = 5
// console.log(a);

// const arr = [1, 2, 3]
// // const arr = {
// //     sayHi: "hi"
// // }
// // const arr = "primitive"

// console.log(typeof arr);

// console.log(Array.isArray(arr));

// if (Array.isArray(arr)){
//     arr.push(4)
// }

// console.log(arr);

// console.log('errordan sonraki kod hissesi');

// function sayHi() {
//   console.log("hello");
// }
// sayHi();

// console.log(typeof sayHi);

// const greet = new Function("name", 'return "Salam, " + name');

// greet("Ali'); alert('Hacked');//");

// function greeting(name) {
//   alert(`${name} salam!`);
// }

// greeting("Ali");



// === null ===
// Number(false)
// 0
// Number(null)
// 0
// false == 0
// true
// null == 0
// false


const a  = "a".charCodeAt(0)
console.log(a);


let s = new String("string")


let oddCount  = 0;
for (let i = 10; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}

for (let i = 1; i <= 5; i++) {
    for (let a = 1; a <= 10; a++) {
        console.log(`${i} x ${a} = ${i*a}`)
    }
}


function toCamelCase(str) {
  return str.replace(/-([a-z])/g, ( match, letter) => letter.toUpperCase()); 
}

console.log(toCamelCase("my-variable-name"));


