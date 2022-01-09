// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// };

// const n = 40;

// for (i = 1; i <= n; i++) {
//     // console.log("Current: fib(", i, ") => ", fib(i));
// }

// const fib2 = (n) => {
//     let r = [];
//     for (i = 0; i < n - 1; i++) {
//         if (i <= 1) {
//             r.push(i + 1);
//         } else {
//             r.push(r[i - 1] + r[i - 2]);
//         }
//     }
//     // console.log(r);
//     return r[n - 2];
// };

// console.log("KQ FIB2: ", fib2(n));
// // console.log("KQ FIB1: ", fib(n));

const fib = (n, memo = {}) => {
    // console.log(n, memo);
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.log(fib(3));
console.log(fib(5));
console.log(fib(7));
console.log(fib(10));
console.log(fib(50));

// for (let i = 1; i <= 20; i++) console.log(fib(i));
