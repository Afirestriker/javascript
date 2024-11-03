// function pass to another function
// implementing asynchronous in a synchronous single-threaded JavaScript language

function x(y) {
    console.log("x", this);
    y();
}

// passing function as a parameter to x()
x(function() {
    console.log("y")
});

// closure and event callback combined together. making the {let count} variable protected from outside
function count() {
    let count = 0;

    document.getElementById('clickme').addEventListener('click', function xyz() {
        console.log("Count", ++count, this);
    });
}

count();
