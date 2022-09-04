
// basic types

// declear and assign value at same time won't work

// let myName = "Tanvir";
// myName = 28; // error cause 1st a amra string declear korechi but 2nd a amra number assign korechi

// but if we declear first then assign value it will work
let mySelf;
mySelf = "Tanvir";
mySelf = 28;

console.log(mySelf);


// function
// amra chaile variable r type declear korte pari ar jodi type declear na kori tahole variable k any type dhore nae.

function add(a: number, b: number) {
    return a + b;
}

console.log(add(2, 3)); // jehetu amra function er parameter gula number type declear korechi tai amra number type  value pass korte pari. but amra string type value pass korte pari na.


// array
// array r moddhe jodi amra shudhu number type value dei tahole porobortite onno type r value pass korte pari na. but jodi amra array r moddhe string, number, boolean type value dei tahole porobortite onno type r value pass korte pari.

// let arr = [1, 2, 3, 4, 5];

// arr.push("tanvir"); // error cause amra array r moddhe number type value declear korechi tai amra string type value pass korte pari na.

let mixedArr = [1, 2, 3, "tanvir", true];

mixedArr.push("Oyshi");
mixedArr.push(28);
mixedArr.push(false);

console.log(mixedArr); // ebar amra array r moddhe string, number, boolean type value pass korte pari.


// explicit type and union type

// explicit type. eta amra jodi kono variable/array r type declear korte chai tahole use korte pari.

let myName: string;
myName = "Tanvir Ahmed";
let yourName: string = "Oyshi";
let myAge: number = 28;
let yourAge: number;
yourAge = 27;


// array
let arr: number[] = [1, 2, 3, 4, 5]; // ekhane amra bole diychi j array r moddhe number type value thakbe. so amra shudhu number type value pass korte pari.

arr.push(6);
arr.push(7);
console.log(arr);

// object. amra kono variable k object type declear kore jekono type r value pass korte pari.

let person: object; // ekhane ami object type declear korechi.
person = {
    name: "Tanvir Ahmed",
    age: 28,
    isMarried: true,
};

console.log(person);


// union type. amra kono variable/array/object r moddhe jekono type r value pass korte pari. union type use korte chaile amra (|) use korte pari. union type r moddhe multiple type use korte pari.

let newArray: (string | number | boolean)[] = []; //ekhane eta union type. amra array r moddhe string, number, boolean type value pass korte pari. amra array empty rekhechi bojhar khetre.

newArray.push("Tanvir"); // string
newArray.push(28); // number
newArray.push(true); // boolean

console.log(newArray);


// any type.
// amra kono variable declear kore jodi type na bole dei tahole oita any type dhore nae. etake dynamic type o bolte pari. amra jekono type r value pass korte pari. same concept array/object er moddheo use korte pari.

let x; // ekhane amra type bole dei nai tai oita any type dhore nae.
let y: any; // ekhane amra type boleo any type krte pari.

x = 28;
x = "Tanvir";
y = true;
y = 28;

console.log(x);
console.log(y);






// function
// amra chaile function er parameter gula type declear korte pari. amra function er parameter gula type declear kore jekono type r value pass korte pari. ekhane function normal js r function er motoi kaj kore.

const sum = () => {
    return 2 + 3;
}

console.log("sum = ",sum());

// amra chaile Function type declear koreo krte pari.

let sum2: Function; // ekhane amra Function type declear korechi. so amra Function type r value pass korte pari. jokhoni amra evabe alada krbo tokhon let diye declear korte hobe. 

sum2 = () => {
    return 3 + 3;
}

console.log("sum2 = ",sum2());

// amra chaile function er parameter gula type declear korte pari.

const sum3 = (a: number, b: number) => {
    return a + b;
}

console.log("sum3 = ",sum3(2, 3));



// alias type.
// alias type r maddhome amra nijeder moto type declear korte pari. amra alias type use korte chaile amra type keyword use korte pari.

const tanvir = (
    name: string,
    age: number | string,
    isMarried: boolean
) => {
    console.log(`My name is ${name}. I am ${age} years old. Am I married? ${isMarried}`); // ekhane amra function r parameter gula type declear korechi. so amra jekono type r value pass korte pari. but jinish ta onk confusing so amra alias type use korte pari.
}


// amra alias type use korte chaile amra type keyword use korte pari.
type StringOrNumber = string | number;
type Human = { name: string, age: StringOrNumber, isMarried: boolean };

const oyshi = (id: StringOrNumber, human: Human) => {
    console.log(`My id is ${id}. My name is ${human.name}. I am ${human.age} years old. Am I married? ${human.isMarried}`);
};

oyshi(2, { name: "Raisha Farzana Oyshi", age: 25, isMarried: true });