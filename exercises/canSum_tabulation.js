const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    // console.log(table);
    console.log("Checking: ", targetSum, " can SUM with ", numbers, " Result: ", table[targetSum]);
    return table[targetSum];
};

canSum(7, [5, 3, 4, 7]);
canSum(7, [2, 3]);
canSum(7, [2, 4]);
canSum(8, [2, 3, 5]);
canSum(300, [7, 14]);
