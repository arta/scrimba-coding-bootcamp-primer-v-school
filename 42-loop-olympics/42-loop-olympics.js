// The exercise will get progressively harder and hard. 
// You at least should get one medal, but feel free to go the extra mile!

// Preliminaries
// 1. Write a for loop that prints to the console the numbers 0 through 9.
// for (let i = 0; i <= 9; i++) {
//   console.log(i);
// }

// let i = 0;
// while(i <= 9) {
//   console.log(i);
//   i++;
// }


// 2. Write a for loop that prints to the console 9 through 0.
// for(let i = 9; i >= 0; i--) {
//   console.log(i);
// }


// 3. Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }


// Bronze Medal
// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// let arr = [];
// for (i = 0; i <= 9; i++) {
//   arr.push(i);
// }
// console.log(arr);
// console.log(arr.length);


// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// for (let i = 0; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
//   	}
// }


// 3. Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// let evenFruit = [];
// for (i = 0; i < fruit.length; i+=2) {
// 	evenFruit.push(fruit[i]);
// }
// console.log(evenFruit);


// Silver Medal
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
// 1. Write a loop that will print out all the names of the people of the people array
// for (let i = 0; i < peopleArray.length; i++) {
// 	console.log(peopleArray[i].name);
// }


// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// let names = [];
// let occupations = [];
// for (let i = 0; i < peopleArray.length; i++) {
// 	names.push(peopleArray[i].name);
// 	occupations.push(peopleArray[i].occupation);
// }
// console.log(names);
// console.log(occupations);


// 3. Write a loop that pushes every other name to an array starting with "Harrison Ford", 
//    and every other occupation to another array starting with "Singer".
// let names = [];
// let occupations = [];
// for (let i = 0; i < peopleArray.length; i++) {
// 	if (i%2 === 0) {
// 		names.push(peopleArray[i].name);
// 	} else if (i > 0 && i%2 !== 0) {
// 		occupations.push(peopleArray[i].occupation);
// 	}
// }
// console.log(names);
// console.log(occupations);


// Gold Medal - Nesting
// Create an array that mimics a grid like the following using nested for loops:
//   [[0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]]
// let a = [];
// for (let i = 0; i <= 2; i++) {
// 	let b = [];
// 	for (let j = 0; j <= 2; j++) {
// 		b.push(0);
// 	}
// 	a.push(b);
// }
// console.log(a);


// 2.Create an array that mimics a grid like the following using nested for loops:
//   [[0, 0, 0],
//   [1, 1, 1],
//   [2, 2, 2]]
// let a = [];
// for (let i = 0; i <= 2; i++) {
// 	let b = [];
// 	for (let j = 0; j <= 2; j++) {
// 		b.push(i);
// 	}
// 	a.push(b);
// }
// console.log(a);


// 3.Create an array that mimics a grid like the following using nested for loops:
//   [[0, 1, 2],
//   [0, 1, 2],
//   [0, 1, 2]]
// let a = [];
// for (let i = 0; i <= 2; i++) {
// 	let b = [];
// 	for (let j = 0; j <= 2; j++) {
// 		b.push(j);
// 	}
// 	a.push(b);
// }
// console.log(a);


// 4. Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// var grid = [["x", ...],
// ["x", ...],
// ["x", ...], ...]
// let grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
// for (let i = 0; i < grid.length; i++) {
// 	for (let j = 0; j < grid[i].length; j++) {
// 		grid[i][j] = 'x';
// 	}
// }
// console.log(grid);