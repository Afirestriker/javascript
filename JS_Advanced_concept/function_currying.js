function outer() {
    let x = 1;

    function inner(y = x) {
        console.log(!!y);

    }

    x = 0;

    return inner;
}

outer()();
// Execution:
// 1. Called outer function
// 2. outer function returned another function.
// 3. Now visualize it like (outer()) + () === inner()

/**
* Similar to closure, but here we called outer and the closure together.
* Instead of call outer() and storing the return inner reference in a variable
* and then calling the inner using that variable.
*/
