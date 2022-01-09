const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    console.log(table[target.length]);
};

countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]);
countConstruct("paurple", ["purp", "p", "ur", "le", "purpl"]);
countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]);
countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaeeef", ["e", "ee", "eee", "eeee", "eeeee", "f"]);
