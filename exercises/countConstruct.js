const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
            console.log(`Checking ${target}. Count: ${numWaysForRest}`);
        }
    }

    memo[target] = totalCount;
    return memo[target];
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(countConstruct("nterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "f"]));
