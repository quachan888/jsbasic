// Reduce: gom lại, ví dụ tính tổng số coin

// var courses = [
//     { id: 1, name: "Javascript", coin: 100 },
//     { id: 2, name: "PHP", coin: 200 },
//     { id: 3, name: "React", coin: 500 },
//     { id: 4, name: "Angular", coin: 500 },
// ];

// console.log(courses);

// Easy way
// var totalCoin = 0;
// for (each of courses) {
//     totalCoin += each.coin;
// }
// console.log(totalCoin);

// Array Method way, simple
// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     console.table({
//         Time: i,
//         Accumulator: accumulator,
//         currentValue: currentValue.coin,
//     });

//     accumulator += currentValue.coin;
//     return accumulator + currentValue.coin;
// }

// var totalCoin1 = courses.reduce(coinHandler, 0);
// console.log("Final Coin: " + totalCoin1);

// Arrow function inside reduce
// var totalCoin2 = courses.reduce((acc, each) => acc + each.coin, 0);
// console.log(totalCoin2);

// EXERCISES 1
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
// console.log(sum([1, 2, 0, 6]));

// EXERCISES 2
// function sumNumbers(inputs) {
//     var sum = 0;
//     inputs.reduce(function (a, b) {
//         // console.log("--- START EACH --- ");
//         // console.log("A = ", a, ". B = ", b, ". Sum = ", sum);
//         if (typeof b === "number" && !isNaN(b)) {
//             // console.log("INSIDE IF A = ", a, ". B = ", b, ". SUM = ", sum);
//             // console.warn("CONG EM NAY VAO: ", b);
//             sum += b;
//             // console.log("INSIDE IF A = ", a, ". B = ", b, ". SUM = ", sum);
//         }
//         // console.log("--- END EACH --- ");
//         // console.log(" ");
//         // return sum;
//     }, 0);
//     return sum;
// }

function sumNumbers(inputs) {
    var total = 0;
    inputs.reduce(function (a, b) {
        if (typeof b === "number" && !isNaN(b)) {
            total += b;
        }
    }, 0);
    return total;
}

// function sumNumbers(inputs) {
//     var total = 0;
//     for (each of inputs) {
//         // console.log(each);
//         // if (typeof each == "number" && each != undefined && each != NaN) {
//         if (typeof each === "number" && !isNaN(each)) {
//             // console.log("PASS: ", each);
//             total += each;
//         }
//     }
//     // console.log(total);
//     return total;
// }

// console.log(sumNumbers([{}, 1, [], 2, "hi", 0, 6]));
// console.log(sumNumbers([1, 2, function () {}, NaN]));
// console.log(sumNumbers([1, 2, "hi", 0, 6]));
// console.log(sumNumbers([1, 2, "hi", 3]));

// Exercises 3
function getTotalAmount(inputs) {
    return inputs.reduce((a, b) => a + b.amount, 0);
}
var test3 = [
    { name: "Giày", amount: 100 },
    { name: "Áo phao", amount: 110 },
    { name: "Smart phone", amount: 400 },
];

// console.log(test3);
// console.log(getTotalAmount(test3));

// Exercies 7
// Thêm phương thức reduce2 cho kiểu mảng, logic hoạt động tương tự reduce gốc.
// INPUT: [1, 2, 3, 4].reduce2(function reducer(total, number) { return total + number })
// Expect: 10

Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i++;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce2((total, number) => {
    return total + number;
}, 10);

console.log(result);
