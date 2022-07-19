/* 1. Ways to print in JavaScript */
// console.log("Hello World");
// alert("Me & I");
// document.write("This is document.write()");

/* 2. Console API */
// console.log("Hello World", 4 + 6, "Another Log");
// console.log("Hello World " + (4 + 6) + " Concatenated String");
// console.warn("This is Custom Warning");
// console.error("This is an custom error");
// console.clear();        //this clear the console
// console.assert(4==6);   //check if 4==6, if not - returns an "Assertion Failed" error
// console.assert(4==(6-2));

/* 3. JavaScript Variable */
// what are variable? - containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2)

/* 4. Data Types in JavaScript 
   At a very hight level, ther ear etwo types of data types in JavaScript
   a. Primitive data types: undefined, null, number, string, boolean, symbol.
   b. Reference data types: Arrays, Objects, Function.
 */

// Number
var num1 = 455;
var num2 = 56.79;

// string
var str1 = "This is double quoted string";
var str2 = "This is single quoted string";

// objects - Key: value pairs
var marks = {
  ravi: 45,
  shubham: 78,
  harry: 99.97,
};
// console.log(marks);

// arrays - collection of elements / string / numbers / booleans
var arr = [1, 2, 3, "anyString", 4, 5];
// console.log(arr);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// undefined
var und;
// console.log(und);

// null
var n = null;
// console.log(n);

/* 5. Operators in JavaScript */
// Arithmetic Operators
var a = 100,
  b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
c += 2;
// console.log(c);

// Comparison Operator
// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);

// Logical Operator (AND, OR, NOT)
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(!false);
// console.log(!true);

/* 6. Functions in JavaScript - useful in implementing dry principle
   DRY PRINCIPLE = Do not repeat yourself.
*/
function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

/* 7. Conditionals in JavaScript */
var age = 25;
// Single if statement
// if(age > 18) {
//     console.log("You can vote");
// }

// if-else statement
// if(age > 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote");
// }

// if-else ladder
// age = 29;
// if (age > 32) {
//   console.log("Above 32");
// }
// else if(age > 26) {
//   console.log("Above 26");
// }
// else if(age > 18) {
//     console.log("Above 18");
// }
// console.log("End of ladder");

/* 8. Loops in JavaScript */
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

//Recommended way to iterate an array
// arr.forEach(function(elements) {
//     console.log(elements);
// })

// const ac = 0;
// ac++;

let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}
