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

function multiplyNumbers(inputs) {
    return inputs.reduce((total, each) => total * each, 1);
}

var testMul = [10, 20, 30];

console.log(multiplyNumbers(testMul));
