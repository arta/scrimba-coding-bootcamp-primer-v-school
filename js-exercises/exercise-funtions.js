// Functions are important building blocks in any language. 
// They help ensure that your code follows the DRY principle and that you 
// follow a design principle called Separation of Concerns. 
// Your functions should “do one thing and do it well” (McIlroy).
// 
// These exercises will help strengthen your function know-how.


// 1. Write a function that accepts two numbers as parameters, and returns the sum.
// function sum(a,b) {
//     return a + b;
// }
// console.log(sum(1,4));


// 2. Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
// function largest(a,b,c) {
//     x = a > b ? a : b;
//     y = x > c ? x : c;
//     return y;
// }
// console.log(largest(2,3,1));


// 3. Write a function that accepts one number as a parameter, and returns whether that number is even or odd. 
//    (Return the string "even" or "odd");
// function evenOdd(n) {
//     return n%2 === 0 ? 'Even' : 'Odd';
// }
// console.log(evenOdd(14));


// 4. Write a function that accepts a string as a parameter. 
//    If the length of the string is less than or equal to twenty characters long, 
//    return the string concatenated with itself (string + string).
//    If the string is more than twenty characters long, 
//    return the first half of the string.
// function doubleOrHalf(aString) {
//     if (aString.length <= 20) {
//         return aString + aString;
//     } else {
//         slicer = Math.floor(aString.length/2);
//         return aString.slice(0,slicer);
//     }
// }
// let s = 'afhiuehfiehnfiejroueyegfh9fei';
// console.log(s.length);
// let dh = doubleOrHalf(s);
// console.log(dh.length);
// console.log(dh);


// Optional Challenge

// 5. Write a function that accepts a number ‘n’ as a parameter. 
//    Then print the first ‘n’ Fibonacci numbers and return their sum.
//    The first numbers are:
//    1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
//    So if n were 6, the sum of 1 + 1 + 2 + 3 + 5 + 8 would be 20
//    Don't hardcode the sequence.
// function fibonacciSum(n) {
//     let s = 0;
//     if (n === 0) {
//         console.log(n);
//     } else if (n >= 1) {
//         let a = 0;
//         let b = 1;
//         for (var i = 1; i <= n; i++) {
//             fib = a + b;
//             console.log(fib);
//             b = a;
//             a = fib;
//             s = s + fib;
//         }
//     }
//     console.log(s);
// }
// fibonacciSum(6);

// 6. Write a function that accepts a string as a parameter.
//    Return the most frequently occuring letter in that string.
//    (White spaces count as a letter)
//
function lettersMode(aString) {
    let lettersFrequencies = {};
    for (var i = 0; i < aString.length; i++) {
        l = aString.slice(i, i + 1)
        l = l === ' ' ? 'ws' : l;
        l in lettersFrequencies ? lettersFrequencies[`${l}`] = lettersFrequencies[`${l}`] + 1 : lettersFrequencies[`${l}`] = 1; 
    }
    console.log(lettersFrequencies);
    let frequencies = Object.values(lettersFrequencies);
    console.log(frequencies);
    let max = Math.max(...frequencies); // `...` is a spread operator (Ruby's * splat operator)
    let indexOfMax = frequencies.indexOf(max);
    console.log(indexOfMax);
    console.log(Object.keys(lettersFrequencies)[indexOfMax]);
}
lettersMode('carr am ba  r a');