////////////////
// Preliminaries
////////////////

// 1. Write an if statement that prints "is greater than" if 5 is greater than 3
//
// let a = 5;
// let b = 3;
// if (a > b) {
//     console.log(`${a} is greater than ${b}`);
// }

// 2. Write an if statement that prints "is the length" if the length of "cat" is 3
//
// let string = 'cat';
// if (string.length === 3) {
//     console.log(`${string.length} is the length`);
// }

// 3. Write an if/else statement that checks if "cat" is equal to "dog" 
//    and prints "not the same" when they are not equal.
//
// let animalOne = 'cat'
// let animalTwo = 'dog'
// if (animalOne !== animalTwo) {
//     console.log(`${animalOne} and ${animalTwo} are not the same`);
// } else {
//     console.log(`${animalOne} and ${animalTwo} are the same`)
// }


///////////////
// Bronze Medal
///////////////

// 1. Using the below object `person`, write an if statement that prints
//    <theNameOfThePersonInObject> is allowed to go to the movie 
//    if they are old enough (18 or older), and the opposite 
//    if they are not older than 18.
//
// var person = {
//     name: 'Bobby',
//     age: 12
// }

// if (person.age >= 18) {
//     console.log(`${person.name} can go to the movie.`);
// } else {
//     console.log(`${person.name} cannot go to the movie.`);
// }

// 2. Using that same object, only allow them into the movie 
//    if their name starts with "B"
//
// if (person.name[0] === 'B') {
//     console.log(`${person.name} can go to the movie.`);
// } else {
//     console.log(`${person.name} cannot go to the movie.`);
// }

// 3. Using that same object, only allow them into the movie 
//    if their name starts with "B" and they are older than 18.
//
// if (person.name[0] === 'B' && person.age > 18) {
//     console.log(`${person.name} can go to the movie.`)
// } else {
//     console.log(`${person.name} cannot go to the movie.`)
// }


///////////////
// Silver Medal
///////////////

// 1. Write an if/else if/else statement that 
//    prints "strict" if 1 strictly equals "1", 
//    prints "loose" or "abstract" if 1 equals "1" without type checking, and
//    prints "not equal at all" if it doesn't print the other stuff.
//
// let a = 1;
// let b = '1';
// let c = 2;
// if (a === a && b === c) {
//     console.log('strict');
// } else if (a == c) {
//     console.log('loose or abstract');
// } else {
//     console.log('not equal at all');
// }

// 2. Write an if statement that prints "yes" 
//    if 1 is less than or equal to 2 AND(&&) 2 is equal to 4
//
// let a = 1;
// let b = 2;
// let c = 4;
// if (a <= b && b == c) {
//     console.log('yes');
// }


/////////////
// Gold Medal
/////////////
// Gold may take some googling!
// https://webbjocke.com/javascript-check-data-types/

// 1. Write an if statement that checks to see if "dog" is a string
//
let a = 'dog';
if (typeof a === 'string' || a instanceof String) {
    console.log(`${a} is a string`);
}

// 2. Write an if statement that checks to see if "true" is a boolean
//
if (typeof true === 'boolean') {
    console.log(`${a} is a boolean`);
}

// 3. Write an if statement that checks to see if a variable has been defined or not
//    solution: https://stackoverflow.com/a/19323555/247626 <= this works in here:
if (typeof d === 'undefined' || d === null) {
    console.log(`d is undefined; i.e. cannot be interpolated either!`);
}

// 4. Write an if statement asking if "s" greater than 12 ?
//
if ("s" > 12) {
    console.log('no log output form here');
}

// 5. Try it with a few more letters and a few numbers.
//
if ("s" > "12") {
    console.log('comparing "s" with "12" works though!');
}

// 6. Write a ternary statement that console.logs whether a number is odd or even.
//    For example:
//    var myNum = 10;
//    // Write your ternary here to log if `myNum` is odd or even.
//
//    (It should continue to work correctly even if myNum changes to a different number).
//
let myNum = 10;
console.log(myNum%2 === 0 ? 'even' : 'odd');
