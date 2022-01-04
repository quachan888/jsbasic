// 1 - white rabbit
const rabbit = {
    color: "white",
    checkWatch() {
        console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
    },
};
rabbit.checkWatch();

// 2 - spaceship
const spaceship = {
    name: "Enterprise",
    launch() {
        console.log(`You have launched the spaceship ${this.name}!`);
    },
    // your code here - uncomment the spaceship.launch() line below when done
};
spaceship.launch();

// 3 - shopping cart
const cart = {
    contents: [],
    addItem(item) {
        this.contents.push(item);
    },

    removeItem(item) {
        var loc = this.contents.indexOf(item);
        if (loc == -1) {
            console.log(`Item ${item} is not in the cart.`);
        } else {
            this.contents.splice(loc, 1);
            console.log(`Item ${item} removed. New cart: ${this.contents}`);
        }
    },
    // your code here - uncomment the two lines below this object when done
};
cart.addItem("laptop");
cart.addItem("iPhone");
cart.addItem("Macbook");
console.log("--------");
console.log("The cart contains:", cart.contents);
cart.removeItem("iPhone");
cart.removeItem("TV");
console.log("--------");

// 4 - lever
// your code here - uncomment the line below when done
const lever = {
    stamp: "ACME",
    pull() {
        console.log(`An anvil stamped ${this.stamp} drops on your head.`);
    },
};
lever.pull();

// 5 - Your object here
const guest = {
    firstName: "An",
    lastName: "Quach",
    fullName() {
        console.log(`Full name: ${this.firstName}, ${this.lastName}`);
    },
    isVIP(vip) {
        if (vip) {
            console.log(`Welcome back ${this.firstName}! You're our VIP customer!`);
        } else {
            console.log(`Welcome back ${this.firstName}! You're our loyal customer!`);
        }
    },
};
guest.fullName();
guest.isVIP(1);
guest.isVIP(0);
