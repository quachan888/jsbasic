// SORT
const arr1 = [3, 4, 1, 6, 4];
// console.log(arr1);
// console.log(arr1.sort());

// MAP
console.log("===== MAP =====");
const arr2 = arr1.map((each) => each * 2);
// console.log(arr2);

const arr3 = [];
arr1.forEach((n, i) => (arr3[i] = n * 2));
// console.log(arr3);

// FILTER
console.log("===== FILTER =====");
const filter1 = [1, 3, 7, 4, 9, 15];
const filter2 = filter1.filter((n) => n < 7);
// console.log(filter1);
// console.log(filter2);

console.log("===== FILTER 2 =====");
const animals = ["bear", "panda", "penguin", "osprey"];
const filteredAnimals = animals.filter((animal) => animal.includes("p"));
// console.log(animals);
// console.log(filteredAnimals);

// REDUCE
console.log("===== REDUCE =====");
const reduce1 = [3, 1, 2, 4];
const reducedValue = reduce1.reduce((a, c) => a + c);
console.log(reduce1);
console.log(reducedValue);
