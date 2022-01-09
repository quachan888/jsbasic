const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                // If word match prefix of position i
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    // console.log(table);
    console.log(table[target.length]);
};

canConstruct("purple", ["purp", "p", "ur", "le", "purpl"]);
canConstruct("paurple", ["purp", "p", "ur", "le", "purpl"]);
canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]);
canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "f"]);
