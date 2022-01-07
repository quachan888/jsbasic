class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    sleep() {
        console.log(`The ${this.color} ${this.element} ${this.type} is sleeping.`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
// Challenge 1: write the code that will call the roar() and fly() methods on the woodDragon object.
woodDragon.fly();
woodDragon.roar();

// Challenge 2
woodDragon.sleep();

// Challenge 3
const werewolf1 = new Werewolf("werewolf", "white");
werewolf1.howl();

// Challenge 4
class superMan extends Monster {
    constructor(type, color, skill) {
        super(type, color);
        this.skill = skill;
    }
    action() {
        // console.log(this.type);
        // console.log(this.color);
        // console.log(this.skill);
        console.log(`The ${this.color} ${this.type} is executing skill: ${this.skill}`);
    }
}

const ironMan = new superMan("ironMan", "blue", "Kill All Cockroaches");
ironMan.action();
