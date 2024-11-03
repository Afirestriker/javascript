/**
 * Promise.all        - all or nothing (i.e., array of all fulfilled promise if none rejected or else the error of the first rejected promise).
 * Promise.allSettled - result a array of promise object with both status as 'fulfilled' and 'rejected'.
 * Promise.race       - return the result of first settled promise.
 * Promise.any        - return the result of first fulfilled (resolved/ settled success) promise.
 */
const p1 = new Promise((resolve, reject) => setTimeout(() => {
    // resolve('P1 Success');
    reject('P1 Rejected');
}, 1000));

const p2 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('P2 Success');
    // reject('P2 Rejected');
}, 3000));

const p3 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('P3 Success');
}, 5000));

/* Promise.all([p1, p2, p3])
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err)
    });
*/

// most safest option of all 4 promise APIs
/* Promise.allSettled([p1, p2, p3])
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err)
    });
*/

// return the result of first settled promise
/* Promise.race([p1, p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log(err))
*/

// resunt the result of first fulfilled (resolved) promise
Promise.any([p1, p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log(err))
