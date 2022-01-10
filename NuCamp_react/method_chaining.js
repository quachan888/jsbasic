const states = ["Georgia", "Maine", "Montana"];

const mStates = states.filter((e) => e[0].toUpperCase() == "M");
console.log(states);
console.log(mStates);

const mStatesUp = states.filter((e) => e[0] == "M").map((e) => e.toUpperCase());
console.log(mStatesUp);
