// Understanding some JavaScript Jargon

// 1. Function Statement a.k.a Function Declaration
function xyzStatement() {
    console.log('This way of creating a function is a function statement');
}

// 2. Function Expression:
// xyzExpression(); // Throws: Uncaught TypeError: xyzExpression is not a function
var xyzExpression = function () {
    console.log("This is function expression. Function act's like an value and pass to a variable");
}

xyzStatement();
xyzExpression();

// 3. Difference between Function Statements and Function Expression?
/* Hoisting plays a crucial role in Function Statement and Function Expression.
   Function statement can be call before the declaration-line, since the whole statement is hoisted.
   Whereas, Function Expression can't be called before the function expression-line
   Since, though variables are hoisted, but with a undefined value which is not referencing to a function
   Until the function expression line gets executed
*/

// 4. Anonymous Function: Anonymous functions are used when functions are used as values eg. the code sample for function expression above.
/* function () {
    console.log("Function with name")
} */

// 5. Named function expression
var b = function xyzNamedExpression(x) {
    console.log("Named Function Expression", x);
}

b(); // "b called"
// xyzNamedExpression(); // Throws ReferenceError: xyzNamedExpression is not defined.
// xyzNamedExpression function is not created in global scope. So it can't be called.
// Rather the xyzNamedExpression function is created as a local variable and can be access inside itself.

// 6. Difference between Parameters & Arguments ?
/* The varialbe used inside brackets () during function declaration are parameters
   The variable pass inside brackets () during funciton call are arguments
*/

// 7. First Class Functions a.k.a First Class Citizens
/* The ability of a function to
     - be use as values (function epxression)
     - be pass-in as an argument to another function (HOF)
     - be returned from an function.
   Its these ability is known as First Class Function
*/

// 8. Arrow Functions
