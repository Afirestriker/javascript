/* ******************************* 
 *1. Ways to print in JavaScript */
// console.log("Hello World");
// alert("Me & I");
// document.write("This is document.write()");

/* ******************************* 
 *2. Console API */
// console.log("Hello World", 4 + 6, "Another Log");
// console.log("Hello World " + (4 + 6) + " Concatenated String");
// console.warn("This is Custom Warning");
// console.error("This is an custom error");
// console.clear();        //this clear the console
// console.assert(4==6);   //check if 4==6, if not - returns an "Assertion Failed" error
// console.assert(4==(6-2));

/* ******************************* 
 *3. JavaScript Variable */
// what are variable? - containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2)

/* ******************************* 
 *4. Data Types in JavaScript 
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

/* ******************************* 
 *5. Operators in JavaScript */
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

/* ******************************* 
 *6. Functions in JavaScript - useful in implementing dry principle
   DRY PRINCIPLE = Do not repeat yourself.
*/
function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

/* ******************************* 
 *7. Conditionals in JavaScript */
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

/* ******************************* 
 *8. Loops in JavaScript */
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

//Recommended way to iterate an array
// arr.forEach(function(elements) {
//     console.log(elements);
// })

// const ac = 0;
// ac++;

// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// do{
//   ...statement
// } while(condition)

/* ******************************* 
 *9. break & continue statement */
// for (var i=0; i<arr.length; i++)
// {
//  if(i===2){
//   // break;
//   continue;
//  }
//  console.log(arr[i]);
// }

/* ******************************* 
 * 10. Array Methods */
let ar = ["Fan", "Camera", 34, null, true];
// console.log(ar.length);
// ar.pop();   //remove element from an array from end
// console.log(ar);  
// ar.push("Ash"); //add new element to an array at end
// console.log(ar);
// ar.shift(); //remove element from starting position and shift remaining element to one position left
// console.log(ar);
// ar.unshift("Ash"); //shift existing element of an array to one position right and add new element at starting position i.e. index-0
// console.log(ar);

/* ******************************* 
 * 11. String Methods in JavaScript */
let str = "This is a string string";
// console.log(str.length);
// console.log(str.indexOf("string"));
// console.log(str.lastIndexOf("string"));
// console.log(str.slice(1,3));
// console.log(str.replaceAll ("string", "str"));

/* ******************************* 
 * 12. Date */
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

/* ******************************* 
 * 13. DOM Manipulation */
let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass)
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

// removing class from an html element
// elemClass[0].classList.remove("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('button');
console.log(tn);

//fetch all div elements
tn = document.getElementsByTagName("div");
console.log(tn);
//create a new element dynamically in JavaScript
let createdElement = document.createElement('p');
//set some text for created element dynamically
createdElement.innerText = "This is a created para";
//now, append the created element to a tag in HTML Document
//here, tag is an first div element in an HTML document 
tn[0].appendChild(createdElement);

// create a new bold <b> tag
createdElement2 = document.createElement("b");
// add some text inside bold tag
createdElement2.innerText = "This is a created bold";
// replace the <b> tag with the above created <p> tag
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element);  ---> removes an element
// tn[0].removeChild(createdElement2);

// * selecting using query

// querySelector() return the first element with class 'container'
sel = document.querySelector('.container');
console.log(sel);

// querySelectionAll() return a node list which contains all element with class 'container'
sel = document.querySelectorAll('.container');
console.log(sel);
 