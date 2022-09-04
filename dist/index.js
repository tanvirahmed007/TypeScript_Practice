"use strict";
let mySelf;
mySelf = "Tanvir";
mySelf = 28;
console.log(mySelf);
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
let mixedArr = [1, 2, 3, "tanvir", true];
mixedArr.push("Oyshi");
mixedArr.push(28);
mixedArr.push(false);
console.log(mixedArr);
let myName;
myName = "Tanvir Ahmed";
let yourName = "Oyshi";
let myAge = 28;
let yourAge;
yourAge = 27;
let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.push(7);
console.log(arr);
let person;
person = {
    name: "Tanvir Ahmed",
    age: 28,
    isMarried: true,
};
console.log(person);
let newArray = [];
newArray.push("Tanvir");
newArray.push(28);
newArray.push(true);
console.log(newArray);
let x;
let y;
x = 28;
x = "Tanvir";
y = true;
y = 28;
console.log(x);
console.log(y);
const sum = () => {
    return 2 + 3;
};
console.log("sum = ", sum());
let sum2;
sum2 = () => {
    return 3 + 3;
};
console.log("sum2 = ", sum2());
const sum3 = (a, b) => {
    return a + b;
};
console.log("sum3 = ", sum3(2, 3));
const tanvir = (name, age, isMarried) => {
    console.log(`My name is ${name}. I am ${age} years old. Am I married? ${isMarried}`);
};
const oyshi = (id, human) => {
    console.log(`My id is ${id}. My name is ${human.name}. I am ${human.age} years old. Am I married? ${human.isMarried}`);
};
oyshi(2, { name: "Raisha Farzana Oyshi", age: 25, isMarried: true });
class Player {
    constructor(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    play() {
        console.log(`${this.name} is playing.`);
    }
}
const tanvirAhmed = new Player("Tanvir Ahmed", 28, true);
const raishaOyshi = new Player("Raisha Farzana Oyshi", 25, true);
console.log(tanvirAhmed);
console.log(raishaOyshi);
const players = [];
players.push(tanvirAhmed);
players.push(raishaOyshi);
console.log(players);
//# sourceMappingURL=index.js.map