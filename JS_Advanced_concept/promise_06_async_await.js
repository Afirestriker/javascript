/**
 * async is an keyword used with javascript function.
 * await is an keyword used inside async javascript function
 * async - await are the ways to handle promise.
 * They replace the traditional way of handling promise i.e., promise.then()/ .catch()
 * In other workd, async - await is an syntaxtical sugar for promise.then()/ .catch()
 */
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved 2');
    }, 20000)
});

/// Traditioanl way
function promiseHandler() {
    // .then callback function is pass to micro-task queue,
    // and the function execution continues to next line.
    p1.then(res => {
        console.log("Traditional", res);
    });

    console.log("JavaScript is Awesome 😇");
}
// promiseHandler();

/// Using async - await
async function promiseAsyncAwaitHandler() {
    const res = await p1; // the function execution is paused here
    console.log("Async-Await", res);

    const p2Res = await p2; // the function execution is paushed here
    console.log("Async-Await", p2Res);

    console.log("JavaScript is Awesome 🥰");

    // check call-stack for better understanding.
    // on await the function is paused and moved out of the call-stack
    // NOTE: THE CALL-STACK CAN'T BE HAULTED.
    // The function is move to micro-task queue and
    //  bring back to call-stack on promise resolve.
}
promiseAsyncAwaitHandler();
