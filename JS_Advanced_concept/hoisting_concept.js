
console.log(a);

console.log(b);
// b is hoisted like a, but in a different memory space. Not in Global. Hence its
// exist but can't be access and hence the ReferenceError is thrown saying cannot
// access 'b' before initialization. That means b is present but can't be access

var a;
let b;
