const desserts = [
    {
        id: 0,
        type: "cake",
        flavor: "chocolate",
        cost: 4.5,
    },
    {
        id: 1,
        type: "pie",
        flavor: "pumpkin",
        cost: 3.75,
    },
    {
        id: 2,
        type: "donut",
        flavor: "chocolate",
        cost: 1.5,
    },
];

console.log(desserts);

const chocDesserts = desserts.filter((each) => each.flavor == "chocolate");
console.log(chocDesserts);

const totalCost = desserts.reduce((a, c) => a + c.cost, 0);
console.log(totalCost);
