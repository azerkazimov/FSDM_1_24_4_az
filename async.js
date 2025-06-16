// function first() {
//   console.log("Birinci funksiya");
//   second();
// }

// function second() {
//   console.log("İkinci funksiya");
// }

// // Web APIs (setTimeout, fetch, DOM events)

// const asyncfunc = () =>
//   setTimeout(() => {
//     console.log("Web API-dən");
//   }, 0);

// asyncfunc();

// // Callback Queue (Callback növbəsi)
// first(); // Sinxron
// // Sonra setTimeout icra olunacaq

// console.log("1 - Sinxron kod");

// // Macrotask (setTimeout)
// setTimeout(() => console.log("2 - Macrotask"), 0);

// // Microtask (Promise)
// Promise.resolve().then(() => console.log("3 - Microtask"));

// console.log("4 - Sinxron kod");

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = Math.random() > 0.5;
//         if (success) {
//             resolve("Məlumatlar uğurla alındı!");
//         } else {
//             reject("Məlumatların alınmasında xəta");
//         }
//     }, 2000);
// });

