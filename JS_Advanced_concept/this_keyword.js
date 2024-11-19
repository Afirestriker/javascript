"use strict";

// 1. 'this' in global space
//   The value of 'this' keyword in global space varry according
//   to the JavaScript Runtime Environment
//   1. In browser its 'window'
//   2. In node its 'global'
//   3. ...some other
console.log(this); // globalObject - window, global

// 2. 'this' inside a function
function x() {
    // the value depends on strict / non-strict mode.
    // By conventional, the value of 'this' inside a function is 'undefined'
    // JavaScript has a 'value of substitution' which substitute the value
    //  from undefined to globalObject.
    //  NOTE: THIS WORKS ONLY IN CASE OF NON-STRIT MODE.
    console.log(this);
}
// x();

// 3. 'this' inside non-strict mode - (this substitution)

// If the value of this is undefined or null
// this keyword will be replaced with globalObject
// only in non-strict mode

// 4. 'this' keyword value also depends on how the function is called (window)
x(); // undefined (when the function is call w/o any reference in strict mode)
window.x(); // window (the function is called with reference to window)

// 5. 'this' inside a object's method
const student = {
    name: "Ash",
    printName: function () {
        console.log(this.name);
    }
}
student.printName(); // student object (depends on how the function is called)

const student2 = {
    name: "Pikachu"
}
// student2.printName(); // ❌ can't be called

// 6. call apply bind methods (sharing methods)
student.printName.call(student2); // substitute the value of this = student2 object
// student.printName.apply(student2);
// student2.printName = student.printName.bind(student2);
// student2.printName();

// 7. 'this' inside arrow function
// arrow functions don't provide their own 'this' binding
// (it retains the 'this' value of the enclosing lexical context/ environment)
class dummy {
    constructor() {
        console.log(this)
        this.x();
        this.y();
    }

    x() {
        console.log('x', this)
    }

    y = () => {
        console.log('y', this)
    }
}
const d1 = new dummy();

const obj = {
    a: 10,
    b: this, // window
    x: function() {
        console.log('x', this);
    },
    y: () => {
        console.log('y', this);
    }
}
console.log(obj.b);
obj.x(); // obj, since call with reference to obj
obj.y(); // globalObject, since the enclosing lexical context is obj and 'this' inside obj represent window. Check obj.b

// 8. 'this' inside nested arrow function
const obj2 = {
    a: 20,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this);
        }
        y();
    }
}
obj2.x(); // obj2, since the arrow function is enclosed in obj2.x() lexical context, where 'this' points to obj2

// 9. 'this' inside DOM elements => reference to HTML elements
