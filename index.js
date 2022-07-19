//This is my first JavaScript code
console.log('Hello World');

/* *********************************************************
#Variable 
*/
let firstName = 'Kate';
console.log(firstName);
// In JS we can declare variable in two ways 'var' and 'let' keyword.
// Variable name cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number and can include on underscore (_) as a special character
// Variable are Case-Sensitive in JavaScript.
// Variable value can vary/changeable as and when needed


/* ********************************************************* 
#Constants 
*/
const interestRate = 0.3;
// interestRate = 1;    //This line throws an error "Assignment to constant variable".
console.log(interestRate);
// Constant are same like variable, but we cannot change the value of it later in code.


/* *********************************************************
 #Primitive Types 
*/
let lastName = "Katy";          //String Literal
let age = 25;                   //Number Literal
let isApproved = true;          //Boolean Literal
let middleName = undefined;     //Here, the variable type is 'undefined' + the value is also set to 'undefined'
let selectedColor = null;      //we set the variable to null, where we explicitly need to clear the vlaue of a variable


/* *********************************************************
 Objects 
 */
let person = {                  // {} curly-braces are term as object literal
    firstName: "Kate",          // Inside curly-braces we have properties and methods for objects
    age: 25
};

//Dot Notation
person.firstName = "Jack";

//Bracket Notation
person["firstName"] = "Jackson";

//Bracket Notation 2
let selection = "firstName";
person[selection] = "Jacky";

console.log(person.firstName);


/* ********************************************************* 
Arrays */
let selectedColors = ['white', 'black'];        //square bracket are call arrays literals

// since JavaScript is dynamic language, and the type of variable can change at run-time.
// the same principle applies to array and so
    // the array length as well as the type of object in an array are changeable.
// Unlike other programming language, in JS an array can have mix type of values
selectedColors[2] = 1;
selectedColors[3] = null;
console.log(selectedColors);
console.log(selectedColors[0]);

// Array is an Object in JavaScript.
// And as objects has property, there are some pre-defined Array properties
// Array length property
console.log(selectedColors.length);


/* ********************************************************* 
Functions */
// function are one of the fundamental building blocks of JS

// Performing a task
function greet(firstName, lastName) {
    // body of function
    console.log('Hello, ' + firstName + ' ' + lastName);
}

greet("Kate", "Katy");  //the parameter pass over here are term as "Arguments"

// Calculate a value
function square(number){
    return number * number;
}

console.log(square(25));
