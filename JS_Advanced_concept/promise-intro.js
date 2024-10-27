/**
 * Promise in Javascript are used to handle async operation
 * Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * Unlike callbacks, promise returned an object to which you attached callbacks, instead of passing callbacks into a function.
 */
const GITHUB_API = 'https://api.github.com/users/afirestriker'

const promise = fetch(GITHUB_API)

promise.then(result => {
    return result.json();
}).then(result => {
    console.log(result)
})
