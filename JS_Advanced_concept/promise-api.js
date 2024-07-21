// ? NOTE: The Promise API return promises in the same sequence it was passed
// ?  irrespective of the time it take to fulfilled a specifc promise.


// all or nothing
Promise.all([
    new Promise((resolve, reject) => setTimeout(resolve(1), 5000)),
    new Promise((resolve, reject) => resolve(2)),
    new Promise((resolve, reject) => reject(3)),
    "non-promise-iterator"
]).finally(() => {
    console.log("Promise.all complete");
}).then(result => {
    console.log("Promise fulfilled", ...result)
}).catch(error => console.log("Catch", error));


// all settled
Promise.allSettled([
    new Promise((resolve, reject) => resolve(101)),
    new Promise((resolve, reject) => setTimeout(resolve(102), 5000)),
    new Promise((resolve, reject) => reject(103)),
    new Promise((resolve, reject) => resolve(104)),
    "non-promise-iterator",
]).finally(() => {
    console.log("Promise.allSettled Complete");
}).then(result => {
    for (const [indx, promiseObj] of Object.entries(result)) {
        console.log(`${indx} ->`, promiseObj);
    }
}).catch(error => console.log("Catch", error));


// Polyfil for Promise.allSettled
if (!Promise.allSettledNew) {
    const rejectHandler = reason => ({status: 'rejected', reason});
    const resolveHandler = result => ({status: 'fulfilled', result});

    Promise.allSettledNew = function(promises) {
        const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
        return Promise.all(convertedPromises);
    }
}

Promise.allSettledNew([
    new Promise((resolve, reject) => resolve(101)),
    new Promise((resolve, reject) => setTimeout(resolve(102), 5000)),
    new Promise((resolve, reject) => reject(103)),
    new Promise((resolve, reject) => resolve(104)),
    "non-promise-iterator",
]).finally(() => {
    console.log("Promise.allSettledNew Complete");
}).then(result => {
    debugger;
    for (const [indx, promiseObj] of Object.entries(result)) {
        console.log(`${indx} ->`, promiseObj);
    }
}).catch(error => console.log("Catch", error));

