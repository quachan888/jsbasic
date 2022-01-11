function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;

    return sum;
}
console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 3, 4));

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(...arr, 6);
