var pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels",
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    },
];

var rebels = pilots.filter((e) => e.faction === "Rebels");
// console.log(rebels);

var empire = pilots.filter((e) => e.faction === "Empire");
// console.log(empire);

var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

// Our objective: get the total score of force users only.
var forceTotalScore = personnel
    .filter((e) => e.isForceUser)
    .map((e) => e.pilotingScore + e.shootingScore)
    .reduce((a, c) => a + c, 0);

// console.log(forceTotalScore);

let data = [
    {
        country: "China",
        pop: 1409517397,
    },
    {
        country: "India",
        pop: 1339180127,
    },
    {
        country: "USA",
        pop: 324459463,
    },
    {
        country: "Indonesia",
        pop: 263991379,
    },
];

// Using the reduce() method, how would you sum up the population of every country except China?
let totalPopNotChina = data.filter((e) => e.country !== "China").reduce((a, c) => a + c.pop, 0);
console.log(totalPopNotChina);

let totalPopNotChina2 = data.reduce((a, c) => {
    return c.country === "China" ? a : a + c.pop;
}, 0);
console.log(totalPopNotChina2);
