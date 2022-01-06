// console.log(Math.PI);
// console.log(Math.round(Math.PI));
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.001));
// console.log(Math.floor(4.999));
// console.log(Math.random());

// console.log(Math.floor(Math.random() * 10));

var random = Math.random() * 10;
// console.log("RANDOM: " + random + ". Ceil: " + Math.ceil(random));

var bonus = ["$1", "$2", "$5", "$10", "$50", "$100"];
var getBonus = Math.floor(Math.random() * 6);

var tile = Math.floor(Math.random() * 100);
if (tile <= 10) {
    console.log("WINNER: " + bonus[getBonus]);
} else {
    console.log("Chuc may man lan sau! " + tile);
}

// console.log("Your bonus this year is: " + bonus[getBonus]);

console.log(Math.min(-45, 4, 10, 20));
console.log(Math.max(-45, 4, 100, 20));
