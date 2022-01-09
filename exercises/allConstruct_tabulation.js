const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);

    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombination = table[i].map((subArray) => [...subArray, word]);
                if (i + word.length <= target.length) table[i + word.length].push(...newCombination);
            }
        }
    }
    console.log("======================");
    // console.log(table);
    console.log("RESULT: ", table[target.length]);
    return table[target.length];
};

allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]);
allConstruct("purplae", ["purp", "p", "ur", "le", "purpl"]);
allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]);
allConstruct("eeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "f"]);
