const test = ["7", "-10", "13", "8", "4", "-7"];

/**
 * From a collection of numbers inside an array, returns the closest value to zero.
 */
// function closestToZero(numbers) {
//     if (numbers.length == 0) {
//         return 0;
//     }

//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (result === 0) {
//             result = numbers[i];
//         } else if (numbers[i] > 0 && numbers[i] < Math.abs(result)) {
//             result = numbers[i];
//         } else if (numbers[i] < 0 && -numbers[i] < Math.abs(result)) {
//             result = numbers[i];
//         }
//     }
//     return result;
// }

// let items = [7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7];
// // Result: -1.7
// console.log("Result: " + closestToZero(items));

// items = [5, 6, 7, 9, 2, -2];
// // Result: 2
// console.log("Result: " + closestToZero(items));

// items = [];
// // Result: 0
// console.log("Result: " + closestToZero(items));

// console.log(closestToZero(test));

// Try again

// const inputs = [24, 4, 5, -2, 3, 1];
// const inputs = [24];
const inputs = [];
// const inputs = [-4];

let r = 0;
var inputsLen = inputs.length;

if (inputsLen == 0) {
    console.log("Nothing: ", 0);
} else {
    for (let i = 0; i < inputsLen; i++) {
        let c = inputs[i];
        console.log("Checking: ", c);

        if (r == 0) {
            r = c;
        } else if (r > 0 && c < Math.abs(r)) {
            console.log("Duong: ", r, c);
            r = c;
        } else if (r < 0 && -c < Math.abs(r)) {
            console.log("Am: ", r, c);
            r = c;
        }
    }
    console.log(r);
}
