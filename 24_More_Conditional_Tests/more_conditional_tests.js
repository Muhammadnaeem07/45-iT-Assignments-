"use strict";
//Equality and inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
//Equality and inequality Test 2
console.log(" inequality test with strings: ", 'Apple' != "orange");
//Tests using the lower case function 
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");
//Numerical tests inequality equality
console.log("Equality test with number: ", 25 === 25);
//Numerical tests involving inequality
console.log("Inequality test with number: ", 25 != 40);
//, greater than test
console.log("Greater than test: ", 15 > 10);
//less than test
console.log("less than test: ", 2 < 5);
//greater than or equal to,
console.log("Greater than and equal to test: ", 20 >= 20);
//less than or equal to
console.log("less than or equal to test: ", 10 <= 30);
//Tests using "and" operator
console.log("and operator test: ", 8 === 8 && 20 > 10);
//Tests using "or" operator
console.log("or operator test: ", 8 === 8 || false);
//Test whether an item is in a array
const fruits = ['mango', 'Banana', 'apple'];
console.log('Test "mango" in the array:', fruits.includes("mango"));
//Test whether an item is not in a array
console.log('Testing "lemon" is not in array:', !fruits.includes('lemon'));
