const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i + num <= targetSum) table[i + num] = [...table[i], num];
            }
        }
    }

    // console.log(table);
    console.log("CHECKING ", targetSum, " with ", numbers);
    console.log("RESULT ", table[targetSum]);
    console.log("================");
    return table[targetSum];
};

howSum(7, [5, 3, 4, 7]);
howSum(7, [2, 3]);
howSum(7, [2, 4]);
howSum(8, [2, 3, 5]);
howSum(300, [7, 14]);
