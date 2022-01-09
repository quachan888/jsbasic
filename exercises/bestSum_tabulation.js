const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num];
                // if current combination is shorter, then use it
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }
    console.log("=============");
    console.log("Checking: ", targetSum, " with ", numbers);
    console.log("Best sum: ", table[targetSum]);
};

bestSum(7, [5, 3, 4, 7]);
bestSum(7, [2, 3]);
bestSum(7, [2, 4]);
bestSum(8, [2, 3, 5]);
bestSum(100, [7, 14, 25, 1, 5]);
